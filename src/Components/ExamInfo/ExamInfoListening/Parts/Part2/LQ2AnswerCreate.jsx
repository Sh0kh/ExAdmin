import { useState } from "react";
import { Button, Input } from "@material-tailwind/react";


export default function LQ2AnswerCreate({ isOpen, onClose }) {
    const [question, setQuestion] = useState("");

    return (
        <>
            <div className={`Modal ${isOpen ? "open" : ""}`} onClick={onClose}>
                <div
                    className={`Modal2Content ${isOpen ? "open" : ""}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="p-[10px] pb-[30px]">
                        <div className="flex items-center justify-between pt-[10px] pb-[20px]">
                            <h1 className="text-MainColor text-[20px]">Javob yaratish</h1>
                            <button onClick={onClose}>
                                <svg
                                    className="text-[#5E5C5A] text-[12px]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        d="M1.707.293A1 1 0 0 0 .293 1.707L5.586 7L.293 12.293a1 1 0 1 0 1.414 1.414L7 8.414l5.293 5.293a1 1 0 0 0 1.414-1.414L8.414 7l5.293-5.293A1 1 0 0 0 12.293.293L7 5.586z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <div className="mt-[10px]">
                            <Input
                                label="Savol"
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                color="#2c3e50"
                                type="text"
                                required
                                className="border-MainColor text-[#2c3e50] bg-[]"
                            />
                            <Button className="mt-2 bg-MainColor">
                                Saqlash
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}