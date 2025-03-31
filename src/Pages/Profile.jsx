import { FaPhoneAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import EditModal from "../Components/Profile/EditModal";
import { useState } from "react";
import { fetchData } from '../Redux/MyInformation';
import { useDispatch, useSelector } from 'react-redux';

export default function Profile() {
    const [editModal, setEditModal] = useState(false);
    const dispatch = useDispatch();
    const { data, status } = useSelector((state) => state.data);

    if (status === 'idle') {
        dispatch(fetchData());
    }

    const Foto = 'https://ias.gov.uz/static/uploads/8d185ff8-6b4e-4aa1-ba00-26daf1696462.png';

    // Функция форматирования номера
    const formatPhoneNumber = (phone) => {
        if (!phone) return "";

        // Убираем все нечисловые символы
        let digits = phone.replace(/\D/g, "");

        // Убираем лишние 998, если уже начинается с +998 или 998
        if (digits.startsWith("998")) {
            digits = digits.slice(3);
        }

        // Если номер не 9 цифр после удаления 998, то возвращаем как есть
        if (digits.length !== 9) return phone;

        // Форматируем номер
        return `+998 ${digits.slice(0, 2)} ${digits.slice(2, 5)} ${digits.slice(5, 7)} ${digits.slice(7, 9)}`;
    };

    return (
        <div className="Profile p-[15px]">
            <div className="relative p-[20px] rounded-[10px] bg-MainColor w-[500px] text-[white] text-center">
                <div className="flex items-center justify-center">
                    <div className="bg-[white] w-[140px] cursor-pointer rounded-[50%]">
                        <img className="w-full h-[100%] rounded-[50%]" src={Foto} alt="foto" />
                    </div>
                </div>
                <h1 className="text-[25px] mt-[15px]">
                    {data?.surname} {data?.name}
                </h1>
                <h2 className="text-[20px] mt-[10px]">
                    {data?.role}
                </h2>
                <div className="flex items-center justify-center mt-[10px] gap-[10px]">
                    <FaPhoneAlt fontSize={25} />
                    <span>{formatPhoneNumber(data?.phoneNumber)}</span>
                </div>
                <div onClick={() => setEditModal(true)} className="absolute top-[10px] border-[2px] border-[white] p-[8px] rounded-[50%] text-[22px] right-[10px] z-40 text-[white] duration-500 hover:text-MainColor hover:bg-[white] cursor-pointer">
                    <MdEdit />
                </div>
            </div>
            <EditModal isOpen={editModal} onClose={() => setEditModal(false)} />
        </div>
    );
}
