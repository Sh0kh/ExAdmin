import React from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react"; // Import Material Tailwind Accordion components

export default function SQP3Questions({ EditModal, DeleteModal }) {
    const [open, setOpen] = React.useState(false); // Use boolean state to track if the accordion is open

    const handleToggle = (index) => {
        setOpen(open === index ? null : index); // Toggle accordion state based on index
    };

    const questions = [
        "Why isn't Alex allowed to go to school?",
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
                            <h1 className="text-white">Question </h1>
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
                        </div>
                    </AccordionBody>
                </Accordion>
            ))}
        </div>
    );
}
