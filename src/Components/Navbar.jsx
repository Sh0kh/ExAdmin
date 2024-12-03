import { FiMenu } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useState, useRef, useEffect } from "react";
import { toggleState } from "../Redux/NavbarSlice";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef(null);
    const fotoRef = useRef(null);

    const handleToggle = () => {
        dispatch(toggleState()); // переключаем состояние
    };

    const handleModalToggle = () => {
        setIsModalOpen((prev) => !prev);
    };

    const handleOutsideClick = (event) => {
        // Проверка, если клик был вне модала и не на аватарке
        if (modalRef.current && !modalRef.current.contains(event.target) && !fotoRef.current.contains(event.target)) {
            setIsModalOpen(false);
        }
    };

    useEffect(() => {
        if (isModalOpen) {
            document.addEventListener("click", handleOutsideClick);
        } else {
            document.removeEventListener("click", handleOutsideClick);
        }
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [isModalOpen]);

    const Foto = "https://ias.gov.uz/static/uploads/8d185ff8-6b4e-4aa1-ba00-26daf1696462.png";

    return (
        <div className="w-full bg-MainColor px-[20px] py-[12px] shadow-2xl">
            <div className="flex items-center justify-between">
                <div onClick={handleToggle} className="cursor-pointer">
                    <FiMenu fontSize={30} color="white" />
                </div>
                <div className="relative flex items-center gap-[10px] text-[white] cursor-pointer">
                    <span>John Doe</span>
                    <div
                        ref={fotoRef} // Ссылка на аватарку
                        className="w-[50px] h-[50px] rounded-[50%] bg-[white] border-[2px] border-[white]"
                        onClick={handleModalToggle} // Открытие/закрытие модала
                    >
                        <img
                            src={Foto}
                            alt="User"
                            className="rounded-[50%]"
                        />
                    </div>

                    {/* Плавное появление модала */}
                    {isModalOpen && (
                        <div
                            ref={modalRef} // Ссылка на модал
                            className="bg-MainColor top-[70px] z-30 right-[-12px] absolute rounded-[10px] p-[8px] transition-opacity duration-500 opacity-100"
                            style={{ animation: 'fadeIn 0.5s ease-out' }} // Добавляем анимацию открытия
                        >
                            <NavLink to={'/profile'}>
                                <button className="w-[100px] p-[8px] flex items-center justify-start rounded-[10px] hover:bg-[white] hover:text-MainColor duration-300">
                                    Profil
                                </button>
                            </NavLink>
                            <button className="w-[100px] p-[8px] flex items-center justify-start rounded-[10px] hover:bg-[white] hover:text-MainColor duration-300">
                                Chiqish
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
