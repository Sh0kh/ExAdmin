import { useEffect, useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Подключение стилей
import axios from "axios";
import Swal from "sweetalert2";

export default function WritingEdit({ data, isOpen, onClose, refresh }) {
    const [content, setContent] = useState('');

    // console.log(data)

    useEffect(() => {
        if (data) {
            setContent(data?.question);
        }
    }, [data]);


    const CreateQuestion = async () => {
        try {
            await axios.put(
                `/questions/${data?.id}`,
                {
                    question: content,
                    question_id: data?.id,
                    type: "essay",
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
                <div
                    className={`Modal3Content ${isOpen ? "open" : ""}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="p-[10px] pb-[30px]">
                        <div className="flex items-center justify-between pt-[10px] pb-[10px]">
                            <h1 className="text-MainColor text-[20px]">

                                Matn o'zgartirish
                            </h1>
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
                            <div className="mb-[60px]">
                                <ReactQuill
                                    theme="snow"
                                    value={content}
                                    onChange={setContent} // Use setContent directly here
                                    placeholder="Text..."
                                    className="h-[250px]"
                                />

                            </div>
                            <Button onClick={CreateQuestion} className="mt-2 bg-MainColor">
                                Saqlash
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
