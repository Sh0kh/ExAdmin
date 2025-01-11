import { useState, useEffect } from "react";
import RQP1TextCreate from "./RQP1TextCreate";
import RQP1Text from "./RQP1Text";
import RQP1Edit from "./RQP1Edit";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import ReactLoading from "react-loading";
import PartTitle from "../../../PartTitle"
import QuestionDelete from "../../../ExamComponent/QuestionDelete";



export default function ReadingPart1() {
    const [CreateTextModal, setCreateTextModal] = useState(false)
    const [CreateQuestionModal, setCreateQuestionsModal] = useState(false)
    const [EditModal, setEditModal] = useState(false)
    const [DeleteModal, setDeleteModal] = useState(false)

    const [EditData, setEditData] = useState(null)
    const [deleteId, setDeleteId] = useState(null)
    const { id } = useParams()
    const [searchParams] = useSearchParams();
    const name = searchParams.get("name");
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [title, setTitle] = useState()

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
        <div className="Exam w-full p-[15px]">
            <div className="Header__wrapper">
                <h1 className="text-MainColor text-[32px] font-[700]">
                    Imtihon ・ {name} ・ Reading ・ 1 qism
                </h1>
                <div className="flex items-center gap-[10px]">
                    {!data[0] && (
                        <button onClick={() => setCreateTextModal(true)} className="bg-MainColor text-[white] rounded-[10px] p-[10px] border-[2px] border-MainColor duration-500 px-[20px] hover:text-MainColor hover:bg-[white]">
                            Savol yaratish
                        </button>
                    )}
                </div>
            </div>
            <div className="mt-[20px]">
                <PartTitle data={title} />
                <RQP1Text data={data} Edit={handleEditModalOpen} Delete={handleDeleteModalOpen} />
            </div>
            <RQP1TextCreate refresh={getQuestion} isOpen={CreateTextModal} onClose={() => setCreateTextModal(false)} />
            <RQP1Edit data={EditData} refresh={getQuestion} isOpen={EditModal} onClose={() => setEditModal(false)} />
            <QuestionDelete id={deleteId} refresh={getQuestion} isOpen={DeleteModal} onClose={() => setDeleteModal(false)} />
        </div>
    )
}