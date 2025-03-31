import { Card, CardBody } from "@material-tailwind/react";
import { NavLink, useParams } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { $api } from "../utils/axios";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";


export default function UncheckedExamInfo() {
    const { ID } = useParams()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await $api.post(`/teacher/unchecked-exam`, { exam_id: ID },)
            setData(response?.data)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [ID])


    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen w-full">
                <ReactLoading type="spinningBubbles" color="#000" height={100} width={100} />
            </div>
        );
    }

    return (
        <div className="ExamCheck p-[15px]">
            <div className="Header__wrapper">
                <h1 className="text-MainColor text-[32px] font-[700]">
                    {data?.user_name} - imtihoni
                </h1>
            </div>
            {data?.section_scores?.length > 0 ? (
                <Card className="mt-6 shadow-none p-0">
                    <CardBody className="p-0">
                        <div className="overflow-x-auto px-4">
                            <table className="min-w-full table-auto border-separate border-spacing-y-4">
                                <thead>
                                    <tr className="bg-gray-200 text-gray-700">
                                        <th className="px-4 py-2 text-left font-semibold rounded-l-xl w-[20px]">№</th>
                                        <th className="px-4 py-2 text-center font-semibold">Im</th>
                                        <th className="px-4 py-2 text-center font-semibold">Imtihon nomi </th>
                                        <th className="px-4 py-2 text-center font-semibold">Vaqt </th>
                                        <th className="px-4 py-2 text-right font-semibold rounded-r-lg"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.section_scores
                                        ?.filter(row => row?.section?.type !== "listening" && row?.section?.type !== "reading") // Фильтрация
                                        ?.map((row, index) => (
                                            <tr
                                                key={row.id}
                                                className="bg-MainColor text-white shadow-md"
                                            >
                                                <td className="px-4 py-3 font-semibold rounded-l-xl shadow-md">{index + 1}</td>
                                                <td className="px-4 py-3 text-center">{row?.user_name}</td>
                                                <td className="px-4 py-3 text-center">{row?.section?.name}</td>
                                                <td className="px-4 py-3 text-center">{row?.start_time} --- {row?.end_time}</td>
                                                <td
                                                    className={`px-4 py-3 text-right rounded-r-lg shadow-md`}
                                                >
                                                    <NavLink to={`/uncheckend/exam/${row?.exam_id}/${row?.id}`}>
                                                        <button className="text-MainColor bg-[white] border-[white] duration-300 rounded-[5px] p-[5px] border-[2px] hover:bg-transparent hover:text-white">
                                                            <IoEyeSharp fontSize={22} />
                                                        </button>
                                                    </NavLink>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </CardBody>
                </Card>
            ) : (
                <div className="flex items-center justify-center min-h-[600px]">
                    <h1 className="text-[25px] font-bold">
                        Ma'lumot yo‘q
                    </h1>
                </div>
            )}
        </div>
    )
}