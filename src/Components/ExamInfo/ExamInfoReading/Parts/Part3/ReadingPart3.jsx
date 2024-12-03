import { useState } from "react";
import RQP3Text from "./RQP3Text";
import RQP3Create from "./RQP3Create";
import RQP3Edit from "./RQP3Edit";
import RQP3Delete from "./RQP3Delete";



export default function ReadingPart3() {
    const [createModal, setCreateModal] = useState(false)
    const [EditModal, setEditModal] = useState(false)
    const [DeleteModal, setDeleteModal] = useState(false)

    return (
        <div className="Exam w-full p-[15px]">
            <div className="Header__wrapper">
                <h1 className="text-MainColor text-[32px] font-[700]">
                    Imtihon ・ Exam Name ・ Reading ・ 3 qism
                </h1>
                <div className="flex items-center gap-[10px]">
                    <button onClick={() => setCreateModal(true)} className="bg-MainColor text-[white] rounded-[10px] p-[10px] border-[2px] border-MainColor duration-500 px-[20px] hover:text-MainColor hover:bg-[white]">
                        Savol yaratish
                    </button>
                </div>
            </div>
            <div className="mt-[20px]">
                <RQP3Text editModal={()=>setEditModal(true)} deleteModal={()=>setDeleteModal(true)}/>
            </div>
            <RQP3Create isOpen={createModal} onClose={()=>setCreateModal(false)}/>
            <RQP3Edit isOpen={EditModal} onClose={()=>setEditModal(false)}/>
            <RQP3Delete isOpen={DeleteModal} onClose={()=>setDeleteModal(false)}/>
        </div>
    )
}