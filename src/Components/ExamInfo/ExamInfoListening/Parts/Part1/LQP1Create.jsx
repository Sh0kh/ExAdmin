import { useState } from "react";
import { Button, Input, Checkbox } from '@material-tailwind/react';

export default function LQP1Create({ isOpen, onClose }) {

    const [question, setquestion] = useState('');
    const [optionA, setOptionA] = useState('');
    const [optionB, setOptionB] = useState('');
    const [optionC, setOptionC] = useState('');
    const [optionD, setOptionD] = useState('');
    const [correctOptionA, setCorrectOptionA] = useState(false);
    const [correctOptionB, setCorrectOptionB] = useState(false);
    const [correctOptionC, setCorrectOptionC] = useState(false);
    const [correctOptionD, setCorrectOptionD] = useState(false);

    return (
        <>
            <div className={`Modal ${isOpen ? "open" : ""}`} onClick={onClose}>
                <div className={`Modal2Content ${isOpen ? "open" : ""}`} onClick={(e) => e.stopPropagation()}>
                    <div className='p-[10px] pb-[30px]'>
                        <div className='flex items-center justify-between pt-[10px] pb-[20px]'>
                            <h1 className='text-MainColor text-[20px]'>
                                Savol yaratish
                            </h1>
                            <button onClick={onClose}>
                                <svg className='text-[#5E5C5A] text-[12px]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14">
                                    <path fill="currentColor" fillRule="evenodd" d="M1.707.293A1 1 0 0 0 .293 1.707L5.586 7L.293 12.293a1 1 0 1 0 1.414 1.414L7 8.414l5.293 5.293a1 1 0 0 0 1.414-1.414L8.414 7l5.293-5.293A1 1 0 0 0 12.293.293L7 5.586z" clipRule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                        <div>
                            <Input
                                label="Savol"
                                value={question}
                                onChange={(e) => setquestion(e.target.value)}
                                color="#2c3e50"
                                type="text"
                                required
                                className="border-MainColor text-[#2c3e50] bg-[]"
                            />
                            <div className="flex items-center justify-between flex-wrap gap-[20px] mt-[20px]">
                                <div className="w-full flex items-center gap-[2px]">
                                    <Input
                                        label="A"
                                        value={optionA}
                                        onChange={(e) => setOptionA(e.target.value)}
                                        color="#2c3e50"
                                        type="text"
                                        required
                                        className="border-MainColor text-[#2c3e50] bg-[]"
                                    />
                                    <Checkbox
                                        checked={correctOptionA}
                                        onChange={(e) => setCorrectOptionA(e.target.checked)}
                                        color="#2c3e50"
                                        className="h-[25px] w-[25px] text-[#2c3e50] border-MainColor bg-[]"
                                    />
                                </div>
                                <div className="w-full flex items-center gap-[5px]">
                                    <Input
                                        label="B"
                                        value={optionB}
                                        onChange={(e) => setOptionB(e.target.value)}
                                        color="#2c3e50"
                                        type="text"
                                        required
                                        className="border-MainColor text-[#2c3e50] bg-[]"
                                    />
                                    <Checkbox
                                        checked={correctOptionB}
                                        onChange={(e) => setCorrectOptionB(e.target.checked)}
                                        color="#2c3e50"
                                        className="h-[25px] w-[25px] text-[#2c3e50] border-MainColor bg-[]"
                                    />
                                </div>
                                <div className="w-full flex items-center gap-[5px]">
                                    <Input
                                        label="C"
                                        value={optionC}
                                        onChange={(e) => setOptionC(e.target.value)}
                                        color="#2c3e50"
                                        type="text"
                                        required
                                        className="border-MainColor text-[#2c3e50] bg-[]"
                                    />
                                    <Checkbox
                                        checked={correctOptionC}
                                        onChange={(e) => setCorrectOptionC(e.target.checked)}
                                        color="#2c3e50"
                                        className="h-[25px] w-[25px] text-[#2c3e50] border-MainColor bg-[]"
                                    />
                                </div>
                                <div className="w-full flex items-center gap-[5px]">
                                    <Input
                                        label="D"
                                        value={optionD}
                                        onChange={(e) => setOptionD(e.target.value)}
                                        color="#2c3e50"
                                        type="text"
                                        required
                                        className="border-MainColor text-[#2c3e50] bg-[]"
                                    />
                                    <Checkbox
                                        checked={correctOptionD}
                                        onChange={(e) => setCorrectOptionD(e.target.checked)}
                                        color="#2c3e50"
                                        className="h-[25px] w-[25px] text-[#2c3e50] border-MainColor bg-[]"
                                    />
                                </div>
                            </div>
                            <Button
                                fullWidth
                                color="white"
                                className="bg-MainColor mt-[15px] transition duration-500 border-MainColor border-[2px] text-white hover:bg-transparent hover:text-MainColor"
                            >
                                Yaratish
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
