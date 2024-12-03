import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

export default function SQP1Iamge() {
    const [photo, setPhoto] = useState(null); // Хранит выбранное фото
    const [showModal, setShowModal] = useState(false); // Управляет отображением модального окна

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setPhoto(URL.createObjectURL(file)); // Создаем ссылку для отображения фото
        }
    };

    const handleDeletePhoto = () => {
        setPhoto(null); // Удаляем фото
        setShowModal(false); // Скрываем модальное окно
    };

    return (
        <div className="w-full">
            <div className="w-full bg-MainColor px-[30px] py-[15px] mb-[20px] rounded-[10px] flex items-center justify-between">
                <div>
                    {/* Если фото еще не загружено, показываем кнопку загрузки */}
                    {!photo ? (
                        <label className="p-2 border-2 border-white text-MainColor bg-white rounded-[5px] hover:bg-transparent hover:text-white cursor-pointer">
                            Rasm yuklash
                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleFileChange}
                            />
                        </label>
                    ) : (
                        <span className="text-white">Rasm yuklangan</span>
                    )}
                </div>
                {/* Кнопки управления, если фото загружено */}
                {photo && (
                    <div className="flex items-center gap-[10px]">
                        <button
                            className="p-2 border-2 border-white text-MainColor bg-white rounded-[5px] hover:bg-transparent hover:text-white"
                            onClick={() => setShowModal(true)} // Показываем модальное окно
                        >
                            <IoEyeSharp fontSize={22} />
                        </button>
                        <button
                            className="p-2 border-2 border-white text-MainColor bg-white rounded-[5px] hover:bg-transparent hover:text-white"
                            onClick={handleDeletePhoto} // Удаляем фото
                        >
                            <MdDelete fontSize={22} />
                        </button>
                    </div>
                )}
            </div>

            {/* Модальное окно для отображения фото */}
            {showModal && (
                <div onClick={() => setShowModal(false)} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-5 rounded-[10px] shadow-lg relative max-w-[90%]">
                        <img
                            src={photo}
                            alt="Rasm joilang"
                            className="w-full rounded-[10px] max-h-[80vh]"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
