import { useState } from "react";
import RQP2Foto from "./RQP2Foto";
import RQP2Text from "./RQP2Text";
import RQP2Create from "./RQP2Create";
import RQP2Edit from "./RQP2Edit";
import RQP2Delete from "./RQP2Delete";



export default function ReadingPart2() {
    const [createModal, setCreateModal] = useState(false)
    const [EditModal, setEditModal] = useState(false)
    const [DeleteModal, setDeleteModal] = useState(false)

    return (
        <div className="Exam w-full p-[15px]">
            <div className="Header__wrapper">
                <h1 className="text-MainColor text-[32px] font-[700]">
                    Imtihon ・ Exam Name ・ Reading ・ 2 qism
                </h1>
                <div className="flex items-center gap-[10px]">
                    <button onClick={() => setCreateModal(true)} className="bg-MainColor text-[white] rounded-[10px] p-[10px] border-[2px] border-MainColor duration-500 px-[20px] hover:text-MainColor hover:bg-[white]">
                        Savol yaratish
                    </button>
                </div>
            </div>
            <div className="mt-[20px]">
                <RQP2Foto/>
                <RQP2Text editModal={()=>setEditModal(true)} deleteModal={()=>setDeleteModal(true)}/>
            </div>
                <RQP2Create isOpen={createModal} onClose={()=>setCreateModal(false)}/>
                <RQP2Edit isOpen={EditModal} onClose={()=>setEditModal(false)}/>
                <RQP2Delete isOpen={DeleteModal} onClose={()=>setDeleteModal(false)}/>
        </div>
    )
}