import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import { Accordion, AccordionBody } from "@material-tailwind/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function ExamCard({ isOpenEditModal, isOpenDeleteModal, data }) {
    const [openAccordion, setOpenAccordion] = useState(null); 

    const handleAccordionToggle = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <div>
            <div className="Exam__Wrapper mt-[20px]">
                {data?.map((i, index) => (
                    <div
                        key={index}
                        className="Exam__card h-fit text-[white] border-[2px] rounded-[10px] bg-MainColor p-[15px] pb-[5px] shadow1 cursor-pointer"
                    >
                        <h1 className="text-[20px]">{i?.name}</h1>
                        <div className="flex items-center justify-between gap-[10px] mt-[10px]">
                            <button
                                onClick={() => isOpenEditModal(i)} // Передает id для удаления
                                className="p-[8px] rounded-[10px] bg-[white] w-[100%] flex items-center justify-center duration-300 text-MainColor border-[white] border-[2px] hover:text-[white] hover:bg-transparent"
                            >
                                <MdEdit fontSize={20} />
                            </button>
                            <button
                                onClick={() => handleAccordionToggle(index)}
                                className="p-[8px] rounded-[10px] bg-[white] w-[100%] flex items-center justify-center duration-300 text-MainColor border-[white] border-[2px] hover:text-[white] hover:bg-transparent"
                            >
                                <FaInfoCircle fontSize={20} />
                            </button>
                            <button
                                onClick={() => isOpenDeleteModal(i.id)} // Передает id для удаления
                                className="p-[8px] rounded-[10px] bg-[white] w-[100%] flex items-center justify-center duration-300 text-MainColor border-[white] border-[2px] hover:text-[white] hover:bg-transparent"
                            >
                                <MdDelete fontSize={20} />
                            </button>
                        </div>

                        {/* Аккордеон */}
                        <div className="mt-4">
                            <Accordion open={openAccordion === index}>
                                <AccordionBody>
                                    <div className="flex items-center gap-[10px] justify-center flex-wrap">
                                        <NavLink to={`/exam/1/${i?.sections[0]?.id}?name=${encodeURIComponent(i?.name)}`}                                        >
                                            <button className="bg-[white] text-MainColor px-[25px] border-[2px] rounded-[5px] font-bold duration-500 py-[5px] hover:bg-transparent hover:text-white">
                                                {i?.sections[0]?.name}
                                            </button>
                                        </NavLink>
                                        <NavLink to={"/exam/1/reading"}>
                                            <button className="bg-[white] text-MainColor px-[25px] border-[2px] rounded-[5px] font-bold duration-500 py-[5px] hover:bg-transparent hover:text-white">
                                                {i?.sections[1]?.name}
                                            </button>
                                        </NavLink>
                                        <NavLink to={"/exam/1/Speaking"}>
                                            <button className="bg-[white] text-MainColor px-[25px] border-[2px] rounded-[5px] font-bold duration-500 py-[5px] hover:bg-transparent hover:text-white">
                                                {i?.sections[3]?.name}
                                            </button>
                                        </NavLink>
                                        <NavLink to={"/exam/1/writing"}>
                                            <button className="bg-[white] text-MainColor px-[28px] border-[2px] rounded-[5px] font-bold duration-500 py-[5px] hover:bg-transparent hover:text-white">
                                                {i?.sections[2]?.name}
                                            </button>
                                        </NavLink>
                                    </div>
                                </AccordionBody>
                            </Accordion>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
