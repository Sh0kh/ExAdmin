import { useState } from "react";
import LQP5Create from "./LQP5Create";
import LQP5Questions from "./LQP5Questions";
import LQP5Edit from "./LQP5Edit";
import LQP5Delete from "./LQP5Delete";
import Part5Title from "./Part5Title";

export default function ListeningPart5() {
    const [CreateModal, setCreateModal] = useState(false)
    const [EditModal, setEditModal] = useState(false)
    const [DeleteModal, setDeleteModal] = useState(false)

    return (
        <div className="Exam w-full p-[15px]">
            <div className="Header__wrapper">
                <h1 className="text-MainColor text-[32px] font-[700]">
                    Imtihon ・ Exam Name ・ Listening ・ 5 qism
                </h1>
                <button onClick={()=>setCreateModal(true)} className="bg-MainColor text-[white] rounded-[10px] p-[10px] border-[2px] border-MainColor duration-500 px-[20px] hover:text-MainColor hover:bg-[white]">
                    Savol yaratish
                </button>
            </div>
            <div className="mt-[20px]">
                <Part5Title/>
                <LQP5Questions EditModal={()=>setEditModal(true)} DeleteModal={()=>setDeleteModal(true)}/>
            </div>
            <LQP5Create isOpen={CreateModal} onClose={()=>setCreateModal(false)}/>
            <LQP5Edit isOpen={EditModal} onClose={()=>setEditModal(false)}/>
            <LQP5Delete isOpen={DeleteModal} onClose={()=>setDeleteModal(false)}/>
        </div>
    )
}