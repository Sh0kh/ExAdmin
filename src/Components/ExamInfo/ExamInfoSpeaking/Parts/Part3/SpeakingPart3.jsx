import { useState } from "react";
import SQP3Questions from "./SQP3Questions";
import SQPCreate from "./SQPCreate";
import SQP3Good from "./SQP3Good";
import SQP3Evil from "./SQP3Evil";



export default function SpeakingPart3() {
    const [CreateModal, setCreateModal] = useState(false)


    return (
        <div className="Exam w-full p-[15px]">
            <div className="Header__wrapper">
                <h1 className="text-MainColor text-[32px] font-[700]">
                    Imtihon ・ Exam Name ・ Speaking ・ 3 qism
                </h1>
                <div className="flex items-center gap-[10px]">
                    <button onClick={() => setCreateModal(true)} className="bg-MainColor text-[white] rounded-[10px] p-[10px] border-[2px] border-MainColor duration-500 px-[20px] hover:text-MainColor hover:bg-[white]">
                        Savol yaratish
                    </button>
                </div>
            </div>
            <div className="mt-[20px]">
                <SQP3Questions/>
                <SQP3Good/>
                <SQP3Evil/>
            </div>
            <SQPCreate isOpen={CreateModal} onClose={()=>setCreateModal(false)}/>
        </div>
    )
}