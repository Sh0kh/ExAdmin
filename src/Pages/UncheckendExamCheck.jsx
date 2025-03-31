import { useParams } from "react-router-dom"
import { $api } from "../utils/axios"
import { useEffect, useState } from "react"
import UncheckedSpiking from "../Components/UncheckedExam/UncheckedSpiking"
import UncheckedWriting from "../Components/UncheckedExam/UncheckedWriting"
import ReactLoading from "react-loading";
import CheckExamModal from "../Components/UncheckedExam/CheckExamModal"


export default function UncheckendExamCheck() {

    const { ExamID, SectionID } = useParams()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [checkModal, setCheckModal] = useState(false)
    const fetchData = async () => {
        setLoading(true)
        try {
            const data = {
                exam_id: ExamID,
                section_score_id: SectionID
            }
            const response = await $api.post('/teacher/user-answers', data)
            setData(response?.data)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [ExamID, SectionID])


    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen w-full">
                <ReactLoading type="spinningBubbles" color="#000" height={100} width={100} />
            </div>
        );
    }
    return (
        <div className="p-[15px]">
            <div className="Header__wrapper">
                <h1 className="text-MainColor text-[32px] font-[700]">
                    {data?.section?.name}
                </h1>
                {data?.section?.type === 'speaking' || data?.section?.type === 'writing' ? (
                    <button onClick={()=>setCheckModal(true)} className="bg-MainColor text-[white] rounded-[10px] p-[10px] border-[2px] border-MainColor duration-500 px-[20px] hover:text-MainColor hover:bg-[white]">
                        Baholash
                    </button>
                ) : ('')}
            </div>
            <div className="mt-[10px]">
                {data?.section?.type === 'speaking' ? (
                    <UncheckedSpiking data={data} />
                ) : data?.section?.type === 'writing' ? (
                    <UncheckedWriting data={data} />
                ) : (
                    <div className="min-h-[600px] flex items-center justify-center">
                        <h1 className="font-bold text-[25px]">
                            Hatolik yuz berdi
                        </h1>
                    </div>
                )}
            </div>
            <CheckExamModal data={data} isOpen={checkModal} onClose={()=>setCheckModal(false)}/>
        </div>
    )
}