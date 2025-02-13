import { useState } from "react";
import SQP3Questions from "./SQP3Questions";
import SQPCreate from "./SQPCreate";
import SQP3Good from "./SQP3Good";
import SQP3Evil from "./SQP3Evil";
import { useEffect } from "react";
import axios from "axios";
import ReactLoading from "react-loading";
import { useParams } from "react-router-dom";
import QuestionDelete from "../../../ExamComponent/QuestionDelete";
import SpeakingQuestionEdit from "../SpeakingQuestionEdit";



export default function SpeakingPart4() {
    const [CreateModal, setCreateModal] = useState(false)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [DeleteModal, setDeleteModal] = useState(false)
    const [DeleteId, setDeleteId] = useState(null)
    const [EditModal, setEditModal] = useState(false)
    const [EditData, setEditData] = useState(null)

    const { id } = useParams()

    const getQuestion = async () => {
        try {
            const response = await axios.get(`/parts/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            setData(response?.data)
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
                    Imtihon ・ Exam Name ・ Speaking ・ 3 qism
                </h1>
                <div className="flex items-center gap-[10px]">
                    {data?.questions?.length <= 0 && (
                        <button onClick={() => setCreateModal(true)} className="bg-MainColor text-[white] rounded-[10px] p-[10px] border-[2px] border-MainColor duration-500 px-[20px] hover:text-MainColor hover:bg-[white]">
                            Savol yaratish
                        </button>
                    )}
                </div>
            </div>
            {data?.questions?.length > 0 ? (
                <div className="mt-[20px]">
                    <SQP3Questions EditModal={handleEditModalOpen} DeleteModal={handleDeleteModalOpen} data={data} />
                    <SQP3Good data={data} />
                    <SQP3Evil data={data} />
                </div>
            ) : (
                <div className="w-full h-[404px] flex items-center justify-center ">
                    <h1 className="font-bold text-[25px]">
                        Bo`sh
                    </h1>
                </div>
            )}
            <SQPCreate isOpen={CreateModal} onClose={() => setCreateModal(false)} refresh={getQuestion} />
            <QuestionDelete refresh={getQuestion} id={DeleteId} isOpen={DeleteModal} onClose={() => setDeleteModal(false)} />
            <SpeakingQuestionEdit data={EditData} refresh={getQuestion} isOpen={EditModal} onClose={() => setEditModal(false)} />
        </div>
    )
}