// Привет добро пожаловать на Page Exam
import { useState } from "react";
import ExamCard from "../Components/Exam/ExamCommponents/ExamCard";
import ExamHeader from "../Components/Exam/ExamCommponents/ExamHeader";
import ExamCreate from "../Components/Exam/ExamModal/ExamCreate";
import ExamEdit from "../Components/Exam/ExamModal/ExamEdit";
import ExamDelete from "../Components/Exam/ExamModal/ExamDelete";



export default function Exam() {
    //Начало Modal useState
        const [CreateModal, setCreateModal] = useState(false)
        const [EditModal, setEditModal] = useState(false)
        const [DeleteModal, setDeleteModal] = useState(false)
    //Конец Modal useState
    console.log(EditModal)
    return (
        <div className="Exam w-full p-[15px]">
            <ExamHeader isOpen={()=>setCreateModal(true)}/>
            <ExamCard isOpenEditModal={()=>setEditModal(true)} isOpenDeleteModal={()=>setDeleteModal(true)}/>

            {/*Начинается Модалы */}
            <ExamCreate isOpen={CreateModal} onClose={()=>setCreateModal(false)}/>
            <ExamEdit isOpen={EditModal} onClose={()=>setEditModal(false)}/>
            <ExamDelete isOpen={DeleteModal} onClose={()=>setDeleteModal(false)}/>
            {/* Конеч Модалы */}
        </div>
    )
}