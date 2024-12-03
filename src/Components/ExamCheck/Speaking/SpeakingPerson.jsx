import { useState } from "react";
import SpeakingPersonAnswer from "./SpeakinPersonAnswer";
import SpeakingPersonResult from "./SpeakingPersonResult";

export default function SpeakingPerson() {

    const [ballModal, setBallModal] = useState(false)

    return (
        <div className="SpeakingPerson p-[15px]">
            <div className="Header__wrapper">
                <h1 className="text-MainColor text-[32px] font-[700]">
                    Writing ・ Book name ・ Alisherov Jahongir
                </h1>
                <button onClick={() => setBallModal(true)} className="bg-MainColor text-[white] rounded-[10px] p-[10px] border-[2px] border-MainColor duration-500 px-[20px] hover:text-MainColor hover:bg-[white]">
                    Baholash
                </button>
            </div>
            <div className="mt-[15px]">
                <SpeakingPersonAnswer />
            </div>
            <SpeakingPersonResult isOpen={ballModal} onClose={() => setBallModal(false)} />
        </div>
    )
}
