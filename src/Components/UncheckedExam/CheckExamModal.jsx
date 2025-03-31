import { Button, Input } from '@material-tailwind/react';
import { useState } from 'react';
import { $api } from '../../utils/axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function CheckExamModal({ isOpen, onClose, data }) {
    const [scores, setScores] = useState({});
    const navigate = useNavigate();

    const handleScoreChange = (id, value) => {
        setScores(prev => ({ ...prev, [id]: Number(value) || 0 }));
    };

    const checkExamSection = async () => {
        if (!data?.part_scores?.every(part => scores[part.id] !== undefined)) {
            return Swal.fire({
                title: 'Xatolik!',
                text: 'Barcha ballarni kiriting.',
                icon: 'warning',
                position: 'top-end',
                timer: 3000,
                timerProgressBar: true,
                showCloseButton: true,
                toast: true,
                showConfirmButton: false,
            });
        }

        try {
            const sectionBall = {
                exam_id: data?.exam_id,
                section_score_id: data?.id,
                parts_scores: data?.part_scores?.map(part => ({
                    part_score_id: part.id,
                    answers: part.user_answers.map(answer => ({
                        user_answer_id: answer.id,
                        score: scores[part.id] ?? 0,
                    })),
                })),
            };

            await $api.post(`/teacher/check`, sectionBall);
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

            onClose();
            setTimeout(() => navigate(-1), 1000);
        } catch (error) {
            Swal.fire({
                title: 'Xatolik!',
                text: error.response?.data?.message || 'Xatolik yuz berdi.',
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
            <div className="Modal2Content overflow-y-auto max-h-[700px]" onClick={(e) => e.stopPropagation()}>
                <div className='p-6'>
                    <div className='flex items-center justify-between border-b pb-4'>
                        <h1 className='text-2xl font-semibold text-gray-800'>Baholash</h1>
                        <button onClick={onClose} className='text-gray-600 hover:text-gray-800'>
                            ✖
                        </button>
                    </div>
                    <div className='mt-4 space-y-4'>
                        {data?.part_scores?.map((part, index) => (
                            <div key={part.id} className='p-4 border rounded-lg shadow-sm bg-white'>
                                <h2 className='text-lg font-medium text-gray-700 mb-2'>
                                    Vazifa {index + 1}
                                </h2>
                                <Input
                                    label="Ball"
                                    value={scores[part.id] ?? ''}
                                    onChange={(e) => handleScoreChange(part.id, e.target.value)}
                                    type="number"
                                    required
                                    className="border-gray-300 w-full text-gray-800 bg-white shadow-sm"
                                />
                            </div>
                        ))}
                    </div>
                    <Button
                        onClick={checkExamSection}
                        fullWidth
                        className="bg-blue-600 text-white font-medium py-2 mt-6 rounded-lg shadow-md hover:bg-blue-700 transition"
                    >
                        Jonatish
                    </Button>
                </div>
            </div>
        </div>
    );
}
