import { Card, CardBody } from "@material-tailwind/react";


export default function PaymentTable() {
    const tableData = [
        { id: 1, name: "1", score: "40 000", type: 'John Doe', Link: "10.12.2024" },
        { id: 2, name: "2", score: "60 000", type: 'Soliev Alisher', Link: "07.12.2024" },
        { id: 3, name: "3", score: "40 000", type: 'Alijonov Kamol', Link: "25.12.2024" },
        { id: 4, name: "4", score: "50 000", type: 'Sultonov Jamshid', Link: "07.12.2024" },
        { id: 5, name: "5", score: "30 000", type: 'Akbarov Dilmurod', Link: "10.12.2024" },
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
                                <th className="px-4 py-2 text-center font-semibold">Summa </th>
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
                                    <td className="px-4 py-3 text-center">{row.score} uzs</td>
                                    <td
                                        className={`px-4 py-3 text-right rounded-r-lg shadow-md`}
                                    >
                                        {row?.Link}
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
