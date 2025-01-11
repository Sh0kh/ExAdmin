import { useEffect, useState } from "react";
import RQPTextCreate from "./RQPTextCreate";
import RQP4Text from "./RQP4Text";
import RQP4Question from "./RQP4Question";
import RQP4Create from "./RQP4Create";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import ReactLoading from "react-loading";
import QuestionDelete from "../../../ExamComponent/QuestionDelete";
import RQP4Edit from "./RQP4Edit";
import Paragraph from "../Paragraph";
import ParagraphCreate from "../ParagraphCreate";



export default function ReadingPart4() {
    const [createModal, setCreateModal] = useState(false)
    const [createModal2, setCreateModal2] = useState(false)
    const [EditModal, setEditModal] = useState(false)
    const [DeleteModal, setDeleteModal] = useState(false)
    const [ParagraphModal, setParagraphModal] = useState(false)
    const [paragraphType, setParagraphType] = useState(null)


    const [EditData, setEditData] = useState(null)
    const [deleteId, setDeleteId] = useState(null)
    const { id } = useParams()
    const [searchParams] = useSearchParams();
    const name = searchParams.get("name");
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [paragraph, setParagraph] = useState()

    const getQuestion = async () => {
        try {
            const response = await axios.get(`/parts/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            setData(response?.data)
            setParagraph(response?.data?.description)
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
    const handlParagraph = (type) => {
        setParagraphType(type)
        setParagraphModal(true)
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
                    Imtihon ・ {name} ・ Reading ・ 4 qism
                </h1>
                <div className="flex items-center gap-[10px]">
                    <button onClick={() => setCreateModal2(true)} className="bg-MainColor text-[white] rounded-[10px] p-[10px] border-[2px] border-MainColor duration-500 px-[20px] hover:text-MainColor hover:bg-[white]">
                        Savol yaratish
                    </button>
                </div>
            </div>
            <div className="mt-[20px]">
                <Paragraph Create={handlParagraph} data={paragraph} />
                <RQP4Question Edit={handleEditModalOpen} Delete={handleDeleteModalOpen} data={data} />
            </div>


            <ParagraphCreate data={data} type={paragraphType} refresh={getQuestion} isOpen={ParagraphModal} onClose={() => setParagraphModal(false)} />


            <RQP4Create refresh={getQuestion} isOpen={createModal2} onClose={() => setCreateModal2(false)} />
            <RQP4Edit data={EditData} isOpen={EditModal} onClose={() => setEditModal(false)} />
            <QuestionDelete refresh={getQuestion} id={deleteId} isOpen={DeleteModal} onClose={() => setDeleteModal(false)} />
        </div>
    )
}