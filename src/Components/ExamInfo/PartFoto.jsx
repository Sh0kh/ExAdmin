import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import LoadingModal from "../LoadingModal";
import CONFIG from "../../utils/Config";

export default function PartFoto({ data }) {
    const [photo, setPhoto] = useState(data ? CONFIG?.API_URL + data : null);
    const [showModal, setShowModal] = useState(false); // Управляет модальным окном
    const { id } = useParams(); // Получаем ID из параметров маршрута
    const [loading, setLoading] = useState(false)

    const postPhoto = async (file) => {
        const formData = new FormData();
        formData.append("photo", file);
        setLoading(true)
        try {
            await axios.post(`/part-update/${id}`, formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "multipart/form-data",
                },
            });
            Swal.fire({
                title: "Muvaffaqiyatli!",
                icon: "success",
                timer: 3000,
                showCloseButton: true,
                toast: true,
                position: "top-end",
                showConfirmButton: false,
            });
            setPhoto(URL.createObjectURL(file)); // Локально обновляем фото после загрузки
        } catch (error) {
            console.log(error)
            Swal.fire({
                title: "Error!",
                text: error.response?.data?.message || "Failed to upload photo.",
                icon: "error",
                timer: 3000,
                showCloseButton: true,
                toast: true,
                position: "top-end",
                showConfirmButton: false,
            });
        } finally {
            setLoading(false)
        }
    };

    // Удаление фото
    const handleDeletePhoto = () => {
        setPhoto(null);
        setShowModal(false);
    };

    // Обработчик выбора файла
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            postPhoto(file); // Отправляем фото на сервер
        }
    };

    return (
        <div className="w-full">
            <div className="w-full bg-MainColor px-[30px] py-[15px] mb-[20px] rounded-[10px] flex items-center justify-between">
                <div>
                    {!photo ? (
                        <label className="p-2 border-2 border-white text-MainColor bg-white rounded-[5px] hover:bg-transparent hover:text-white cursor-pointer">
                            Rasm yuklang
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
                {photo && (
                    <div className="flex items-center gap-[10px]">
                        <button
                            className="p-2 border-2 border-white text-MainColor bg-white rounded-[5px] hover:bg-transparent hover:text-white"
                            onClick={() => setShowModal(true)}
                        >
                            <IoEyeSharp fontSize={22} />
                        </button>
                        <button
                            className="p-2 border-2 border-white text-MainColor bg-white rounded-[5px] hover:bg-transparent hover:text-white"
                            onClick={handleDeletePhoto}
                        >
                            <MdDelete fontSize={22} />
                        </button>
                    </div>
                )}
            </div>

            {showModal && (
                <div
                    onClick={() => setShowModal(false)}
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                >
                    <div className="bg-white p-5 rounded-[10px] shadow-lg relative max-w-[90%]">
                        <img
                            src={photo}
                            alt="Rasm"
                            className="w-full rounded-[10px] max-h-[80vh]"
                        />
                    </div>
                </div>
            )}
            <LoadingModal isOpen={loading} />
        </div>
    );
}
