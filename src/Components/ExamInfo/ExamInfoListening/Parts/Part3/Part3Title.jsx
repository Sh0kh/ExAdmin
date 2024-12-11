import React, { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { Button, Input } from "@material-tailwind/react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

export default function Part3Title() {
    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState(""); // Store user input
    const [savedText, setSavedText] = useState(null); // Store saved text

    const handleToggle = (index) => {
        setOpen(open === index ? null : index);
    };

    const handleSave = () => {
        if (inputValue.trim()) {
            setSavedText(inputValue); // Save the input value
            setInputValue(""); // Clear the input field
        }
    };

    return (
        <div className="">
            <Accordion open={open === 1} className="rounded-[10px] mb-[20px]">
                <AccordionHeader
                    onClick={() => handleToggle(1)}
                    className="bg-MainColor p-4 rounded-[10px] cursor-pointer"
                >
                    <div className="flex items-center justify-between w-full">
                        <h1 className="text-white">
                            {savedText ? (
                                'Sarlavha korish' 
                            ):(
                                'Sarlavha yaratish'
                            )}
                    
                        </h1>
                        {savedText && (
                            <div className="flex items-center gap-2">
                                {/* Edit Button */}
                                <button
                                    className="p-2 border-2 border-white text-MainColor bg-white rounded-[5px] hover:bg-transparent hover:text-white"
                                >
                                    <MdEdit fontSize={22} />
                                </button>
                                {/* Delete Button */}
                                <button
                                    className="p-2 border-2 border-white text-MainColor bg-white rounded-[5px] hover:bg-transparent hover:text-white"
                                >
                                    <MdDelete fontSize={22} />
                                </button>
                            </div>
                        )}
                    </div>
                </AccordionHeader>
                <AccordionBody className="bg-MainColor text-white p-4 rounded-[10px]">
                    {savedText ? (
                        // Display saved text
                        <div className="text-white text-lg">{savedText}</div>
                    ) : (
                        // Show input and button if no text is saved
                        <div>
                            <Input
                                label="Sarlavha"
                                color="white"
                                type="text"
                                required
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                className="border-[white] text-[white]"
                            />
                            <Button
                                className="mt-2 bg-[white] text-MainColor"
                                onClick={handleSave}
                            >
                                Saqlash
                            </Button>
                        </div>
                    )}
                </AccordionBody>
            </Accordion>
        </div>
    );
}
