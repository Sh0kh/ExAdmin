import { useState } from "react";
import { Button, Input } from '@material-tailwind/react';

export default function RQP1AnswerCreate({ isOpen, onClose }) {

    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    const [option4, setOption4] = useState('');
    const [option5, setOption5] = useState('');
    const [option6, setOption6] = useState('');

    return (
        <>
            <div className={`Modal ${isOpen ? "open" : ""}`} onClick={onClose}>
                <div className={`Modal2Content ${isOpen ? "open" : ""}`} onClick={(e) => e.stopPropagation()}>
                    <div className='p-[10px] pb-[30px]'>
                        <div className='flex items-center justify-between pt-[10px] pb-[20px]'>
                            <h1 className='text-MainColor text-[20px]'>
                                Javob yaratish
                            </h1>
                            <button onClick={onClose}>
                                <svg className='text-[#5E5C5A] text-[12px]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14">
                                    <path fill="currentColor" fillRule="evenodd" d="M1.707.293A1 1 0 0 0 .293 1.707L5.586 7L.293 12.293a1 1 0 1 0 1.414 1.414L7 8.414l5.293 5.293a1 1 0 0 0 1.414-1.414L8.414 7l5.293-5.293A1 1 0 0 0 12.293.293L7 5.586z" clipRule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                        <div>
                            <div className="flex items-center justify-between flex-wrap gap-[20px] mt-[20px]">
                                <div className="w-full flex items-center gap-[2px]">
                                    <Input
                                        label="1"
                                        value={option1}
                                        onChange={(e) => setOption1(e.target.value)}
                                        color="#2c3e50"
                                        type="text"
                                        required
                                        className="border-MainColor text-[#2c3e50] bg-[]"
                                    />
                                </div>
                                <div className="w-full flex items-center gap-[5px]">
                                    <Input
                                        label="2"
                                        value={option2}
                                        onChange={(e) => setOption2(e.target.value)}
                                        color="#2c3e50"
                                        type="text"
                                        required
                                        className="border-MainColor text-[#2c3e50] bg-[]"
                                    />
                                </div>
                                <div className="w-full flex items-center gap-[5px]">
                                    <Input
                                        label="3"
                                        value={option3}
                                        onChange={(e) => setOption3(e.target.value)}
                                        color="#2c3e50"
                                        type="text"
                                        required
                                        className="border-MainColor text-[#2c3e50] bg-[]"
                                    />
                                </div>
                                <div className="w-full flex items-center gap-[5px]">
                                    <Input
                                        label="4"
                                        value={option4}
                                        onChange={(e) => setOption4(e.target.value)}
                                        color="#2c3e50"
                                        type="text"
                                        required
                                        className="border-MainColor text-[#2c3e50] bg-[]"
                                    />
                                </div>
                                <div className="w-full flex items-center gap-[5px]">
                                    <Input
                                        label="5"
                                        value={option5}
                                        onChange={(e) => setOption5(e.target.value)}
                                        color="#2c3e50"
                                        type="text"
                                        required
                                        className="border-MainColor text-[#2c3e50] bg-[]"
                                    />
                                </div>
                                <div className="w-full flex items-center gap-[5px]">
                                    <Input
                                        label="6"
                                        value={option6}
                                        onChange={(e) => setOption6(e.target.value)}
                                        color="#2c3e50"
                                        type="text"
                                        required
                                        className="border-MainColor text-[#2c3e50] bg-[]"
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
