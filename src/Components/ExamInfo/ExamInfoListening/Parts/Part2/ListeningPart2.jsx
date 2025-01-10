import { useState, useEffect } from "react"
import LQP2Create from "./LQP2Create"
import LQ2Text from "./LQP2Text"
import LQP2Edit from "./LQP2Edit"
import axios from "axios"
import { useParams, useSearchParams } from "react-router-dom";
import ReactLoading from "react-loading";
import QuestionDelete from "../../../ExamComponent/QuestionDelete"
import PartTitle from "../../../PartTitle"



export default function ListeningPart2() {



    const [loading, setLoading] = useState(true)
    const [createModal, setCreateModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [EditData, setEditData] = useState(null)
    const [deleteId, setDeleteId] = useState(null)
    const { id } = useParams()
    const [searchParams] = useSearchParams();
    const name = searchParams.get("name");
    const [title, setTitle] = useState('')
    const [data, setData] = useState()
    const getQuestion = async () => {
        try {
            const response = await axios.get(`/parts/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            setData(response?.data?.questions)
            setTitle(response?.data?.description)
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
                    Imtihon ・ {name} ・ Listening ・ 2 qism
                </h1>
                <div className="flex items-center gap-[10px]">
                    {!data[0] && (
                        <button onClick={() => setCreateModal(true)} className="bg-MainColor text-[white] rounded-[10px] p-[10px] border-[2px] border-MainColor duration-500 px-[20px] hover:text-MainColor hover:bg-[white]">
                            Matn yaratish
                        </button>
                    )}
                </div>
            </div>
            <div className="mt-[20px]">
                <PartTitle data={title} />
                <LQ2Text data={data} Edit={handleEditModalOpen} Delete={handleDeleteModalOpen} />
            </div>
            <LQP2Edit data={EditData}  refresh={getQuestion} isOpen={editModal} onClose={() => setEditModal(false)} />
            <LQP2Create refresh={getQuestion} isOpen={createModal} onClose={() => setCreateModal(false)} />
            <QuestionDelete id={deleteId} refresh={getQuestion} isOpen={deleteModal} onClose={() => setDeleteModal(false)} />
        </div>
    )
}