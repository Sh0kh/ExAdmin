import { Button } from '@material-tailwind/react';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function MessageDetailModal({ isOpen, onClose, data }) {
    // Функция для изменения статуса сообщения на "прочитано"
    const markAsRead = async () => {
        try {
            await axios.put(`/api/messages/${data.id}`, { status: 'read' });
            Swal.fire({
                icon: 'success',
                title: 'Сообщение отмечено как прочитанное',
                showConfirmButton: false,
                timer: 1500,
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Ошибка',
                text: 'Не удалось изменить статус сообщения',
            });
        }
    };

    return (
        <>
            {/* Основной контейнер модального окна */}
            <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${isOpen ? 'block' : 'hidden'}`} onClick={onClose}>
                <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-[500px] overflow-hidden" onClick={(e) => e.stopPropagation()}>
                    {/* Заголовок и кнопка закрытия */}
                    <div className="flex items-center justify-between p-4 border-b">
                        <h3 className="text-lg font-semibold"></h3>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14">
                                <path fill="currentColor" d="M1.707.293A1 1 0 0 0 .293 1.707L5.586 7L.293 12.293a1 1 0 1 0 1.414 1.414L7 8.414l5.293 5.293a1 1 0 0 0 1.414-1.414L8.414 7l5.293-5.293A1 1 0 0 0 12.293.293L7 5.586z" />
                            </svg>
                        </button>
                    </div>

                    {/* Содержимое модального окна */}
                    <div className="p-4">
                        <div className="space-y-4">
                            {/* Имя отправителя */}
                            <div>
                                <p className="text-sm text-gray-500">Jonatuvchi</p>
                                <p className="text-lg font-medium">{`${data.first_name} ${data.last_name}`}</p>
                            </div>

                            {/* Email */}
                            <div>
                                <p className="text-sm text-gray-500">Email</p>
                                <p className="text-base">{data.email}</p>
                            </div>

                            {/* Номер телефона */}
                            <div>
                                <p className="text-sm text-gray-500">Telefon</p>
                                <p className="text-base">{data.phone_number}</p>
                            </div>

                            {/* Сообщение */}
                            <div>
                                <p className="text-sm text-gray-500">Xabar</p>
                                <p className="text-base">{data.message}</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}