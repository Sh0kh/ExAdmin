import { useEffect, useState } from "react";
import { Button, Input, Checkbox } from '@material-tailwind/react';
import axios from "axios";
import Swal from 'sweetalert2';


export default function LQP5Edit({ isOpen, onClose, data, refresh }) {


    const [question, setquestion] = useState('');
    const [optionA, setOptionA] = useState('');
    const [optionB, setOptionB] = useState('');
    const [optionC, setOptionC] = useState('');
    const [correctOptionA, setCorrectOptionA] = useState(false);
    const [correctOptionB, setCorrectOptionB] = useState(false);
    const [correctOptionC, setCorrectOptionC] = useState(false);

    useEffect(() => {
        if (data) {
            setquestion(data?.question)
            setOptionA(data?.answers[0]?.answer)
            setCorrectOptionA(data?.answers[0]?.is_correct === 1 ? true : false)
            setOptionB(data?.answers[1]?.answer)
            setCorrectOptionB(data?.answers[1]?.is_correct === 1 ? true : false)
            setOptionC(data?.answers[2]?.answer)
            setCorrectOptionC(data?.answers[2]?.is_correct === 1 ? true : false)
        }
    }, [data])



    const EditQuestion = async () => {
        try {
            const EditData = {
                type:'quiz',
                question: question,
                answer: [
                    {
                        answer: optionA,
                        is_correct: correctOptionA === true ? 1 : 0
                    },
                    {
                        answer: optionB,
                        is_correct: correctOptionB === true ? 1 : 0
                    },
                    {
                        answer: optionC,
                        is_correct: correctOptionC === true ? 1 : 0
                    }
                ]
            }

            await axios.put(`/questions/${data?.id}`, EditData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })

            onClose()
            refresh()
            Swal.fire({
                title: 'Muvaffaqiyatli!',
                icon: 'success',
                position: 'top-end',
                timer: 3000,
                timerProgressBar: true,
                showCloseButton: true,
                toast: true,
                showConfirmButton: false,
            });
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: error.response?.data?.message || 'Error.',
                icon: 'error',
                position: 'top-end',
                timer: 3000,
                timerProgressBar: true,
                showCloseButton: true,
                toast: true,
                showConfirmButton: false,
            });
        }
    }


    return (
        <>
            <div className={`Modal ${isOpen ? "open" : ""}`} onClick={onClose}>
                <div className={`Modal2Content ${isOpen ? "open" : ""}`} onClick={(e) => e.stopPropagation()}>
                    <div className='p-[10px] pb-[30px]'>
                        <div className='flex items-center justify-between pt-[10px] pb-[20px]'>
                            <h1 className='text-MainColor text-[20px]'>
                                Savol o`zgartirish
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
                            </div>
                            <Button
                                onClick={EditQuestion}
                                fullWidth
                                color="white"
                                className="bg-MainColor mt-[15px] transition duration-500 border-MainColor border-[2px] text-white hover:bg-transparent hover:text-MainColor"
                            >
                                O`zgartirish
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
