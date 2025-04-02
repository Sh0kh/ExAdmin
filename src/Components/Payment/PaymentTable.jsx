import { Card, CardBody } from "@material-tailwind/react";
import { $api } from "../../utils/axios";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";

export default function PaymentTable() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    const fetchData = async () => {
        try {
            const response = await $api.get(`/all-transactions?page=${currentPage}`);
            setData(response?.data?.data);
            setTotalPages(response?.data?.last_page);
            setItemsPerPage(response?.data?.per_page);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [currentPage]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const renderPagination = () => {
        const pages = [];
        const maxVisiblePages = 5;

        // Calculate range of pages to show
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        // Adjust start page if end page is maxed out
        if (endPage === totalPages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        // Previous button
        pages.push(
            <button
                key="prev"
                onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-1 mx-1 rounded ${currentPage === 1
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
            >
                &laquo;
            </button>
        );

        // First page if not visible in current range
        if (startPage > 1) {
            pages.push(
                <button
                    key={1}
                    onClick={() => handlePageChange(1)}
                    className="px-3 py-1 mx-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
                >
                    1
                </button>
            );

            // Ellipsis if there's a gap
            if (startPage > 2) {
                pages.push(
                    <span key="ellipsis1" className="px-3 py-1 mx-1">
                        ...
                    </span>
                );
            }
        }

        // Page numbers
        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`px-3 py-1 mx-1 rounded ${currentPage === i
                        ? 'bg-MainColor text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                >
                    {i}
                </button>
            );
        }

        // Ellipsis if there's a gap at the end
        if (endPage < totalPages - 1) {
            pages.push(
                <span key="ellipsis2" className="px-3 py-1 mx-1">
                    ...
                </span>
            );
        }

        // Last page if not visible in current range
        if (endPage < totalPages) {
            pages.push(
                <button
                    key={totalPages}
                    onClick={() => handlePageChange(totalPages)}
                    className="px-3 py-1 mx-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
                >
                    {totalPages}
                </button>
            );
        }

        // Next button
        pages.push(
            <button
                key="next"
                onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 mx-1 rounded ${currentPage === totalPages
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
            >
                &raquo;
            </button>
        );

        return pages;
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen w-full">
                <ReactLoading type="spinningBubbles" color="#000" height={100} width={100} />
            </div>
        );
    }
    return (
        <Card className="mt-6 shadow-none p-0">
            <CardBody className="p-0">
                <div className="overflow-x-auto px-4">
                    <table className="min-w-full table-auto border-separate border-spacing-y-4">
                        <thead>
                            <tr className="bg-gray-200 text-gray-700">
                                <th className="px-4 py-2 text-left font-semibold rounded-l-xl w-[20px]">№</th>
                                <th className="px-4 py-2 text-center font-semibold">Ism</th>
                                <th className="px-4 py-2 text-center font-semibold">Summa</th>
                                <th className="px-4 py-2 text-center font-semibold rounded-r-lg">Vaqt</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((row, index) => (
                                <tr
                                    key={row.id}
                                    className="bg-MainColor text-white shadow-md"
                                >
                                    <td className="px-4 py-3 font-semibold rounded-l-xl shadow-md">
                                        {(currentPage - 1) * itemsPerPage + index + 1}
                                    </td>
                                    <td className="px-4 py-3 text-center">{row.owner_name || "N/A"}</td>
                                    <td className="px-4 py-3 text-center">{row.amount?.toLocaleString("ru-RU")} uzs</td>
                                    <td className="px-4 py-3 text-center rounded-r-lg shadow-md">
                                        {row?.created_at ? new Date(row.created_at).toLocaleString('ru-RU', {
                                            day: '2-digit',
                                            month: '2-digit',
                                            year: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit',
                                            second: '2-digit'
                                        }) : ''}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Pagination */}
                    <div className="flex justify-center my-6">
                        <div className="flex flex-wrap">
                            {renderPagination()}
                        </div>
                    </div>

                </div>
            </CardBody>
        </Card>
    );
}