import { Card, CardBody, Typography } from "@material-tailwind/react";
import { IoEyeSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";


export default function ExamInfoWritingTable() {
    const tableData = [
        { id: 1, name: "1", score: "25", type: 'Matn yozish shaklida', Link: "part_1" },
        { id: 2, name: "2", score: "50", type: 'Rasm shaklida', Link: "part_1" },
    ];

    return (
        <Card className="mt-6 shadow-none p-0">
            <CardBody className="p-0">
                <Typography variant="h6" className="mb-4 px-4">
                    Exam Info writing Table
                </Typography>
                <div className="overflow-x-auto px-4">
                    <table className="min-w-full table-auto border-separate border-spacing-y-4">
                        <thead>
                            <tr className="bg-gray-200 text-gray-700">
                                <th className="px-4 py-2 text-left font-semibold rounded-l-xl">Qism</th>
                                <th className="px-4 py-2 text-center font-semibold">Max ball</th>
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
                                    <td
                                        className={`px-4 py-3 text-right rounded-r-lg shadow-md`}
                                    >
                                        <NavLink to={`/exam/1/writing/${row?.Link}`}>
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
