import axios from "axios";
import ExamInfoListeningAudio from "../Components/ExamInfo/ExamInfoListening/ExamInfoListeningAudio";
import ExamInfoListeningHeader from "../Components/ExamInfo/ExamInfoListening/ExamInfoListeningHeader";
import ExamInfoListeningTable from "../Components/ExamInfo/ExamInfoListening/ExamInfoListeningTable";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ExamInfoLestinenig() {
    const { id } = useParams(); // Получаем id из пути
    const [data, setData] = useState([])

    const getLisyeningParts = async () => {
        try {
            const response = await axios.get(`/sections/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            setData(response?.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getLisyeningParts()
    }, [])

    return (
        <div className="ExamInfoListening p-[15px]">
            <ExamInfoListeningHeader />
            <ExamInfoListeningTable data={data}/>
            <ExamInfoListeningAudio />
        </div>
    )
}