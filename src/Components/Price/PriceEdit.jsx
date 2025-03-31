import { Button, Input } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { $api } from '../../utils/axios';
import { useNavigate } from 'react-router-dom';

export default function PriceEdit({ isOpen, onClose, refresh, type, prices }) {
    const [price, setPrice] = useState('');
    const navigate = useNavigate('')

    // Функция для форматирования числа с пробелами
    const formatNumber = (value) => {
        return value.toString() // Преобразуем значение в строку
            .replace(/\D/g, "") // Удаляем все нецифровые символы
            .replace(/\B(?=(\d{3})+(?!\d))/g, " "); // Добавляем пробелы через каждые три цифры
    };

    // Обработчик изменения значения в поле ввода
    const handlePriceChange = (e) => {
        const rawValue = e.target.value; // Получаем "сырое" значение из поля ввода
        const formattedValue = formatNumber(rawValue); // Форматируем значение
        setPrice(formattedValue); // Устанавливаем отформатированное значение в состояние
    };

    // Применяем форматирование к начальному значению цены
    useEffect(() => {
        if (prices) {
            const formattedPrice = formatNumber(prices?.price || 0); // Форматируем начальное значение
            setPrice(formattedPrice); // Устанавливаем отформатированное значение в состояние
        }
    }, [prices]);

    // Функция для отправки изменений на сервер
    const editPrice = async () => {
        try {
            const rawPrice = price.replace(/\s/g, ""); // Убираем пробелы перед отправкой

            const editData = {
                type: type,
                price: parseInt(rawPrice, 10), // Преобразуем цену в число
            };

            await $api.post(`/prices`, editData);
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
            refresh();
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
            if (error?.code === 401) {
                navigate('/login')
                localStorage?.clear()
            }
        }
    };

    return (
        <>
            <div className={`Modal ${isOpen ? "open" : ""}`} onClick={onClose}>
                <div className={`ModalContent ${isOpen ? "open" : ""}`} onClick={(e) => e.stopPropagation()}>
                    <div className='p-[10px] pb-[30px]'>
                        <div className='flex items-center justify-between pt-[10px] pb-[20px]'>
                            <h1 className='text-MainColor text-[20px]'>
                                Narxdi o'zgartirish
                            </h1>
                            <button onClick={onClose}>
                                <svg className='text-[#5E5C5A] text-[12px]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14">
                                    <path fill="currentColor" fillRule="evenodd" d="M1.707.293A1 1 0 0 0 .293 1.707L5.586 7L.293 12.293a1 1 0 1 0 1.414 1.414L7 8.414l5.293 5.293a1 1 0 0 0 1.414-1.414L8.414 7l5.293-5.293A1 1 0 0 0 12.293.293L7 5.586z" clipRule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                        <div>
                            <Input
                                label="Imtihon nomi"
                                value={price}
                                onChange={handlePriceChange} // Используем обработчик для форматирования
                                color="#2c3e50"
                                type="text" // Меняем тип на "text", чтобы избежать ограничений для чисел
                                required
                                className="border-MainColor text-[#2c3e50] bg-[]"
                            />
                            <Button
                                onClick={editPrice}
                                fullWidth
                                color="white"
                                className="bg-MainColor mt-[15px] transition duration-500 border-MainColor border-[2px] text-white hover:bg-transparent hover:text-MainColor"
                            >
                                O'zgartirish
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}