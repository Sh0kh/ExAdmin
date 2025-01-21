import { useEffect, useState } from "react";
import LQP6Create from "./LQP6Create";
import LQP6Table from "./LQP6Table";
import LQP6Eidt from "./LQP6Edit";
import ReactLoading from "react-loading";
import { useParams, useSearchParams } from "react-router-dom";
import PartTitle from "../../../PartTitle"
import axios from "axios";
import QuestionDelete from "../../../ExamComponent/QuestionDelete";
import Text from "../../../ExamComponent/Text";
import TextCreate from "../../../ExamComponent/TextCreate";
import TextEdit from "../../../ExamComponent/TextEdit";

export default function ListeningPart6() {
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
                    Imtihon ・ {name} ・ Listening ・ 6 qism
                </h1>
                {!data[0] && (
                    <button onClick={() => setCreateModal(true)} className="bg-MainColor text-[white] rounded-[10px] p-[10px] border-[2px] border-MainColor duration-500 px-[20px] hover:text-MainColor hover:bg-[white]">
                        Matn yaratish
                    </button>
                )}
            </div>
            <div className="mt-[20px]">
                <PartTitle data={title} />
                <Text data={data} Edit={handleEditModalOpen} Delete={handleDeleteModalOpen} />
            </div>

            <TextCreate refresh={getQuestion} isOpen={CreateModal} onClose={() => setCreateModal(false)} />
            <TextEdit refresh={getQuestion} data={EditData} isOpen={EditModal} onClose={() => setEditModal(false)} />
            <QuestionDelete refresh={getQuestion} id={deleteId} isOpen={DeleteModal} onClose={() => setDeleteModal(false)} />
        </div>
    )
}