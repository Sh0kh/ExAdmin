import { Card, CardBody } from "@material-tailwind/react";

export default function ReytingTable() {
    const tableData = [
        { id: 1, name: "1", type: 'John Doe', ball: 85, speaking: 20, writing: 15, listening: 25, reading: 20, overall: 80, link: "10.12.2024" },
        { id: 2, name: "2", type: 'Soliev Alisher', ball: 75, speaking: 18, writing: 17, listening: 20, reading: 20, overall: 75, link: "07.12.2024" },
        { id: 3, name: "3", type: 'Alijonov Kamol', ball: 70, speaking: 15, writing: 20, listening: 20, reading: 15, overall: 70, link: "25.12.2024" },
        { id: 4, name: "4", type: 'Sultonov Jamshid', ball: 80, speaking: 19, writing: 21, listening: 20, reading: 20, overall: 80, link: "07.12.2024" },
        { id: 5, name: "5", type: 'Akbarov Dilmurod', ball: 65, speaking: 14, writing: 15, listening: 20, reading: 16, overall: 65, link: "10.12.2024" },
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
                                <th className="px-4 py-2 text-center font-semibold">Speaking</th>
                                <th className="px-4 py-2 text-center font-semibold">Writing</th>
                                <th className="px-4 py-2 text-center font-semibold">Listening</th>
                                <th className="px-4 py-2 text-center font-semibold">Reading</th>
                                <th className="px-4 py-2 text-center font-semibold">Overall</th>
                                <th className="px-4 py-2 text-right font-semibold rounded-r-lg">Vaqt</th>
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
                                    <td className="px-4 py-3 text-center">{row.speaking}</td>
                                    <td className="px-4 py-3 text-center">{row.writing}</td>
                                    <td className="px-4 py-3 text-center">{row.listening}</td>
                                    <td className="px-4 py-3 text-center">{row.reading}</td>
                                    <td className="px-4 py-3 text-center">{row.overall}</td>
                                    <td
                                        className={`px-4 py-3 text-right rounded-r-lg shadow-md`}
                                    >
                                        {row.link}
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
