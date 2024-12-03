import { useState } from "react";
import RQP1TextCreate from "./RQP1TextCreate";
import RQP1AnswerCreate from "./RQP1AnswerCreate";
import RQP1Text from "./RQP1Text";
import RQP1Edit from "./RQP1Edit";
import RQP1Delete from "./RQP1Delete";


export default function ReadingPart1() {
    const [CreateTextModal, setCreateTextModal] = useState(false)
    const [CreateQuestionModal, setCreateQuestionsModal] = useState(false)
    const [EditModal, setEditModal] = useState(false)
    const [DeleteModal, setDeleteModal] = useState(false)

    return (
        <div className="Exam w-full p-[15px]">
            <div className="Header__wrapper">
                <h1 className="text-MainColor text-[32px] font-[700]">
                    Imtihon ・ Exam Name ・ Reading ・ 1 qism
                </h1>
                <div className="flex items-center gap-[10px]">
                    <button onClick={() => setCreateTextModal(true)} className="bg-MainColor text-[white] rounded-[10px] p-[10px] border-[2px] border-MainColor duration-500 px-[20px] hover:text-MainColor hover:bg-[white]">
                        Matn yaratish
                    </button>
                    <button onClick={() => setCreateQuestionsModal(true)} className="bg-MainColor text-[white] rounded-[10px] p-[10px] border-[2px] border-MainColor duration-500 px-[20px] hover:text-MainColor hover:bg-[white]">
                        Javob yaratish
                    </button>
                </div>
            </div>
            <div className="mt-[20px]">
                <RQP1Text editModal={()=>setEditModal(true)} deleteModal={()=>setDeleteModal(true)} />
            </div>
            <RQP1TextCreate isOpen={CreateTextModal} onClose={()=>setCreateTextModal(false)}/>
            <RQP1AnswerCreate isOpen={CreateQuestionModal} onClose={()=>setCreateQuestionsModal(false)}/>
            <RQP1Edit isOpen={EditModal} onClose={()=>setEditModal(false)}/>
            <RQP1Delete isOpen={DeleteModal} onClose={()=>setDeleteModal(false)}/>
        </div>
    )
}