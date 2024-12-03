import { useState } from "react";
import SQPCreate from "./SQPCreate";
import SQP2Image from "./SQP2Image";
import SQP2Questions from "./SQP2Questions";


export default function SpeakingPart2() {
    const [CreateModal, setCreateModal] = useState(false)
    const [EditModal, setEditModal] = useState(false)
    const [DeleteModal, setDeleteModal] = useState(false)

    return (
        <div className="Exam w-full p-[15px]">
            <div className="Header__wrapper">
                <h1 className="text-MainColor text-[32px] font-[700]">
                    Imtihon ・ Exam Name ・ Speaking ・ 2 qism
                </h1>
                <div className="flex items-center gap-[10px]">
                    <button onClick={() => setCreateModal(true)} className="bg-MainColor text-[white] rounded-[10px] p-[10px] border-[2px] border-MainColor duration-500 px-[20px] hover:text-MainColor hover:bg-[white]">
                        Savol yaratish
                    </button>
                </div>
            </div>
            <div className="mt-[20px]">
                <SQP2Image/>
                <SQP2Questions/>
            </div>
            <SQPCreate isOpen={CreateModal} onClose={()=>setCreateModal(false)}/>
        </div>
    )
}