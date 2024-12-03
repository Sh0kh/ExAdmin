import { useState } from "react";
import RQP5TextCreate from "./RQP5TextCreate";
import RQP5CreateQuestion from "./RQP5CreateQuestion";
import RQP5TextQuestionCreate from "./RQP5TextQuestionCreate";
import RQP5Text from "./RQP5Text";
import RQP5Question from "./RQP5Question";
import RQP5TextQuestion from "./RQP5TextQuestion";



export default function ReadingPart5() {
    const [createModal, setCreateModal] = useState(false)
    const [createModal2, setCreateModal2] = useState(false)
    const [createModal3, setCreateModal3] = useState(false)
    const [EditModal, setEditModal] = useState(false)
    const [DeleteModal, setDeleteModal] = useState(false)

    return (
        <div className="Exam w-full p-[15px]">
            <div className="Header__wrapper">
                <h1 className="text-MainColor text-[32px] font-[700]">
                    Imtihon ・ Exam Name ・ Reading ・ 5 qism
                </h1>
                <div className="flex items-center gap-[10px]">
                    <button onClick={() => setCreateModal(true)} className="bg-MainColor text-[white] rounded-[10px] p-[10px] border-[2px] border-MainColor duration-500 px-[20px] hover:text-MainColor hover:bg-[white]">
                        Matn yaratish
                    </button>
                    <button onClick={() => setCreateModal2(true)} className="bg-MainColor text-[white] rounded-[10px] p-[10px] border-[2px] border-MainColor duration-500 px-[20px] hover:text-MainColor hover:bg-[white]">
                        Savol yaratish
                    </button>
                    <button onClick={() => setCreateModal3(true)} className="bg-MainColor text-[white] rounded-[10px] p-[10px] border-[2px] border-MainColor duration-500 px-[20px] hover:text-MainColor hover:bg-[white]">
                        Matnli savol yaratish
                    </button>
                </div>
            </div>
            <div className="mt-[20px]">
                <RQP5Text/>
                <RQP5TextQuestion/>
                <RQP5Question/>
            </div>
            <RQP5TextCreate isOpen={createModal} onClose={() => setCreateModal(false)} />
            <RQP5CreateQuestion isOpen={createModal2} onClose={() => setCreateModal2(false)} />
            <RQP5TextQuestionCreate isOpen={createModal3} onClose={()=>setCreateModal3(false)}/>
        </div>
    )
}