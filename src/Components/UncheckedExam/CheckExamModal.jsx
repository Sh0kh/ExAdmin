import { Button, Input } from '@material-tailwind/react';
import { useState, useEffect } from 'react';
import { $api } from '../../utils/axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function CheckExamModal({ isOpen, onClose, data }) {
    const [scores, setScores] = useState({});
    const navigate = useNavigate();

    // Initialize scores structure when data changes
    useEffect(() => {
        if (data?.part_scores) {
            const initialScores = {};
            data.part_scores.forEach(part => {
                part.user_answers.forEach(answer => {
                    // Инициализируем значения как пустые строки вместо 0
                    initialScores[answer.id] = '';
                });
            });
            setScores(initialScores);
        }
    }, [data]);

    const handleScoreChange = (answerId, value) => {
        // Позволяем сохранять пустую строку для возможности очистки поля
        setScores(prev => ({ ...prev, [answerId]: value }));
    };

    const checkExamSection = async () => {
        // Проверка, что все ответы имеют оценки
        const allAnswers = data?.part_scores?.flatMap(part => part.user_answers) || [];
        if (allAnswers.length > 0 && !allAnswers.every(answer => scores[answer.id] !== undefined && scores[answer.id] !== '')) {
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
                    // Всегда отправлять answers, даже если нет ответов
                    answers: part.user_answers.length > 0
                        ? part.user_answers.map(answer => ({
                            user_answer_id: answer.id,
                            // Преобразуем в число при отправке
                            score: scores[answer.id] === '' ? 0 : Number(scores[answer.id]),
                        }))
                        : [] // Пустой массив для частей без ответов
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
                    <div className='mt-4 space-y-6'>
                        {data?.part_scores?.map((part, partIndex) => (
                            <div key={part.id} className='p-4 border rounded-lg shadow-sm bg-white'>
                                <h2 className='text-lg font-medium text-gray-700 mb-3'>
                                    Vazifa {partIndex + 1}
                                </h2>

                                {part.user_answers.length > 0 ? (
                                    <div className='space-y-4'>
                                        {part.user_answers.map((answer, answerIndex) => (
                                            <div key={answer.id} className='border rounded-lg p-3 bg-gray-50'>
                                                <Input
                                                    label={`Javob ${answerIndex + 1} uchun ball`}
                                                    value={scores[answer.id] ?? ''}
                                                    onChange={(e) => handleScoreChange(answer.id, e.target.value)}
                                                    type="number"
                                                    required
                                                    className="border-gray-300 w-full text-gray-800 bg-white shadow-sm"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className='text-gray-500 italic'>Bu vazifada javoblar mavjud emas</p>
                                )}
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