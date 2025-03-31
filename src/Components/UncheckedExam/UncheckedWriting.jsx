import React from 'react';

export default function UncheckedWriting({ data }) {
    // Проверка на наличие данных
    if (!data || !data.part_scores || data.part_scores.length === 0) {
        return (
            <div className="w-full p-4 flex justify-center items-center h-[50vh]">
                <p className="text-lg text-gray-500"> Javob topilmadi</p>
            </div>
        );
    }

    return (
        <div className="w-full p-4">
            <div className="flex flex-col items-center gap-5">
                {data?.part_scores?.map((item, index) => (
                    <div
                        key={index}
                        className="bg-MainColor w-full rounded-lg p-6 text-white shadow-lg"
                    >
                        {/* Заголовок */}
                        <div className="flex items-center justify-between mb-4">
                            <h1 className="text-2xl font-semibold">
                                Vazifa {index + 1}
                            </h1>
                        </div>

                        {/* ВОПРОС */}
                        <div className="mb-6">
                            <h2 className="text-lg font-medium uppercase text-gray-300 mb-2">
                                Savol:
                            </h2>
                            <div className="p-4 bg-opacity-20 bg-white rounded-lg">
                                <p
                                    className="text-lg leading-relaxed text-white"
                                    dangerouslySetInnerHTML={{
                                        __html: item?.user_answers[0]?.question?.question || '',
                                    }}
                                />
                            </div>
                        </div>

                        {/* ОТВЕТ ПОЛЬЗОВАТЕЛЯ */}
                        <div>
                            <h2 className="text-lg font-medium uppercase text-gray-300 mb-2">
                                Foydalanuvchi javobi:
                            </h2>
                            <div className="p-4 bg-opacity-20 bg-white rounded-lg">
                                <p className="text-lg leading-relaxed text-white">
                                    {item?.user_answers[0]?.answer_text || 'Javob topilmadi'}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}