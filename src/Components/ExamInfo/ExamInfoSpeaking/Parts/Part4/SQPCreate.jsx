import { useState } from "react";
import { Button, Input } from '@material-tailwind/react';
import Swal from 'sweetalert2';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function SQPCreate({ isOpen, onClose, refresh }) {
    const { id } = useParams();
    const [goodText, setGoodText] = useState("");
    const [badText, setBadText] = useState("");
    const [question, setQuestion] = useState("");
    const [loading, setLoading] = useState(false);

    const createQuestion = async () => {
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append("part_id", Number(id));
            formData.append("question", question);
            formData.append("type", "speaking");

            await axios.post('/questions', formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "multipart/form-data",
                },
            });
            refresh()
            setQuestion("");
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
        } finally {
            setLoading(false);
        }
    };

    const updatePart = async () => {
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append('description', goodText);
            formData.append('right_text', badText);

            await axios.post(`/part-update/${id}`, formData, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
            setGoodText('')
            setBadText('')
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
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async () => {
        if (loading) return;
        await updatePart();
        await createQuestion();
    };

    return (
        <>
            <div className={`Modal ${isOpen ? "open" : ""}`} onClick={onClose}>
                <div className={`Modal2Content ${isOpen ? "open" : ""}`} onClick={(e) => e.stopPropagation()}>
                    <div className='p-[10px] pb-[30px]'>
                        <div className='flex items-center justify-between pt-[10px] pb-[20px]'>
                            <h1 className='text-MainColor text-[20px]'>Savol yaratish</h1>
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
                                onChange={(e) => setQuestion(e.target.value)}
                                color="#2c3e50"
                                type="text"
                                required
                                className="border-MainColor text-[#2c3e50]"
                            />
                            <div className="mt-[10px] mb-[60px]">
                                <ReactQuill
                                    theme="snow"
                                    value={goodText}
                                    onChange={setGoodText}
                                    placeholder="Positive side"
                                    className="h-[150px]"
                                />
                            </div>
                            <div className="mt-[10px] mb-[60px]">
                                <ReactQuill
                                    theme="snow"
                                    value={badText}
                                    onChange={setBadText}
                                    placeholder="Negative side"
                                    className="h-[150px]"
                                />
                            </div>
                            <Button
                                onClick={handleSubmit}
                                fullWidth
                                color="white"
                                className="bg-MainColor mt-[15px] transition duration-500 border-MainColor border-[2px] text-white hover:bg-transparent hover:text-MainColor"
                                disabled={loading}
                            >
                                {loading ? "Yaratilmoqda..." : "Yaratish"}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
