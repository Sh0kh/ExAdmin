import React from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react"; // Import Material Tailwind Accordion components

export default function SQP3Questions({ data, EditModal, DeleteModal }) {
    const [open, setOpen] = React.useState(false); // Use boolean state to track if the accordion is open

    const handleToggle = (index) => {
        setOpen(open === 1 ? null : 1);
    };

    return (
        <div className="flex items-start justify-start gap-[15px] flex-col">
            <Accordion open={open === 1} className="rounded-[10px]">
                <AccordionHeader
                    onClick={() => handleToggle(1)} // Toggle on header click for each question
                    className="bg-MainColor p-4 rounded-[10px] cursor-pointer"
                >
                    <div className="flex items-center justify-between w-full">
                        <h1 className="text-white">Question </h1>
                        <div className="flex items-center gap-2">
                            <button

                                className="p-2 border-2 border-white text-MainColor bg-white rounded-[5px] hover:bg-transparent hover:text-white"
                                onClick={(e) => { e.stopPropagation(); EditModal(data?.questions[0]); }}
                            >
                                <MdEdit fontSize={22} />
                            </button>
                            <button
                                className="p-2 border-2 border-white text-MainColor bg-white rounded-[5px] hover:bg-transparent hover:text-white"
                                onClick={(e) => { e.stopPropagation(); DeleteModal(data?.questions?.[0]?.id); }}
                            >
                                <MdDelete fontSize={22} />
                            </button>
                        </div>
                    </div>
                </AccordionHeader>
                <AccordionBody className="bg-MainColor text-white p-4 rounded-[10px]">
                    <div>
                        <h2>{data?.questions[0]?.question}</h2>
                    </div>
                </AccordionBody>
            </Accordion>
        </div>
    );
}
