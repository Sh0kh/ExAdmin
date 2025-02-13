import { useEffect, useState } from "react";

import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import ReactLoading from "react-loading";
import WritingText from "../WritingText";
import WritingCreate from "../WritingCreate";
import WritingEdit from "../WritingEdit";



export default function WritingPart2() {
    const [CreateModal, setCreateModal] = useState(false)
    const [EditData, setEditData] = useState(null)
    const [EditModal, setEditModal] = useState(false)
    const { id } = useParams()
    const [searchParams] = useSearchParams();
    const name = searchParams.get("name");
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)

    const getQuestion = async () => {
        try {
            const response = await axios.get(`/parts/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            setData({
                id: response?.data?.questions[0]?.id,
                question: response?.data?.questions[0]?.question
            });
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getQuestion()
    }, [])


    const handleEditModalOpen = (data) => {
        setEditModal(true);
        setEditData(data);
    };



    console.log(EditData);




    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen w-full">
                <ReactLoading type="spinningBubbles" color="#000" height={100} width={100} />
            </div>
        );
    }

    return (
        <div className="Exam w-full p-[15px]">
            <div className="Header__wrapper">
                <h1 className="text-MainColor text-[32px] font-[700]">
                    Imtihon ・ {name} ・ Reading ・ 2 qism
                </h1>
                <div className="flex items-center gap-[10px]">
                    {data === null && (
                        <button onClick={() => setCreateModal(true)} className="bg-MainColor text-[white] rounded-[10px] p-[10px] border-[2px] border-MainColor duration-500 px-[20px] hover:text-MainColor hover:bg-[white]">
                            Vazifa yaratish
                        </button>
                    )}
                </div>
            </div>
            <div className="mt-[20px]">
                {data === null ? (
                    <div className="w-full h-[404px] flex items-center justify-center ">
                        <h1 className="font-bold text-[25px]">
                            Bo`sh
                        </h1>
                    </div>
                ) : (
                    <WritingText data={data} editModal={handleEditModalOpen} />
                )}
            </div>
            <WritingCreate refresh={getQuestion} isOpen={CreateModal} onClose={() => setCreateModal(false)} />
            <WritingEdit data={EditData} refresh={getQuestion} isOpen={EditModal} onClose={() => setEditModal(false)} />
        </div>
    )
}