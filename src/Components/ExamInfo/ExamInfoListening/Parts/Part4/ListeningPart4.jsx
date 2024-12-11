import { useState } from "react"
import LQP4Create from "./LQP4Create"
import LQP4Table from "./LQP4Table"
import LQP4Delete from "./LQP4Delete"
import LQP4Edit from "./LQP4Edit"
import LQP4Foto from "./LQP4Foto"
import Part4Title from "./Part4Title"

export default function ListeningPart4() {

    const [createModal, setCreateModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)

    return (
        <div className="Exam p-[15px] w-full">
            <div className="Header__wrapper">
                <h1 className="text-MainColor text-[32px] font-[700]">
                    Imtihon ・ Exam Name ・ Listening ・ 4 qism
                </h1>
                <button onClick={() => setCreateModal(true)} className="bg-MainColor text-[white] rounded-[10px] p-[10px] border-[2px] border-MainColor duration-500 px-[20px] hover:text-MainColor hover:bg-[white]">
                    Savol yaratish
                </button>
            </div>
            <div className="mt-[20px]">
                <Part4Title/>
                <LQP4Foto/>
                <LQP4Table EditModal={()=>setEditModal(true)} DeleteModal={()=>setDeleteModal(true)}/>
            </div>
            <LQP4Create isOpen={createModal} onClose={()=>setCreateModal(false)}/>
            <LQP4Delete isOpen={deleteModal} onClose={()=>setDeleteModal(false)}/>
            <LQP4Edit isOpen={editModal} onClose={()=>setEditModal(false)}/>
        </div>
    )
}