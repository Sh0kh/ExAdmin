import { useEffect, useState } from "react";
import { Button, Input, Checkbox } from "@material-tailwind/react";
import axios from "axios";
import Swal from "sweetalert2";

export default function QuestionEdit({ isOpen, onClose, data, refresh }) {
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState([]);


    useEffect(() => {
        if (data) {
            const initialOptions = data?.answers?.map((answer, index) => ({
                id: index,
                text: answer.answer,
                isCorrect: answer.is_correct === 1,
            })) || [];
            setQuestion(data?.question || "");
            setOptions(initialOptions);
        }
    }, [data]);

    const handleOptionChange = (index, key, value) => {
        setOptions((prev) =>
            prev.map((option, i) =>
                i === index ? { ...option, [key]: value } : option
            )
        );
    };

    const handleCorrectSelection = (index) => {
        setOptions((prev) =>
            prev.map((option, i) => ({
                ...option,
                isCorrect: i === index,
            }))
        );
    };

    const addOption = () => {
        setOptions((prev) => [
            ...prev,
            { id: prev.length, text: "", isCorrect: false },
        ]);
    };

    const removeOption = (index) => {
        setOptions((prev) => prev.filter((_, i) => i !== index));
    };

    const editQuestion = async () => {
        try {
            const editData = {
                type: "writing",
                question,
                answer: options.map((option) => ({
                    answer: option.text,
                    is_correct: option.isCorrect ? 1 : 0,
                })),
            };

            await axios.put(`/questions/${data?.id}`, editData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            onClose();
            refresh();
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
            <div
                className={`Modal ${isOpen ? "open" : ""}`}
                onClick={onClose}
            >
                <div
                    className={`Modal2Content ${isOpen ? "open" : ""}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="p-[10px] pb-[30px]">
                        <div className="flex items-center justify-between pt-[10px] pb-[20px]">
                            <h1 className="text-MainColor text-[20px]">Savol o`zgartirish</h1>
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
                        <div>
                            <Input
                                label="Savol"
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                color="#2c3e50"
                                type="text"
                                required
                                className="border-MainColor text-[#2c3e50]"
                            />
                            <div className="flex flex-col gap-[10px] mt-[20px]">
                                {options.map((option, index) => (
                                    <div
                                        key={option.id}
                                        className="flex items-center gap-[10px]"
                                    >
                                        <Input
                                            label={`Variant ${index + 1}`}
                                            value={option.text}
                                            onChange={(e) =>
                                                handleOptionChange(index, "text", e.target.value)
                                            }
                                            color="#2c3e50"
                                            type="text"
                                            required
                                            className="border-MainColor text-[#2c3e50] flex-1"
                                        />
                                        <Checkbox
                                            checked={option.isCorrect}
                                            onChange={() => handleCorrectSelection(index)}
                                            color="#2c3e50"
                                            className="h-[25px] w-[25px] text-[#2c3e50] border-MainColor"
                                        />
                                        <Button
                                            onClick={() => removeOption(index)}
                                            color="white"
                                            className="bg-MainColor  transition duration-500 border-MainColor border-[2px] text-white hover:bg-transparent hover:text-MainColor"
                                        >
                                            -
                                        </Button>
                                    </div>
                                ))}
                                <Button
                                    onClick={addOption}
                                    color="white"
                                    className="bg-MainColor w-full mt-[10px] transition duration-500 border-MainColor border-[2px] text-white hover:bg-transparent hover:text-MainColor"
                                >
                                    Varian qoshish
                                </Button>
                            </div>
                            <Button
                                onClick={editQuestion}
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
    );
}
