import { useState } from "react";
import WQP1Text from "./WQP1Text";
import WQP1Create from "./WQP1Create";
import WQP1Edit from "./WQP1Edit";
import WQP1Delete from "./WQP1Delete";



export default function WritingPart1() {
    const [CreateModal, setCreateModal] = useState(false)
    const [EditModal, setEditModal] = useState(false)
    const [DeleteModal, setDeleteModal] = useState(false)

    return (
        <div className="Exam w-full p-[15px]">
            <div className="Header__wrapper">
                <h1 className="text-MainColor text-[32px] font-[700]">
                    Imtihon ・ Exam Name ・ Reading ・ 1 qism
                </h1>
                <div className="flex items-center gap-[10px]">
                    <button onClick={() => setCreateModal(true)} className="bg-MainColor text-[white] rounded-[10px] p-[10px] border-[2px] border-MainColor duration-500 px-[20px] hover:text-MainColor hover:bg-[white]">
                        Vazifa yaratish
                    </button>
                </div>
            </div>
            <div className="mt-[20px]">
                <WQP1Text editModal={()=>setEditModal(true)} deleteModal={()=>setDeleteModal(true)}/>
            </div>
            <WQP1Create isOpen={CreateModal} onClose={()=>setCreateModal(false)}/>
            <WQP1Edit isOpen={EditModal} onClose={()=>setEditModal(false)}/>
            <WQP1Delete isOpen={DeleteModal} onClose={()=>setDeleteModal(false)}/>
        </div>
    )
}