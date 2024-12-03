import { useState } from "react";
import SQP1Create from "./SQP1Create";
import SQP1Questions from "./SQP1Questions";
import { NavLink } from "react-router-dom";


export default function SpeakingPart1() {
    const [CreateModal, setCreateModal] = useState(false)
    const [EditModal, setEditModal] = useState(false)
    const [DeleteModal, setDeleteModal] = useState(false)

    return (
        <div className="Exam w-full p-[15px]">
            <div className="Header__wrapper">
                <h1 className="text-MainColor text-[32px] font-[700]">
                    Imtihon ・ Exam Name ・ Speaking ・ 1/1 qism
                </h1>
                <div className="flex items-center gap-[10px]">
                    <button onClick={() => setCreateModal(true)} className="bg-MainColor text-[white] rounded-[10px] p-[10px] border-[2px] border-MainColor duration-500 px-[20px] hover:text-MainColor hover:bg-[white]">
                        Savol yaratish
                    </button>
                </div>
            </div>
            <div className="mt-[20px]">
                <SQP1Questions />
                <div className="w-full mt-[20px]">
                    <NavLink to={'/exam/1/speaking/part_1.2'} className={'w-full block flex items-center justify-center text-[white] rounded-[10px] p-[10px] bg-MainColor'}>
                        Qism 1.2
                    </NavLink>
                </div>
            </div>


            <SQP1Create isOpen={CreateModal} onClose={() => setCreateModal(false)} />
        </div>
    )
}