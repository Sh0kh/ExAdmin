import React, { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { Button, Input } from "@material-tailwind/react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import Swal from 'sweetalert2';
import axios from "axios";
import { useParams } from "react-router-dom";


export default function PartTitle({ data }) {
    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState(data); // Store user input
    const [savedText, setSavedText] = useState(null); // Store saved text
    const { id } = useParams()
    const handleToggle = (index) => {
        setOpen(open === index ? null : index);
    };


    const updatePart = async () => {
        try {
            const formData = new FormData();
            formData.append('description', inputValue);

            await axios.post(`/part-update/${id}`, formData, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'multipart/form-data',  // Specify content type for FormData
                },
            });
            handleToggle()
            Swal.fire({
                title: 'Muvaffaqiyatli!',
                icon: 'success',
                position: 'top-end',
                timer: 3000,
                timerProgressBar: true,
                showCloseButton: true,
                toast: true,
                showConfirmButton: false,
            });
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: error.response?.data?.message || 'Error.',
                icon: 'error',
                position: 'top-end',
                timer: 3000,
                timerProgressBar: true,
                showCloseButton: true,
                toast: true,
                showConfirmButton: false,
            });
        }
    }



    return (
        <div className="">
            <Accordion open={open === 1} className="rounded-[10px] mb-[20px]">
                <AccordionHeader
                    onClick={() => handleToggle(1)}
                    className="bg-MainColor p-4 rounded-[10px] cursor-pointer"
                >
                    <div className="flex items-center justify-between w-full">
                        <h1 className="text-white">
                            Sarlavha
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
                                onClick={updatePart}
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
