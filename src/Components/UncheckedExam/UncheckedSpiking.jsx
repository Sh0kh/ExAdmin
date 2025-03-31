import React from 'react';
import CONFIG from '../../utils/Config';

export default function UncheckedSpeaking({ data }) {
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
                {data.part_scores.map((part, partIndex) => (
                    <div key={partIndex} className="bg-MainColor w-full rounded-lg p-6 text-white shadow-lg">
                        <h1 className="text-2xl font-semibold mb-4">Vazifa {partIndex + 1}</h1>
                        {part.user_answers.length > 0 ? (
                            part.user_answers.map((answer, answerIndex) => (
                                <div key={answerIndex} className="mb-6">
                                    <h2 className="text-lg font-medium uppercase text-gray-300 mb-2">Savol:</h2>
                                    <div className="p-4 bg-opacity-20 bg-white rounded-lg">
                                        <p className="text-lg leading-relaxed text-white"
                                            dangerouslySetInnerHTML={{ __html: answer.question?.question || '' }} />
                                    </div>
                                    <h2 className="text-lg font-medium uppercase text-gray-300 mb-2 mt-4">Foydalanuvchi javobi:</h2>
                                    <div className="p-4 bg-opacity-20 bg-white rounded-lg">
                                        {answer.file_path ? (
                                            <audio controls className="w-full">
                                                <source src={`${CONFIG.API_URL}/${answer.file_path}`} type="audio/ogg" />
                                                Your browser does not support the audio element.
                                            </audio>
                                        ) : (
                                            <p className="text-lg leading-relaxed text-white">Javob topilmadi</p>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-lg leading-relaxed text-white">Bu bo‘limda javoblar yo‘q</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
