import { FaPhoneAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import EditModal from "../Components/Profile/EditModal";
import { useState } from "react";


export default function Profile() {
    const [editModal, setEditModal] = useState(false)

    const Foto = 'https://ias.gov.uz/static/uploads/8d185ff8-6b4e-4aa1-ba00-26daf1696462.png'

    return (
        <div className="Profile p-[15px]">
            <div className="relative p-[20px] rounded-[10px] bg-MainColor w-[500px] text-[white] text-center">
                <div className="flex items-center justify-center">
                    <div className="bg-[white] w-[140px] cursor-pointer rounded-[50%]">
                        <img className="w-full h-[100%] rounded-[50%]" src={Foto} alt="foto" />
                    </div>
                </div>
                <h1 className="text-[25px] mt-[15px]">
                    John Doe
                </h1>
                <h2 className="text-[20px] mt-[10px]">
                    CEO
                </h2>
                <div className="flex items-center justify-center mt-[10px] gap-[10px]">
                    <FaPhoneAlt fontSize={25} />
                    <span>
                        +998 97 020 6969
                    </span>
                </div>
                <div onClick={()=>setEditModal(true)} className="absolute top-[10px] border-[2px] border-[white] p-[8px] rounded-[50%] text-[22px] right-[10px] z-40 text-[white] duration-500 hover:text-MainColor hover:bg-[white] cursor-pointer  ">
                    <MdEdit />
                </div>
            </div>
            <EditModal isOpen={editModal} onClose={()=>setEditModal(false)}/>
        </div>
    )
}