import { useState } from "react"
import LQP2Create from "./LQP2Create"
import LQ2Text from "./LQP2Text"
import LQP2Edit from "./LQP2Edit"
import LQP2Delete from "./LQP2Delete"

export default function ListeningPart2() {

    const [createModal, setCreateModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)

    return (
        <div className="Exam p-[15px] w-full">
            <div className="Header__wrapper">
                <h1 className="text-MainColor text-[32px] font-[700]">
                    Imtihon ・ Exam Name ・ Listening ・ 2 qism
                </h1>
                <button onClick={() => setCreateModal(true)} className="bg-MainColor text-[white] rounded-[10px] p-[10px] border-[2px] border-MainColor duration-500 px-[20px] hover:text-MainColor hover:bg-[white]">
                    Matn yaratish
                </button>
            </div>
            <div className="mt-[20px]">
                <LQ2Text editModal={()=>setEditModal(true)} deleteModal={()=>setDeleteModal(true)}/>
            </div>
            <LQP2Edit isOpen={editModal} onClose={()=>setEditModal(false)}/>
            <LQP2Create isOpen={createModal} onClose={() => setCreateModal(false)} />
            <LQP2Delete isOpen={deleteModal} onClose={()=>setDeleteModal(false)}/>
        </div>
    )
}