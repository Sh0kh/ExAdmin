import { useState } from "react";
import WritingPersonAnswer from "./WritingPersonAnswer";
import WritingPersonResult from "./WritingPersonResult";

export default function WritingPerson() {

    const [ballModal, setBallModal] = useState(false)

    return (
        <div className="WritingPerson p-[15px]">
            <div className="Header__wrapper">
                <h1 className="text-MainColor text-[32px] font-[700]">
                    Writing ・ Book name ・ Alisherov Jahongir
                </h1>
                <button onClick={()=>setBallModal(true)} className="bg-MainColor text-[white] rounded-[10px] p-[10px] border-[2px] border-MainColor duration-500 px-[20px] hover:text-MainColor hover:bg-[white]">
                    Baholash
                </button>
            </div>
            <div className="mt-[15px]">
                <WritingPersonAnswer/>
            </div>
            <WritingPersonResult isOpen={ballModal} onClose={()=>setBallModal(false)}/>
        </div>
    )
}