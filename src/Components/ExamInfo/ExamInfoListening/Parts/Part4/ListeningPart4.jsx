import { useState, useEffect } from "react"
import axios from "axios";
import ReactLoading from "react-loading";
import { useParams, useSearchParams } from "react-router-dom"
import PartTitle from "../../../PartTitle"
import QuestionDelete from "../../../ExamComponent/QuestionDelete"
import PartFoto from "../../../PartFoto"
import QuestionCreate from "../../../ExamComponent/QuestionCreate";
import QuestionEdit from "../../../ExamComponent/QuestionEdit";
import QuestionTable from "../../../ExamComponent/QuestionTable";

export default function ListeningPart4() {

    const [createModal, setCreateModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)

    const [EditData, setEditData] = useState(null)
    const [deleteId, setDeleteId] = useState(null)
    const { id } = useParams()
    const [searchParams] = useSearchParams();
    const name = searchParams.get("name");
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [title, setTitle] = useState()
    const [FotoPath, setPhotoPath] = useState(null)

    const getQuestion = async () => {
        try {
            const response = await axios.get(`/parts/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            setData(response?.data?.questions)
            setTitle(response?.data?.description)
            setPhotoPath(response?.data?.photo_path)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getQuestion()
    }, [])

    const handleEditModalOpen = (data) => {
        setEditData(data);
        setEditModal(true);
    };

    const handleDeleteModalOpen = (id) => {
        setDeleteId(id);
        setDeleteModal(true);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen w-full">
                <ReactLoading type="spinningBubbles" color="#000" height={100} width={100} />
            </div>
        );
    }


    return (
        <div className="Exam p-[15px] w-full">
            <div className="Header__wrapper">
                <h1 className="text-MainColor text-[32px] font-[700]">
                    Imtihon ・ {name} ・ Listening ・ 4 qism
                </h1>
                <button onClick={() => setCreateModal(true)} className="bg-MainColor text-[white] rounded-[10px] p-[10px] border-[2px] border-MainColor duration-500 px-[20px] hover:text-MainColor hover:bg-[white]">
                    Savol yaratish
                </button>
            </div>
            <div className="mt-[20px]">
                <PartTitle data={title} />
                <PartFoto data={FotoPath} />
                <QuestionTable data={data} Edit={handleEditModalOpen} Delete={handleDeleteModalOpen} />
            </div>
            <QuestionCreate type={'select'} refresh={getQuestion} isOpen={createModal} onClose={() => setCreateModal(false)} />
            <QuestionDelete id={deleteId} refresh={getQuestion} isOpen={deleteModal} onClose={() => setDeleteModal(false)} />
            <QuestionEdit type={'select'} refresh={getQuestion} data={EditData} isOpen={editModal} onClose={() => setEditModal(false)} />
        </div>
    )
}