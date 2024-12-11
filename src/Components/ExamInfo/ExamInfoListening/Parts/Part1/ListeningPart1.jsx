import { useState } from "react";
import LQP1Create from "./LQP1Create";
import LQP1Questions from "./LQP1Questions";
import LQP1Edit from "./LQP1Edit";
import LQP1Delete from "./LQP1Delete";
import Part1Title from "./Part1Title";

export default function ListeningPart1() {
    const [CreateModal, setCreateModal] = useState(false)
    const [EditModal, setEditModal] = useState(false)
    const [DeleteModal, setDeleteModal] = useState(false)

    return (
        <div className="Exam w-full p-[15px]">
            <div className="Header__wrapper">
                <h1 className="text-MainColor text-[32px] font-[700]">
                    Imtihon ・ Exam Name ・ Listening ・ 1 qism
                </h1>
                <button onClick={()=>setCreateModal(true)} className="bg-MainColor text-[white] rounded-[10px] p-[10px] border-[2px] border-MainColor duration-500 px-[20px] hover:text-MainColor hover:bg-[white]">
                    Savol yaratish
                </button>
            </div>
            <div className="mt-[20px]">
                <Part1Title/>
                <LQP1Questions EditModal={()=>setEditModal(true)} DeleteModal={()=>setDeleteModal(true)}/>
            </div>
            <LQP1Create isOpen={CreateModal} onClose={()=>setCreateModal(false)}/>
            <LQP1Edit isOpen={EditModal} onClose={()=>setEditModal(false)}/>
            <LQP1Delete isOpen={DeleteModal} onClose={()=>setDeleteModal(false)}/>
        </div>
    )
}