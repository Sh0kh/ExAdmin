import { useEffect, useState } from "react";
import { Button } from '@material-tailwind/react';
import ReactQuill from "react-quill";
import Swal from 'sweetalert2';
import 'react-quill/dist/quill.snow.css'; // или 'quill.bubble.css'
import { useParams } from "react-router-dom";
import axios from "axios";

export default function SQP3BadCreateModal({ data, isOpen, onClose }) {
    const { id } = useParams()
    const [BadText, setBadText] = useState();

    useEffect(() => {
        setBadText(data?.right_text)
    }, [])

    const updatePart = async () => {
        try {
            const formData = new FormData();
            formData.append('right_text', BadText);

            await axios.post(`/part-update/${id}`, formData, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
            onClose()
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
    };

    return (
        <>
            <div className={`Modal ${isOpen ? "open" : ""}`} onClick={onClose}>
                <div className={`Modal2Content ${isOpen ? "open" : ""}`} onClick={(e) => e.stopPropagation()}>
                    <div className='p-[10px] pb-[30px]'>
                        <div className='flex items-center justify-between pt-[10px] pb-[20px]'>
                            <h1 className='text-MainColor text-[20px]'>
                                Salbiy tomon
                            </h1>
                            <button onClick={onClose}>
                                <svg className='text-[#5E5C5A] text-[12px]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14">
                                    <path fill="currentColor" fillRule="evenodd" d="M1.707.293A1 1 0 0 0 .293 1.707L5.586 7L.293 12.293a1 1 0 1 0 1.414 1.414L7 8.414l5.293 5.293a1 1 0 0 0 1.414-1.414L8.414 7l5.293-5.293A1 1 0 0 0 12.293.293L7 5.586z" clipRule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                        <div>
                            <ReactQuill
                                value={BadText}
                                onChange={setBadText}
                                className="h-[300px]"
                                theme="snow"
                            />
                            <Button
                                onClick={updatePart}
                                fullWidth
                                color="white"
                                className="bg-MainColor mt-[80px] transition duration-500 border-MainColor border-[2px] text-white hover:bg-transparent hover:text-MainColor"
                            >
                                Saqlash
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
