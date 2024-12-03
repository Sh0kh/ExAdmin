import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import { Accordion, AccordionBody } from "@material-tailwind/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function ExamCard({ isOpenEditModal, isOpenDeleteModal }) {
    const [openAccordion, setOpenAccordion] = useState(false);

    const handleAccordionToggle = () => {
        setOpenAccordion(!openAccordion);
    };

    return (
        <div>
            <div className="Exam__Wrapper mt-[20px]">
                <div className="Exam__card text-[white] border-[2px] rounded-[10px] bg-MainColor p-[15px]  pb-[5px] shadow1 cursor-pointer">
                    <h1 className="text-[20px]">
                        Exam Name
                    </h1>
                    <div className="flex items-center justify-between gap-[10px] mt-[10px]">
                        <button
                            onClick={isOpenEditModal}
                            className="p-[8px] rounded-[10px] bg-[white] w-[100%] flex items-center justify-center duration-300 text-MainColor border-[white] border-[2px] hover:text-[white] hover:bg-transparent"
                        >
                            <MdEdit fontSize={20} />
                        </button>
                        <button
                            onClick={handleAccordionToggle}
                            className="p-[8px] rounded-[10px] bg-[white] w-[100%] flex items-center justify-center duration-300 text-MainColor border-[white] border-[2px] hover:text-[white] hover:bg-transparent"
                        >
                            <FaInfoCircle fontSize={20} />
                        </button>
                        <button
                            onClick={isOpenDeleteModal}
                            className="p-[8px] rounded-[10px] bg-[white] w-[100%] flex items-center justify-center duration-300 text-MainColor border-[white] border-[2px] hover:text-[white] hover:bg-transparent"
                        >
                            <MdDelete fontSize={20} />
                        </button>
                    </div>

                    {/* Аккордеон */}
                    <div className="mt-4">
                        <Accordion open={openAccordion}>
                            <AccordionBody className="">
                                <div className="flex items-center gap-[10px] justify-center flex-wrap">
                                    <NavLink to={'/exam/1/listening'}>
                                        <button className="bg-[white] text-MainColor px-[25px] border-[2px] rounded-[5px] font-bold duration-500 py-[5px] hover:bg-transparent hover:text-white">
                                            Listening
                                        </button>
                                    </NavLink>
                                    <NavLink to={'/exam/1/reading'}>
                                        <button className="bg-[white] text-MainColor px-[25px] border-[2px] rounded-[5px] font-bold duration-500 py-[5px] hover:bg-transparent hover:text-white">
                                            Reading
                                        </button>
                                    </NavLink>
                                    <NavLink to={'/exam/1/Speaking'}>
                                        <button className="bg-[white] text-MainColor px-[25px] border-[2px] rounded-[5px] font-bold duration-500 py-[5px] hover:bg-transparent hover:text-white">
                                            Speaking
                                        </button>
                                    </NavLink>
                                    <NavLink to={'/exam/1/writing'}>
                                        <button className="bg-[white] text-MainColor px-[28px] border-[2px] rounded-[5px] font-bold duration-500 py-[5px] hover:bg-transparent hover:text-white">
                                            Writing
                                        </button>
                                    </NavLink>
                                </div>
                            </AccordionBody>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
}
