import { useState } from "react";
import RQPTextCreate from "./RQPTextCreate";
import RQP4Text from "./RQP4Text";
import RQP4Question from "./RQP4Question";
import RQP4Create from "./RQP4Create";



export default function ReadingPart4() {
    const [createModal, setCreateModal] = useState(false)
    const [createModal2, setCreateModal2] = useState(false)
    const [EditModal, setEditModal] = useState(false)
    const [DeleteModal, setDeleteModal] = useState(false)

    return (
        <div className="Exam w-full p-[15px]">
            <div className="Header__wrapper">
                <h1 className="text-MainColor text-[32px] font-[700]">
                    Imtihon ・ Exam Name ・ Reading ・ 4 qism
                </h1>
                <div className="flex items-center gap-[10px]">
                    <button onClick={() => setCreateModal(true)} className="bg-MainColor text-[white] rounded-[10px] p-[10px] border-[2px] border-MainColor duration-500 px-[20px] hover:text-MainColor hover:bg-[white]">
                        Matn yaratish
                    </button>
                    <button onClick={() => setCreateModal2(true)} className="bg-MainColor text-[white] rounded-[10px] p-[10px] border-[2px] border-MainColor duration-500 px-[20px] hover:text-MainColor hover:bg-[white]">
                        Savol yaratish
                    </button>
                </div>
            </div>
            <div className="mt-[20px]">
                <RQP4Text/>
                <RQP4Question/>
            </div>
            <RQPTextCreate isOpen={createModal} onClose={()=>setCreateModal(false)}/>
            <RQP4Create isOpen={createModal2} onClose={()=>setCreateModal2(false)}/>
        </div>
    )
}