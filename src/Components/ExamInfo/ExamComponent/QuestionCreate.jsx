import { useState } from "react";
import { Button, Input, Checkbox } from '@material-tailwind/react';
import Swal from 'sweetalert2';
import axios from "axios";
import { useParams } from "react-router-dom";

export default function QuestionCreate({ isOpen, onClose, refresh }) {
    const { id } = useParams();
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState([{ answer: '', is_correct: false }]);

    const addOption = () => {
        setOptions([...options, { answer: '', is_correct: false }]);
    };

    const updateOption = (index, field, value) => {
        const updatedOptions = options.map((option, i) => ({
            ...option,
            is_correct: field === "is_correct" && i === index ? value : false,
        }));
        updatedOptions[index][field] = value;
        setOptions(updatedOptions);
    };

    const removeOption = (index) => {
        const updatedOptions = options.filter((_, i) => i !== index);
        setOptions(updatedOptions);
    };

    const createQuestion = async () => {
        // Check if all options have an answer and at least one correct answer
        const isValid = options.every(option => option.answer.trim() !== '' && (option.is_correct || false));

        if (!isValid) {
            Swal.fire({
                title: 'Error!',
                text: 'Please make sure all options have an answer and one is marked as correct.',
                icon: 'error',
                position: 'top-end',
                timer: 3000,
                timerProgressBar: true,
                showCloseButton: true,
                toast: true,
                showConfirmButton: false,
            });
            return;
        }

        try {
            const formData = new FormData();
            formData.append("part_id", Number(id));
            formData.append("question", question);
            formData.append("type", "quiz");
            formData.append("answers", JSON.stringify(options.map(opt => ({
                answer: opt.answer,
                is_correct: opt.is_correct ? 1 : 0,
            }))));

            await axios.post('/questions', formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "multipart/form-data",
                },
            });
            setQuestion('');
            setOptions([{ answer: '', is_correct: false }]);
            refresh();
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
        <div className={`Modal ${isOpen ? "open" : ""}`} onClick={onClose}>
            <div className={`Modal2Content max-h-[90%] overflow-y-auto ${isOpen ? "open" : ""}`} onClick={(e) => e.stopPropagation()}>
                <div className='p-[10px] pb-[30px]'>
                    <div className='flex items-center justify-between pt-[10px] pb-[20px]'>
                        <h1 className='text-MainColor text-[20px]'>Savol yaratish</h1>
                        <button onClick={onClose}>
                            <svg className='text-[#5E5C5A] text-[12px]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14">
                                <path fill="currentColor" fillRule="evenodd" d="M1.707.293A1 1 0 0 0 .293 1.707L5.586 7L.293 12.293a1 1 0 1 0 1.414 1.414L7 8.414l5.293 5.293a1 1 0 0 0 1.414-1.414L8.414 7l5.293-5.293A1 1 0 0 0 12.293.293L7 5.586z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <Input
                        label="Savol"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        color="#2c3e50"
                        type="text"
                        required
                        className="border-MainColor text-[#2c3e50]"
                    />
                    <div className="mt-[20px]">
                        {options.map((option, index) => (
                            <div key={index} className="flex items-center gap-[10px] mb-[10px]">
                                <Input
                                    label={`Variant ${index + 1}`}
                                    value={option.answer}
                                    onChange={(e) => updateOption(index, 'answer', e.target.value)}
                                    color="#2c3e50"
                                    type="text"
                                    required
                                    className="border-MainColor text-[#2c3e50]"
                                />
                                <div className="flex items-center flex-col">
                                    {/* <span>
                                        Javob
                                    </span> */}
                                    <Checkbox
                                        checked={option.is_correct}
                                        onChange={(e) => updateOption(index, 'is_correct', e.target.checked)}
                                        color="#2c3e50"
                                        className="h-[25px] w-[25px] text-[#2c3e50] border-MainColor"
                                    />
                                </div>
                                {options.length > 1 && (
                                    // <button  className="text-red-500">
                                    //     Удалить
                                    // </button>
                                    <Button
                                        onClick={() => removeOption(index)}
                                        color="white"
                                        className="bg-MainColor  transition duration-500 border-MainColor border-[2px] text-white hover:bg-transparent hover:text-MainColor"
                                    >
                                        -
                                    </Button>
                                )}
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
                        onClick={createQuestion}
                        fullWidth
                        color="white"
                        className="bg-MainColor mt-[15px] transition duration-500 border-MainColor border-[2px] text-white hover:bg-transparent hover:text-MainColor"
                    >
                        Yaratish
                    </Button>
                </div>
            </div>
        </div>
    );
}
