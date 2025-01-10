import { useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Подключение стилей
import axios from "axios";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

export default function RQP1TextCreate({ isOpen, onClose, refresh }) {
    const [content, setContent] = useState("");
    const [answers, setAnswers] = useState([]);
    const { id } = useParams()

    const handleChange = (value) => {
        setContent(value);

        // Подсчёт количества вхождений ключевого слова "inputext"
        const matches = value.match(/inputext/g) || [];
        const matchCount = matches.length;

        // Обновление количества ответов с ограничением до 8
        const limitedAnswers = Math.min(matchCount, 8);
        setAnswers((prevAnswers) =>
            Array.from({ length: limitedAnswers }, (_, index) => ({
                answer: prevAnswers[index]?.answer || "",
                is_correct: "1",
                // is_correct: prevAnswers[index]?.is_correct || "",
            }))
        );
    };

    const handleAnswerChange = (index, value) => {
        const updatedAnswers = [...answers];
        updatedAnswers[index].answer = value;
        updatedAnswers[index].is_correct = "1"; // Передаем значение в is_correct
        setAnswers(updatedAnswers);
    };


    const CreateQuestion = async () => {
        try {
            const formData = new FormData();
            formData.append("part_id", Number(id)); // Убедитесь, что id определен
            formData.append("type", "writing");
            formData.append("question", content);

            // Преобразование структуры ответов для отправки
            formData.append("answers", JSON.stringify(answers));

            await axios.post(`/questions`, formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "multipart/form-data",
                },
            });
            refresh()
            setContent('')
            onClose()
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
            console.log(error)
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
                            <h1 className="text-MainColor text-[20px]">Matn yaratish</h1>
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
                                    onChange={handleChange}
                                    placeholder="Text..."
                                    className="h-[250px]"
                                />
                            </div>
                            <h1 className="text-MainColor text-[20px] mb-[15px]">
                                Javob yaratish
                            </h1>
                            <div className="answerWrapper">
                                {answers.map((answer, index) => (
                                    <div key={index} className="mb-2">
                                        <Input
                                            label={`Javob ${index + 1}`}
                                            color="#2c3e50"
                                            type="text"
                                            required
                                            value={answer.answer}
                                            onChange={(e) =>
                                                handleAnswerChange(index, e.target.value)
                                            }
                                            className="border-MainColor text-[#2c3e50]"
                                        />
                                    </div>
                                ))}
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
