import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { useParams } from "react-router-dom";

export default function Paragraph({ Create, data }) {
    const [showModal, setShowModal] = useState(false); // Управляет модальным окном
    const { id } = useParams(); // Получаем ID из параметров маршрута

    return (
        <div className="w-full">
            <div className="w-full bg-MainColor px-[30px] py-[15px] mb-[20px] rounded-[10px] flex items-center justify-between">
                <div>
                    {data === null ? (
                        <button
                            onClick={() => Create(true)}
                            className="p-2 border-2 duration-300 border-white text-MainColor bg-white rounded-[5px] hover:bg-transparent hover:text-white"
                        >
                            Paragtaph yaratish
                        </button>
                    ) : (
                        <button
                            onClick={() => Create(false)}
                            className="p-2 border-2 duration-300 border-white text-MainColor bg-white rounded-[5px] hover:bg-transparent hover:text-white"
                        >
                            Paragtaph o'zgartirish
                        </button>
                    )}
                </div>
                <div className="flex items-center gap-[10px]">
                    <button
                        className="p-2 border-2 border-white text-MainColor bg-white rounded-[5px] hover:bg-transparent hover:text-white"
                        onClick={() => setShowModal(true)}
                    >
                        <IoEyeSharp fontSize={22} />
                    </button>
                </div>
            </div>

            {showModal && (
                <div
                    onClick={() => setShowModal(false)}
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                >
                    <div
                        className="bg-white p-5 rounded-[10px] min-w-[300px] shadow-lg relative max-w-[90%]"
                        onClick={(e) => e.stopPropagation()} // Предотвращаем закрытие модального окна при клике внутри
                    >
                        {data ? (
                            <div dangerouslySetInnerHTML={{ __html: data }} />
                        ) : (
                            <p className="text-gray-500 text-center">Data is empty</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
