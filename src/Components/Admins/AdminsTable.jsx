import { Card, CardBody } from "@material-tailwind/react";
import { MdEdit } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { MdDelete } from "react-icons/md";



export default function AdminsTable({EditModal, DeleteModal}) {
    const tableData = [
        { id: 1, name: "1", score: "Alisher", type: '+998 97 020 6565', Link: "part_1" },
        { id: 2, name: "2", score: "Avaz", type: '+998 98 656 1212', Link: "part_2" },
        { id: 3, name: "3", score: "Bekzod", type: '+998 91 525 4545', Link: "part_3" },
    ];

    return (
        <Card className="mt-6 shadow-none p-0">
            <CardBody className="p-0">
                <div className="overflow-x-auto px-4">
                    <table className="min-w-full table-auto border-separate border-spacing-y-4">
                        <thead>
                            <tr className="bg-gray-200 text-gray-700">
                                <th className="px-4 py-2 text-left font-semibold rounded-l-xl">№</th>
                                <th className="px-4 py-2 text-center font-semibold">Ismi</th>
                                <th className="px-4 py-2 text-center font-semibold">Telefon</th>
                                <th className="px-4 py-2 text-right font-semibold rounded-r-lg">Sozlamalar</th>
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
                                        <div className="flex items-center justify-end gap-[10px]">
                                            <button onClick={EditModal} className="text-MainColor bg-[white] border-[white] duration-300 rounded-[5px] p-[5px] border-[2px] hover:bg-transparent hover:text-white">
                                                <MdEdit fontSize={22} />
                                            </button>
                                            <button onClick={DeleteModal} className="text-MainColor bg-[white] border-[white] duration-300 rounded-[5px] p-[5px] border-[2px] hover:bg-transparent hover:text-white">
                                                <MdDelete fontSize={22} />
                                            </button>
                                        </div>
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
