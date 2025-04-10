import { useEffect, useState } from "react";
import { Button, Input, Checkbox } from '@material-tailwind/react';
import Swal from 'sweetalert2';
import axios from "axios";
import { useParams } from "react-router-dom";
import ReactQuill from "react-quill";


export default function SpeakingQuestionEdit({ isOpen, onClose, refresh, data }) {




    const { id } = useParams()
    const [content, setContent] = useState('');

    useEffect(() => {
        setContent(data?.question)
    }, [data])


    const CreateQuestion = async () => {
        try {
            await axios.put(
                `/questions/${data?.id}`,
                {
                    question: content,
                    question_id: data?.id,
                    type: "speaking",
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            refresh();
            setContent("");
            onClose();
            Swal.fire({
                title: "Muvaffaqiyatli!",
                icon: "success",
                position: "top-end",
                timer: 3000,
                timerProgressBar: true,
                showCloseButton: true,
                toast: true,
                showConfirmButton: false,
            });
        } catch (error) {
            console.log(error);
            Swal.fire({
                title: "Error!",
                text: error.response?.data?.message || "Error.",
                icon: "error",
                position: "top-end",
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
                                Savol o'zgartirish
                            </h1>
                            <button onClick={onClose}>
                                <svg className='text-[#5E5C5A] text-[12px]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14">
                                    <path fill="currentColor" fillRule="evenodd" d="M1.707.293A1 1 0 0 0 .293 1.707L5.586 7L.293 12.293a1 1 0 1 0 1.414 1.414L7 8.414l5.293 5.293a1 1 0 0 0 1.414-1.414L8.414 7l5.293-5.293A1 1 0 0 0 12.293.293L7 5.586z" clipRule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                        <div>
                            <div className="mb-[60px]">
                                <ReactQuill
                                    theme="snow"
                                    value={content}
                                    onChange={setContent}
                                    placeholder="Text..."
                                    className="h-[150px]"
                                />
                            </div>
                            <Button
                                onClick={CreateQuestion}
                                fullWidth
                                color="white"
                                className="bg-MainColor mt-[15px] transition duration-500 border-MainColor border-[2px] text-white hover:bg-transparent hover:text-MainColor"
                            >
                                O'zgartirish
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
