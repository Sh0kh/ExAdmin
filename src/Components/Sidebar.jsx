import React, { useState } from 'react';
import { IoPeople } from "react-icons/io5";
import { FaNoteSticky } from "react-icons/fa6";
import logo from '../Imagse/Examify_Dark.jpg'
import { AiFillHome } from "react-icons/ai";
import { NavLink, useLocation } from 'react-router-dom';
import { IoPeopleSharp } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { MdPayments } from "react-icons/md";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaAddressBook } from "react-icons/fa";





const Sidebar = () => {
    const isActive = useSelector((state) => state.state.isActive);
    const location = useLocation()


    const Home = location.pathname === '/'
    const Exam = location.pathname === '/exam'
    const Admins = location.pathname === '/admins'
    const Payment = location.pathname === '/payment'
    const Reyting = location.pathname === '/reyting'

    const [open, setOpen] = useState(null);

    const handleOpen = (value) => {
        setOpen(open === value ? null : value);
    };


    return (
        <div
            class={`${!isActive ? 'SidebarOpen' : 'SidebarClose'} Sidebar`}>
            <div class="pt-[10px] cursor-pointer px-3 mb-1">
                <img className='w-[180px]' src={logo} alt="foto" />
            </div>
            <div className='w-full bg-[white] h-[1px]'>
            </div>
            <nav class="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-white  text-[22px]">
                <NavLink to={'/'}>
                    <div role="button"
                        class={`flex items-center gap-[20px] w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 ${Home ? "bg-blue-gray-50 bg-opacity-80 text-blue-gray-900" : ''}`}>
                        <AiFillHome fontSize={30} />
                        Bosh
                    </div>
                </NavLink>
                <NavLink to={'/exam'}>
                    <div role="button"
                        class={`flex items-center gap-[20px] w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 ${Exam ? "bg-blue-gray-50 bg-opacity-80 text-blue-gray-900" : ''}`}>
                        <FaNoteSticky fontSize={30} />
                        Imtihonlar
                    </div>
                </NavLink>
                <NavLink to={'/admins'}>
                    <div role="button"
                        class={`flex items-center gap-[20px] w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 ${Admins ? "bg-blue-gray-50 bg-opacity-80 text-blue-gray-900" : ''}`}>
                        <IoPeopleSharp fontSize={30} />
                        Ustozlar
                    </div>
                </NavLink>
                <NavLink to={'/payments'}>
                    <div role="button"
                        class={`flex items-center gap-[20px] w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 ${Payment ? "bg-blue-gray-50 bg-opacity-80 text-blue-gray-900" : ''}`}>
                        <MdPayments fontSize={30} />
                        Tolovlar
                    </div>
                </NavLink>
                <NavLink to={'/reyting'}>
                    <div role="button"
                        class={`flex items-center gap-[20px] w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 ${Reyting ? "bg-blue-gray-50 bg-opacity-80 text-blue-gray-900" : ''}`}>
                        <IoPeople fontSize={30} />
                        Reyting
                    </div>
                </NavLink>
                <Accordion open={open === 1} className='w-full'>
                    <AccordionHeader className='border-none text-[white] w-full p-[0px]' onClick={() => handleOpen(1)}>
                        <div role="button"
                            class={`flex items-center justify-between gap-[20px]  font-normal text-[16px] w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 ${Payment ? "bg-blue-gray-50 bg-opacity-80 text-blue-gray-900" : ''}`}>
                            <div className='flex items-center gap-[20px]'>
                                <FaAddressBook fontSize={30} />
                                Test
                            </div>
                            {open === 1 ? (
                                <FiChevronUp className="h-5 w-5" />
                            ) : (
                                <FiChevronDown className="h-5 w-5" />
                            )}
                        </div>
                    </AccordionHeader>
                    <AccordionBody className={`p-[0px] pb-[10px] border-b-[1px] w-full`}>
                        <NavLink to={'/writing/check'}>
                            <div role="button"
                                class={`flex items-center text-[white] gap-[20px] w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 ${Payment ? "bg-blue-gray-50 bg-opacity-80 text-blue-gray-900" : ''}`}>
                                <svg className='text-[30px]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1q-.15.15-.15.36M20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75z"></path></svg>
                                Writing
                            </div>
                        </NavLink>
                        <NavLink to={'/speaking/check'}>
                            <div role="button"
                                class={`flex  items-center  text-[white] gap-[20px] w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 ${Payment ? "bg-blue-gray-50 bg-opacity-80 text-blue-gray-900" : ''}`}>
                                <svg className='text-[30px]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth={1.5}><rect width={6} height={12} x={9} y={2} fill="currentColor" rx={3}></rect><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v2M1 2v4m18-3v2m4-3v4M5 10v1a7 7 0 0 0 7 7v0a7 7 0 0 0 7-7v-1m-7 8v4m0 0H9m3 0h3"></path></g></svg>
                                Speaking
                            </div>
                        </NavLink>
                    </AccordionBody>
                </Accordion>
            </nav>
        </div>
    );
};

export default Sidebar;
