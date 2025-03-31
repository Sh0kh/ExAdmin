import { FiMenu } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";
import { toggleState } from "../Redux/NavbarSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { fetchData } from '../Redux/MyInformation';
import { useDispatch, useSelector } from 'react-redux';



export default function Navbar() {
    const dispatch = useDispatch();
    const { data, status } = useSelector((state) => state.data);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef(null);
    const fotoRef = useRef(null);
    const navigate = useNavigate()
    const role = localStorage.getItem('role')



    if (status === 'idle' && role === 'ADMIN') {
        dispatch(fetchData());
    }
    const Exit = () => {
        localStorage.clear()
        navigate('/login')
    }
    const handleToggle = () => {
        dispatch(toggleState());
    };
    const handleModalToggle = () => {
        setIsModalOpen((prev) => !prev);
    };
    const handleOutsideClick = (event) => {
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
                <div className="flex items-center gap-[20px]">
                    <div onClick={handleToggle} className="cursor-pointer">
                        <FiMenu fontSize={30} color="white" />
                    </div>
                    <div className="flex items-center gap-[5px]">
                        <button onClick={() => { navigate(-1) }} className="border-[2px] px-[10px] text-[20px] py-[2px]  rounded-[10px] bg-[white] text-MainColor duration-300 hover:bg-transparent hover:text-[white] ">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.3} d="m6 8l-4 4l4 4m-4-4h20"></path></svg>
                        </button>
                        <button onClick={() => { navigate(+1) }} className="border-[2px] px-[10px] text-[20px] py-[2px]  rounded-[10px] bg-[white] text-MainColor duration-300 hover:bg-transparent hover:text-[white] ">
                            <svg className="rotate-[180deg]" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.3} d="m6 8l-4 4l4 4m-4-4h20"></path></svg>
                        </button>
                    </div>
                </div>
                <div className="relative flex items-center gap-[10px] text-[white] cursor-pointer">
                    <span>{data?.name}</span>
                    <div
                        ref={fotoRef}
                        className="w-[50px] h-[50px] rounded-[50%] bg-[white] border-[2px] border-[white]"
                        onClick={handleModalToggle}
                    >
                        <img
                            src={Foto}
                            alt="User"
                            className="rounded-[50%]"
                        />
                    </div>
                    {isModalOpen && (
                        <div
                            ref={modalRef}
                            className="bg-MainColor top-[70px] z-30 right-[-12px] absolute rounded-[10px] p-[8px] transition-opacity duration-500 opacity-100"
                            style={{ animation: 'fadeIn 0.5s ease-out' }}
                        >
                            {role === "ADMIN" && (
                                <NavLink to={'/profile'}>
                                    <button className="w-[100px] p-[8px] flex items-center justify-start rounded-[10px] hover:bg-[white] hover:text-MainColor duration-300">
                                        Profil
                                    </button>
                                </NavLink>
                            )}
                            <button onClick={Exit} className="w-[100px] p-[8px] flex items-center justify-start rounded-[10px] hover:bg-[white] hover:text-MainColor duration-300">
                                Chiqish
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
