import { useState } from "react";
import { Button, Input } from '@material-tailwind/react';
import axios from "axios";
import Swal from 'sweetalert2';
import { useParams } from "react-router-dom";


export default function LQP6Create({ isOpen, onClose, refresh }) {

    const [question, setquestion] = useState('');
    const [answer, setAnswer] = useState('');
    const { id } = useParams()

    const CreateQuestion = async () => {
        try {
            const formData = new FormData();
            formData.append("part_id", Number(id));
            formData.append("question", question);
            formData.append("type", "quiz");
            formData.append("answers", JSON.stringify([
                {
                    answer: answer,
                    is_correct: 1
                },
            ]));

            await axios.post('/questions', formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "multipart/form-data",
                },
            });
            setquestion('')
            setAnswer('')
            refresh()
            onClose();
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
    };

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
                                <div className="w-full flex items-center gap-[5px]">
                                    <Input
                                        label="Javob"
                                        value={answer}
                                        onChange={(e) => setAnswer(e.target.value)}
                                        color="#2c3e50"
                                        type="text"
                                        required
                                        className="border-MainColor text-[#2c3e50] bg-[]"
                                    />
                                </div>
                            </div>
                            <Button
                                onClick={CreateQuestion}
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
