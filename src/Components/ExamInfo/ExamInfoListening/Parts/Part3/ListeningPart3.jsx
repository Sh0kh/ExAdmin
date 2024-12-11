import { useState } from "react"
import LQP3Create from "./LQP3Create"
import LQP3Table from "./LQP3Table"
import LQP3Edit from "./LQP3Edit"
import LQP3Delete from "./LQP3Delete"
import Part3Title from "./Part3Title"

export default function ListeningPart3() {

    const [createModal, setCreateModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)

    return (
        <div className="Exam p-[15px] w-full">
            <div className="Header__wrapper">
                <h1 className="text-MainColor text-[32px] font-[700]">
                    Imtihon ・ Exam Name ・ Listening ・ 3 qism
                </h1>
                <button onClick={() => setCreateModal(true)} className="bg-MainColor text-[white] rounded-[10px] p-[10px] border-[2px] border-MainColor duration-500 px-[20px] hover:text-MainColor hover:bg-[white]">
                    Speakir yaratish
                </button>
            </div>
            <div className="mt-[20px]">
                <Part3Title/>
                <LQP3Table EditModal={()=>setEditModal(true)} DeleteModal={()=>setDeleteModal(true)}/>
            </div>
            <LQP3Create isOpen={createModal} onClose={()=>setCreateModal(false)}/>
            <LQP3Edit isOpen={editModal} onClose={()=>setEditModal(false)}/>
            <LQP3Delete isOpen={deleteModal} onClose={()=>setDeleteModal(false)}/>
        </div>
    )
}