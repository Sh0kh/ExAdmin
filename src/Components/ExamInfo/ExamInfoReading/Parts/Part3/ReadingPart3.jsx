import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import ReactLoading from "react-loading";
import QuestionTextCreate from "../QuestionTextCreate";
import QuestionTextEdit from "../QuestionTextEdit";
import QuestionText from "../QuestionText";
import Paragraph from "../Paragraph";
import ParagraphCreate from "../ParagraphCreate";
import QuestionDelete from "../../../ExamComponent/QuestionDelete";
import QuestionCreate from "../../../ExamComponent/QuestionCreate";
import QuestionEdit from "../../../ExamComponent/QuestionEdit";
import QuestionTable from "../../../ExamComponent/QuestionTable";



export default function ReadingPart3() {
    const [createModal, setCreateModal] = useState(false)
    const [EditModal, setEditModal] = useState(false)
    const [DeleteModal, setDeleteModal] = useState(false)
    const [EditTextModal, setEditTextModal] = useState(false)
    const [createModalText, setCreateModalText] = useState(false)
    const [ParagraphModal, setParagraphModal] = useState(false)
    const [paragraphType, setParagraphType] = useState(null)


    const [deleteId, setDeleteId] = useState(null)
    const [EditData, setEditData] = useState(null)


    const { id } = useParams()
    const [searchParams] = useSearchParams();
    const name = searchParams.get("name");
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [paragraph, setParagraph] = useState(null)
    const [foto, setFoto] = useState(null)



    const getQuestion = async () => {
        try {
            const response = await axios.get(`/parts/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            setData(response?.data)
            setParagraph(response?.data?.description)
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
                    Imtihon ・ {name} ・ Reading ・ 3 qism
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
                <Paragraph Create={handlParagraph} data={paragraph} />
                <QuestionText data={data?.right_text} Edit={handleEditTextModalOpen} />
                <QuestionTable Edit={handleEditModalOpen} Delete={handleDeleteModalOpen} data={data?.questions} />
            </div>
            <QuestionTextCreate refresh={getQuestion} isOpen={createModalText} onClose={() => setCreateModalText(false)} />
            <QuestionTextEdit refresh={getQuestion} data={data} isOpen={EditTextModal} onClose={() => setEditTextModal(false)} />
            <QuestionCreate type={'select'} refresh={getQuestion} isOpen={createModal} onClose={() => setCreateModal(false)} />
            <QuestionEdit type={'select'} data={EditData} refresh={getQuestion} isOpen={EditModal} onClose={() => setEditModal(false)} />
            <QuestionDelete refresh={getQuestion} id={deleteId} isOpen={DeleteModal} onClose={() => setDeleteModal(false)} />
            <ParagraphCreate data={data} type={paragraphType} refresh={getQuestion} isOpen={ParagraphModal} onClose={() => setParagraphModal(false)} />
        </div>
    )
}