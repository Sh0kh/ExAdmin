import { useState, useEffect } from "react";
import ExamCard from "../Components/Exam/ExamCommponents/ExamCard";
import ExamHeader from "../Components/Exam/ExamCommponents/ExamHeader";
import ExamCreate from "../Components/Exam/ExamModal/ExamCreate";
import ExamEdit from "../Components/Exam/ExamModal/ExamEdit";
import ExamDelete from "../Components/Exam/ExamModal/ExamDelete";
import ReactLoading from "react-loading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Exam() {
    // Состояния для модалок
    const [CreateModal, setCreateModal] = useState(false);
    const [EditModal, setEditModal] = useState(false);
    const [DeleteModal, setDeleteModal] = useState(false);
    const navigate = useNavigate()

    // Состояние для хранения ID элемента
    const [selectedId, setSelectedId] = useState(null);

    // Состояние для данных и загрузки
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getExams = async () => {
        try {
            const response = await axios.get("/exams", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            setData(response?.data);
        } catch (error) {
            console.log(error);
            if (error?.response?.status === 401) {
                navigate('/login')
                localStorage.clear()
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getExams();
    }, []);

    // Функции для открытия модалок с сохранением ID
    const handleEditModalOpen = (data) => {
        setSelectedId(data);
        setEditModal(true);
    };

    const handleDeleteModalOpen = (id) => {
        setSelectedId(id);
        setDeleteModal(true);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen w-full">
                <ReactLoading type="spinningBubbles" color="#000" height={100} width={100} />
            </div>
        );
    }

    return (
        <div className="Exam w-full p-[15px]">
            <ExamHeader isOpen={() => setCreateModal(true)} />
            {data && data?.length > 0 ? (
                <ExamCard
                    isOpenEditModal={handleEditModalOpen}
                    isOpenDeleteModal={handleDeleteModalOpen}
                    data={data}
                />
            ) : (
                <div className="flex items-center justify-center h-screen ">
                    <h1>Bo`sh</h1>
                </div>
            )}
            {/* Модалки */}
            <ExamCreate refresh={getExams} isOpen={CreateModal} onClose={() => setCreateModal(false)} />
            <ExamEdit refresh={getExams} isOpen={EditModal} onClose={() => setEditModal(false)} data={selectedId} />
            <ExamDelete refresh={getExams} isOpen={DeleteModal} onClose={() => setDeleteModal(false)} id={selectedId} />
        </div>
    );
}
