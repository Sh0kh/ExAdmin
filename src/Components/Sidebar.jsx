import React from 'react';
import { FaNoteSticky } from "react-icons/fa6";
import logo from '../Imagse/Examify_Dark.jpg';
import { AiFillHome } from "react-icons/ai";
import { NavLink, useLocation } from 'react-router-dom';
import { IoPeopleSharp } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { GiReceiveMoney } from "react-icons/gi";
import { MdOutlinePayments } from "react-icons/md";
import { MdMessage } from "react-icons/md";


import { FaAddressBook } from "react-icons/fa";

const Sidebar = () => {
    const isActive = useSelector((state) => state.state.isActive);
    const location = useLocation();

    // Определяем текущий путь
    const Home = location.pathname === '/';
    const Exam = location.pathname === '/exam';
    const Admins = location.pathname === '/admins';
    const Payment = location.pathname === '/payments';
    const Message = location.pathname === '/user/message';
    const Price = location.pathname === '/price';
    const Test = location.pathname === '/exam/check';

    // Получаем роль пользователя из localStorage
    const role = localStorage.getItem('role');

    // Массив с элементами боковой панели
    const sidebar = [
        {
            title: 'Bosh',
            icon: (<AiFillHome fontSize={30} />),
            path: '/',
            pathName: Home,
        },
        {
            role: 'TEACHER', // Только для преподавателей
            title: 'Imtihonlar',
            icon: (<FaNoteSticky fontSize={30} />),
            path: '/exam',
            pathName: Exam,
        },
        {
            role: 'ADMIN', // Только для администраторов
            title: 'Ustozlar',
            icon: (<IoPeopleSharp fontSize={30} />),
            path: '/admins',
            pathName: Admins,
        },
        {
            role: 'ADMIN', // Только для администраторов
            title: 'Narxlar',
            icon: (<GiReceiveMoney fontSize={30} />),
            path: '/price',
            pathName: Price,
        },
        {
            role: 'ADMIN', // Только для администраторов
            title: 'Tolovlar',
            icon: (<MdOutlinePayments fontSize={30} />),
            path: '/payments',
            pathName: Payment,
        },
        {
            role: 'ADMIN', // Только для администраторов
            title: 'Xabarlar',
            icon: (<MdMessage fontSize={30} />),
            path: '/user/message',
            pathName: Message,
        },
        {
            role: 'TEACHER', // Только для преподавателей
            title: 'Test',
            icon: (<FaAddressBook fontSize={30} />),
            path: '/uncheckend/exam',
            pathName: Test,
        },
    ];

    return (
        <div className={`${!isActive ? 'SidebarOpen' : 'SidebarClose'} Sidebar`}>
            {/* Логотип */}
            <div className="pt-[10px] cursor-pointer px-3 mb-1">
                <img className="w-[180px]" src={logo} alt="logo" />
            </div>
            <div className="w-full bg-[white] h-[1px]"></div>

            {/* Навигация */}
            <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-white text-[22px]">
                {sidebar
                    // Фильтруем элементы в зависимости от роли
                    .filter(item => {
                        if (role === 'ADMIN') {
                            // Администратор видит все элементы
                            return true;
                        } else if (role === 'TEACHER') {
                            // Преподаватель видит только элементы с role === 'TEACHER'
                            return item.role === 'TEACHER';
                        }
                        // Если роль не указана или не соответствует ни одной из возможных, ничего не показываем
                        return false;
                    })
                    .map((item, index) => (
                        <NavLink key={index} to={item.path}>
                            <div
                                role="button"
                                className={`flex items-center gap-[20px] w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 ${item.pathName ? 'bg-blue-gray-50 bg-opacity-80 text-blue-gray-900' : ''
                                    }`}
                            >
                                {item.icon}
                                {item.title}
                            </div>
                        </NavLink>
                    ))}
            </nav>
        </div>
    );
};

export default Sidebar;