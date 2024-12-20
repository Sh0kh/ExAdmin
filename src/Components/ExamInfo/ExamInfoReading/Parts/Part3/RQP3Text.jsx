
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react"; // Import Material Tailwind Accordion components
import React from "react";

export default function RQP3Text({ editModal, deleteModal }) {




    const [open, setOpen] = React.useState(false); // Use boolean state to track if the accordion is open

    const handleToggle = (index) => {
        setOpen(open === index ? null : index); // Toggle accordion state based on index
    };

    const questions = [
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, voluptatum totam? Pariatur, et non? Alias ad accusamus, illum quia delectus vel, necessitatibus veniam voluptatibus quidem reiciendis velit, doloribus sunt rerum.",
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, voluptatum totam? Pariatur, et non? Alias ad accusamus, illum quia delectus vel, necessitatibus veniam voluptatibus quidem reiciendis velit, doloribus sunt rerum.",
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, voluptatum totam? Pariatur, et non? Alias ad accusamus, illum quia delectus vel, necessitatibus veniam voluptatibus quidem reiciendis velit, doloribus sunt rerum.",
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, voluptatum totam? Pariatur, et non? Alias ad accusamus, illum quia delectus vel, necessitatibus veniam voluptatibus quidem reiciendis velit, doloribus sunt rerum.",
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, voluptatum totam? Pariatur, et non? Alias ad accusamus, illum quia delectus vel, necessitatibus veniam voluptatibus quidem reiciendis velit, doloribus sunt rerum.",
    ];

    return (
        <div className="flex items-start justify-start gap-[15px] flex-col">
            {questions.map((question, index) => (
                <Accordion key={index} open={open === index} className="rounded-[10px]">
                    <AccordionHeader
                        onClick={() => handleToggle(index)} // Toggle on header click for each question
                        className="bg-MainColor p-4 rounded-[10px] cursor-pointer"
                    >
                        <div className="flex items-center justify-between w-full">
                            <h1 className="text-white">Paragraph {index + 1}</h1>
                            <div className="flex items-center gap-2">
                                {/* Edit Button */}
                                <button

                                    className="p-2 border-2 border-white text-MainColor bg-white rounded-[5px] hover:bg-transparent hover:text-white"
                                    onClick={(e) => { e.stopPropagation(); EditModal(); }}
                                >
                                    <MdEdit fontSize={22} />
                                </button>
                                {/* Delete Button */}
                                <button
                                    className="p-2 border-2 border-white text-MainColor bg-white rounded-[5px] hover:bg-transparent hover:text-white"
                                    onClick={(e) => { e.stopPropagation(); DeleteModal(); }}
                                >
                                    <MdDelete fontSize={22} />
                                </button>
                            </div>
                        </div>
                    </AccordionHeader>
                    <AccordionBody className="bg-MainColor text-white p-4 rounded-[10px]">
                        <div>
                            <h2>{question}</h2>
                            <div className="flex items-start gap-[10px] flex-col mt-[10px]">
                                <div className="w-full">
                                    <div className="flex items-end gap-[5px] text-[#54f054]">
                                        <span className="font-bold">A</span>
                                    
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="flex items-end gap-[5px]">
                                        <span className="font-bold">B</span>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="flex items-end gap-[5px]">
                                        <span className="font-bold">C</span>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="flex items-end gap-[5px]">
                                        <span className="font-bold">D</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AccordionBody>
                </Accordion>
            ))}
        </div>
    )
}