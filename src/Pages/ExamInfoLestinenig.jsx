import axios from "axios";
import ExamInfoListeningAudio from "../Components/ExamInfo/ExamInfoListening/ExamInfoListeningAudio";
import ExamInfoListeningHeader from "../Components/ExamInfo/ExamInfoListening/ExamInfoListeningHeader";
import ExamInfoListeningTable from "../Components/ExamInfo/ExamInfoListening/ExamInfoListeningTable";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";
import { useEffect, useState } from "react";

export default function ExamInfoLestinenig() {
    const { id } = useParams(); // Получаем id из пути
    const [data, setData] = useState([])
    const [audio, setAudio] = useState(null)
    const [loading, setLoading] = useState(true)

    const getLisyeningParts = async () => {
        try {
            const response = await axios.get(`/sections/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            setData(response?.data?.parts)
            setAudio(response?.data?.audio_path)
        } catch (error) {
            console.log(error)
        }finally{
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
        <div className="ExamInfoListening p-[15px]">
            <ExamInfoListeningHeader />
            <ExamInfoListeningTable data={data} />
            <ExamInfoListeningAudio data={audio}/>
        </div>
    )
}