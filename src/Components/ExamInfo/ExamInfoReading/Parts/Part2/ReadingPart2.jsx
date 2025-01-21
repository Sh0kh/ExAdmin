import { useState, useEffect } from "react";
import QuestionText from "../QuestionText";
import QuestionTextCreate from "../QuestionTextCreate";
import QuestionTextEdit from "../QuestionTextEdit";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import ReactLoading from "react-loading";
import PartTitle from "../../../PartTitle";
import PartFoto from "../../../PartFoto";
import QuestionDelete from "../../../ExamComponent/QuestionDelete";
import QuestionTable from "../../../ExamComponent/QuestionTable";
import QuestionCreate from "../../../ExamComponent/QuestionCreate";
import QuestionEdit from "../../../ExamComponent/QuestionEdit";



export default function ReadingPart2() {
    const [createModalText, setCreateModalText] = useState(false)
    const [createModal, setCreateModal] = useState(null)
    const [EditTextModal, setEditTextModal] = useState(false)
    const [EditModal, setEditModal] = useState(false)
    const [DeleteModal, setDeleteModal] = useState(false)
    const [deleteId, setDeleteId] = useState(null)
    const [EditData, setEditData] = useState(null)


    const { id } = useParams()
    const [searchParams] = useSearchParams();
    const name = searchParams.get("name");
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [title, setTitle] = useState()
    const [foto, setFoto] = useState(null)



    const getQuestion = async () => {
        try {
            const response = await axios.get(`/parts/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            setData(response?.data)
            setTitle(response?.data?.description)
            setFoto(response?.data?.photo_path)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getQuestion()
    }, [])


    const handleEditTextModalOpen = () => {
        setEditTextModal(true);
    };
    const handleEditModalOpen = (data) => {
        setEditModal(true);
        setEditData(data)
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
        <div className="Exam w-full p-[15px]">
            <div className="Header__wrapper">
                <h1 className="text-MainColor text-[32px] font-[700]">
                    Imtihon ・ {name} ・ Reading ・ 2 qism
                </h1>
                <div className="flex items-center gap-[10px]">
                    {data?.right_text === null && (
                        <button onClick={() => setCreateModalText(true)} className="bg-MainColor text-[white] rounded-[10px] p-[10px] border-[2px] border-MainColor duration-500 px-[20px] hover:text-MainColor hover:bg-[white]">
                            Matn yaratish
                        </button>
                    )}
                    <button onClick={() => setCreateModal(true)} className="bg-MainColor text-[white] rounded-[10px] p-[10px] border-[2px] border-MainColor duration-500 px-[20px] hover:text-MainColor hover:bg-[white]">
                        Savol yaratish
                    </button>
                </div>
            </div>
            <div className="mt-[20px]">
                <PartTitle data={title} />
                <PartFoto data={foto} />
                <QuestionText data={data?.right_text} Edit={handleEditTextModalOpen} />
                {data?.questions?.length > 0 ? (
                    <QuestionTable Edit={handleEditModalOpen} Delete={handleDeleteModalOpen} data={data?.questions} />
                ) : (
                    <div className="w-full h-[404px] flex items-center justify-center ">
                        <h1 className="font-bold text-[25px]">
                            Bo`sh
                        </h1>
                    </div>
                )}
            </div>
            <QuestionCreate refresh={getQuestion} isOpen={createModal} onClose={() => setCreateModal(false)} />
            <QuestionEdit data={EditData} isOpen={EditModal} onClose={() => setEditModal(false)} />
            <QuestionDelete refresh={getQuestion} id={deleteId} isOpen={DeleteModal} onClose={() => setDeleteModal(false)} />

            <QuestionTextCreate refresh={getQuestion} isOpen={createModalText} onClose={() => setCreateModalText(false)} />
            <QuestionTextEdit refresh={getQuestion} data={data} isOpen={EditTextModal} onClose={() => setEditTextModal(false)} />
        </div>
    )
}