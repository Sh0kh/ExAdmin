import { useState } from "react";
import LQP6Create from "./LQP6Create";
import LQP6Table from "./LQP6Table";
import LQP6Eidt from "./LQP6Edit";
import LQP6Delete from "./LQP6Delete";
import Part6Title from "./Part6Title";

export default function ListeningPart6() {
    const [CreateModal, setCreateModal] = useState(false)
    const [EditModal, setEditModal] = useState(false)
    const [DeleteModal, setDeleteModal] = useState(false)

    return (
        <div className="Exam w-full p-[15px]">
            <div className="Header__wrapper">
                <h1 className="text-MainColor text-[32px] font-[700]">
                    Imtihon ・ Exam Name ・ Listening ・ 6 qism
                </h1>
                <button onClick={() => setCreateModal(true)} className="bg-MainColor text-[white] rounded-[10px] p-[10px] border-[2px] border-MainColor duration-500 px-[20px] hover:text-MainColor hover:bg-[white]">
                    Savol yaratish
                </button>
            </div>
            <div className="mt-[20px]">
                <Part6Title/>
                <LQP6Table EditModal={() => setEditModal(true)} DeleteModal={() => setDeleteModal(true)} />
            </div>

            <LQP6Create isOpen={CreateModal} onClose={() => setCreateModal(false)} />
            <LQP6Eidt isOpen={EditModal} onClose={() => setEditModal(false)} />
            <LQP6Delete isOpen={DeleteModal} onClose={() => setDeleteModal(false)} />
        </div>
    )
}