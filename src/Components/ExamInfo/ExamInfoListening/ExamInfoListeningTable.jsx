import { Card, CardBody, Typography } from "@material-tailwind/react";
import { IoEyeSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useSearchParams } from "react-router-dom";




export default function ExamInfoListeningTable({ data }) {

    const [searchParams] = useSearchParams();
    const name = searchParams.get("name");

    if (!Array.isArray(data)) {
        return (
            <div className="h-screen">
                <h1>
                    Not found !
                </h1>
            </div>
        );
    }


    return (
        <Card className="mt-6 shadow-none p-0">
            <CardBody className="p-0">
                <Typography variant="h6" className="mb-4 px-4">
                    Exam Info Listening Table
                </Typography>
                <div className="overflow-x-auto px-4">
                    <table className="min-w-full table-auto border-separate border-spacing-y-4">
                        <thead>
                            <tr className="bg-gray-200 text-gray-700">
                                <th className="px-4 py-2 text-left font-semibold rounded-l-xl">Qism</th>
                                <th className="px-4 py-2 text-center font-semibold">Savol</th>
                                <th className="px-4 py-2 text-center font-semibold">Savol turi</th>
                                <th className="px-4 py-2 text-right font-semibold rounded-r-lg">Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, index) => (
                                <tr
                                    key={row.id}
                                    className="bg-MainColor text-white shadow-md"
                                >
                                    <td className="px-4 py-3 font-semibold rounded-l-xl shadow-md">{index + 1}</td>
                                    <td className="px-4 py-3 text-center">{row.question_count}</td>
                                    <td className="px-4 py-3 text-center">{row.question_type}</td>
                                    <td
                                        className={`px-4 py-3 text-right rounded-r-lg shadow-md`}
                                    >
                                        <NavLink to={`/exam/listening/part/${index + 1}/${row?.id}?name=${name}`}>
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
    );
}
