import { useState } from "react";
import AdminsCreate from "../Components/Admins/AdminsCreate";
import AdminsTable from "../Components/Admins/AdminsTable";
import AdminsEdit from "../Components/Admins/AdminsEdit";

export default function Admins() {

    const [CreateModal, setCreateModal] = useState(false)
    const [EditModal, setEditModal] = useState(false)
    const [EditModalData, setEditModalData] = useState([]);

    return (
        <div className="Admins p-[15px]">
            <div className="Header__wrapper">
                <h1 className="text-MainColor text-[32px] font-[700]">
                    Ustozlar
                </h1>
                <button onClick={() => setCreateModal(true)} className="bg-MainColor text-[white] rounded-[10px] p-[10px] border-[2px] border-MainColor duration-500 px-[20px] hover:text-MainColor hover:bg-[white]">
                    Yaratish
                </button>
            </div>
            <div>
                <AdminsTable setEditModalData={setEditModalData} setEditModal={setEditModal} />
            </div>
            <AdminsCreate isOpen={CreateModal} onClose={() => setCreateModal(false)} />
            <AdminsEdit data={EditModalData} isOpen={EditModal} onClose={() => setEditModal(false)} />
        </div>
    )
}