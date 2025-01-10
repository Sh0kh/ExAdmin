import { useEffect, useState } from "react";
import RQP5TextCreate from "./RQP5TextCreate";
import RQP5CreateQuestion from "./RQP5CreateQuestion";
import RQP5QuestionCreate from "./RQP5QuestionEdit";
import RQP5Text from "./RQP5Text";
import RQP5Question from "./RQP5Question";
import RQP5TextQuestion from "./RQP5TextQuestion";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import ReactLoading from "react-loading";
import Paragraph from "../Paragraph";
import ParagraphCreate from "../ParagraphCreate";
import QuestionText from "../QuestionText";
import QuestionTextCreate from "../QuestionTextCreate";
import QuestionTextEdit from "../QuestionTextEdit";
import QuestionDelete from "../../../ExamComponent/QuestionDelete";
import RQP5EditText from "./RQP5EditText";
import RQP5QuestionEdit from "./RQP5QuestionEdit";



export default function ReadingPart5() {
    const [createModal, setCreateModal] = useState(false)
    const [createModal2, setCreateModal2] = useState(false)
    const [EditQuestionModal, setEditQuestionModal] = useState(false)
    const [EditModal, setEditModal] = useState(false)
    const [createModalText, setCreateModalText] = useState(false)
    const [EditTextModal, setEditTextModal] = useState(false)

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


    const handleEditTextModalOpen = () => {
        setEditTextModal(true);
    };

    const handleEditModalOpen = (data) => {
        setEditData(data);
        setEditModal(true);
    };
    const handleEditQuestionModalOpen = (data) => {
        setEditData(data);
        setEditQuestionModal(true);
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
                    Imtihon ・ Exam Name ・ Reading ・ 5 qism
                </h1>
                <div className="flex items-center gap-[10px]">
                    <button onClick={() => setCreateModal2(true)} className="bg-MainColor text-[white] rounded-[10px] p-[10px] border-[2px] border-MainColor duration-500 px-[20px] hover:text-MainColor hover:bg-[white]">
                        Savol yaratish
                    </button>
                    <button onClick={() => setCreateModal(true)} className="bg-MainColor text-[white] rounded-[10px] p-[10px] border-[2px] border-MainColor duration-500 px-[20px] hover:text-MainColor hover:bg-[white]">
                        Savoli matn yaratish
                    </button>
                    {data?.right_text === null && (
                        <button onClick={() => setCreateModalText(true)} className="bg-MainColor text-[white] rounded-[10px] p-[10px] border-[2px] border-MainColor duration-500 px-[20px] hover:text-MainColor hover:bg-[white]">
                            Savol yaratish
                        </button>
                    )}
                </div>
            </div>
            <div className="mt-[20px]">
                <Paragraph Create={handlParagraph} data={paragraph} />
                <QuestionText data={data?.right_text} Edit={handleEditTextModalOpen} />
                <RQP5Text data={data?.questions} Edit={handleEditModalOpen} Delete={handleDeleteModalOpen} />
                <RQP5TextQuestion Edit={handleEditQuestionModalOpen} Delete={handleDeleteModalOpen} data={data} />
            </div>

            <ParagraphCreate data={data} type={paragraphType} refresh={getQuestion} isOpen={ParagraphModal} onClose={() => setParagraphModal(false)} />
            <QuestionTextCreate refresh={getQuestion} isOpen={createModalText} onClose={() => setCreateModalText(false)} />
            <QuestionTextEdit refresh={getQuestion} data={data} isOpen={EditTextModal} onClose={() => setEditTextModal(false)} />
            <RQP5TextCreate refresh={getQuestion} isOpen={createModal} onClose={() => setCreateModal(false)} />
            <QuestionDelete id={deleteId} refresh={getQuestion} isOpen={DeleteModal} onClose={() => setDeleteModal(false)} />
            <RQP5EditText data={EditData} refresh={getQuestion} isOpen={EditModal} onClose={() => setEditModal(false)} />
            <RQP5CreateQuestion refresh={getQuestion} isOpen={createModal2} onClose={() => setCreateModal2(false)} />
            <RQP5QuestionEdit data={EditData} isOpen={EditQuestionModal} onClose={() => setEditQuestionModal(false)} />
        </div>
    )
}