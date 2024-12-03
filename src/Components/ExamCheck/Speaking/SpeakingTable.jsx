import { Card, CardBody } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";



export default function SpeakingTable() {
    const tableData = [
        { id: 1, name: "1", score: "Book 1", type: 'John Doe', Link: "10.12.2024" },
        { id: 2, name: "2", score: "Book 2", type: 'Soliev Alisher', Link: "07.12.2024" },
        { id: 3, name: "3", score: "book 3", type: 'Alijonov Kamol', Link: "25.12.2024" },
        { id: 4, name: "4", score: "Book 4", type: 'Sultonov Jamshid', Link: "07.12.2024" },
        { id: 5, name: "5", score: "Book 5", type: 'Akbarov Dilmurod', Link: "10.12.2024" },
    ];

    return (
        <Card className="mt-6 shadow-none p-0">
            <CardBody className="p-0">
                <div className="overflow-x-auto px-4">
                    <table className="min-w-full table-auto border-separate border-spacing-y-4">
                        <thead>
                            <tr className="bg-gray-200 text-gray-700">
                                <th className="px-4 py-2 text-left font-semibold rounded-l-xl w-[20px]">№</th>
                                <th className="px-4 py-2 text-center font-semibold">Ism</th>
                                <th className="px-4 py-2 text-center font-semibold">Imtihon nomi </th>
                                <th className="px-4 py-2 text-center font-semibold">Vaqt </th>
                                <th className="px-4 py-2 text-right font-semibold rounded-r-lg"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row) => (
                                <tr
                                    key={row.id}
                                    className="bg-MainColor text-white shadow-md"
                                >
                                    <td className="px-4 py-3 font-semibold rounded-l-xl shadow-md">{row.name}</td>
                                    <td className="px-4 py-3 text-center">{row.type}</td>
                                    <td className="px-4 py-3 text-center">{row.score}</td>
                                    <td className="px-4 py-3 text-center">{row.Link}</td>
                                    <td
                                        className={`px-4 py-3 text-right rounded-r-lg shadow-md`}
                                    >
                                        <NavLink to={'/spaeking/check/person'}>
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
