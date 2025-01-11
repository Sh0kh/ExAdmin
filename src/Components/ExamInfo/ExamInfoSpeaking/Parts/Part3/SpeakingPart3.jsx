import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import ReactLoading from "react-loading";
import SpeakingQuestions from "../SpeakingQuestions";
import SpeakingQuestionCreate from "../SpeakingQuestionCreate";
import QuestionDelete from "../../../ExamComponent/QuestionDelete";
import SpeakingQuestionEdit from "../SpeakingQuestionEdit";
import PartFoto from "../../../PartFoto";



export default function SpeakingPart3() {
    const [CreateModal, setCreateModal] = useState(false)
    const [EditModal, setEditModal] = useState(false)
    const [DeleteModal, setDeleteModal] = useState(false)

    const [EditData, setEditData] = useState(null)
    const [deleteId, setDeleteId] = useState(null)
    const { id } = useParams()
    const [searchParams] = useSearchParams();
    const name = searchParams.get("name");
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [foto, setFoto] = useState(null)


    const getQuestion = async () => {
        try {
            const response = await axios.get(`/parts/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            setData(response?.data?.questions)
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
        <div className="Exam w-full p-[15px]">
            <div className="Header__wrapper">
                <h1 className="text-MainColor text-[32px] font-[700]">
                    Imtihon ・ {name} ・ Speaking ・ 3 qism
                </h1>
                <div className="flex items-center gap-[10px]">
                    <button onClick={() => setCreateModal(true)} className="bg-MainColor text-[white] rounded-[10px] p-[10px] border-[2px] border-MainColor duration-500 px-[20px] hover:text-MainColor hover:bg-[white]">
                        Savol yaratish
                    </button>
                </div>
            </div>
            <div className="mt-[20px]">
                <PartFoto data={foto} />
                {data && data?.length > 0 ? (
                    <SpeakingQuestions Edit={handleEditModalOpen} Delete={handleDeleteModalOpen} data={data} />
                ) : (
                    <div className="w-full h-[404px] flex items-center justify-center ">
                        <h1 className="font-bold text-[25px]">
                            Bo`sh
                        </h1>
                    </div>
                )}            </div>
            <SpeakingQuestionCreate refresh={getQuestion} isOpen={CreateModal} onClose={() => setCreateModal(false)} />
            <QuestionDelete id={deleteId} refresh={getQuestion} isOpen={DeleteModal} onClose={() => setDeleteModal(false)} />
            <SpeakingQuestionEdit data={EditData} refresh={getQuestion} isOpen={EditModal} onClose={() => setEditModal(false)} />        </div>
    )
}