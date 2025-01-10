import ExamInfoReadingHeader from "../Components/ExamInfo/ExamInfoReading/ExamInfoReadingHeader";
import ExamInfoReadingTable from "../Components/ExamInfo/ExamInfoReading/ExamInfoReadingTable";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ExamInfoReading() {

    const { id } = useParams(); // Получаем id из пути
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const getLisyeningParts = async () => {
        try {
            const response = await axios.get(`/sections/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            setData(response?.data?.parts)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getLisyeningParts()
    }, [])

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen w-full">
                <ReactLoading type="spinningBubbles" color="#000" height={100} width={100} />
            </div>
        );
    }



    return (
        <div className="Exam p-[15px]">
            <ExamInfoReadingHeader />
            <ExamInfoReadingTable data={data} />
        </div>
    )
}