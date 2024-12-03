import { Card, CardBody, Typography } from "@material-tailwind/react";
import { IoEyeSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";


export default function ExamInfoListeningTable() {
    const tableData = [
        { id: 1, name: "1", score: "1-8", type: 'Test shaklida', Link: "part_1" },
        { id: 2, name: "2", score: "9-14", type: 'Matn yozish shaklida', Link: "part_2" },
        { id: 3, name: "3", score: "15-18", type: 'Nima haqda gapirganini tanlash shaklida', Link: "part_3" },
        { id: 4, name: "4", score: "19-23", type: 'Xarita shaklida', Link: "part_4" },
        { id: 5, name: "5", score: "24-29", type: 'Test shaklida', Link: "part_5" },
        { id: 6, name: "6", score: "30-35", type: 'Savollarga javob shaklida', Link: "part_6" },
    ];

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
                            {tableData.map((row) => (
                                <tr
                                    key={row.id}
                                    className="bg-MainColor text-white shadow-md"
                                >
                                    <td className="px-4 py-3 font-semibold rounded-l-xl shadow-md">{row.name}</td>
                                    <td className="px-4 py-3 text-center">{row.score}</td>
                                    <td className="px-4 py-3 text-center">{row.type}</td>
                                    <td
                                        className={`px-4 py-3 text-right rounded-r-lg shadow-md`}
                                    >
                                        <NavLink to={`/exam/1/listening/${row?.Link}`}>
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
