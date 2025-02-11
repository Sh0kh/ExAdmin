import { Card, CardBody } from "@material-tailwind/react";
import { MdEdit } from "react-icons/md";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { $api } from "../../utils/axios";
import { useTeacherRender } from "../../store/renders";
import { AdminsEditModal } from "./AdminsEditModal";

export default function AdminsTable({ setEditModal, setEditModalData }) {
  const [teachers, setTeachers] = useState([]);
  const { count } = useTeacherRender();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllTeachers = async () => {
      try {
        const response = await $api.get("/teachers");
        setTeachers(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchAllTeachers();
  }, [count]);

  const handleEditModal = (data) => {
    setEditModalData(data);
    setEditModal(true)
  };

  if (loading) {
    return <div className="text-center py-12">Yuklanyapti...</div>;
  }

  return (
    <Card className="mt-6 shadow-none p-0">
      <CardBody className="p-0">
        <div className="overflow-x-auto px-4">
          <table className="min-w-full table-auto border-separate border-spacing-y-4">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="px-4 py-2 text-left font-semibold rounded-l-xl">
                  №
                </th>
                <th className="px-4 py-2 text-center font-semibold">Ismi</th>
                <th className="px-4 py-2 text-center font-semibold">Telefon</th>
                <th className="px-4 py-2 text-center font-semibold">Sana</th>
                <th className="px-4 py-2 text-right font-semibold rounded-r-lg">
                  Sozlamalar
                </th>
              </tr>
            </thead>
            <tbody>
              {teachers &&
                teachers.map((row, index) => (
                  <tr
                    key={row.id}
                    className="bg-MainColor text-white shadow-md"
                  >
                    <td className="px-4 py-3 font-semibold rounded-l-xl shadow-md">
                      {index + 1}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {row.name} {row.surname}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {row.phone_number}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {format(new Date(row.created_at), "yyyy-MM-dd HH:mm")}
                    </td>
                    <td
                      className={`px-4 py-3 text-right rounded-r-lg shadow-md`}
                    >
                      <div className="flex items-center justify-end gap-[10px]">
                        {/* <button
                          onClick={() => handleEditModal(row)}
                          className="text-MainColor bg-[white] border-[white] duration-300 rounded-[5px] p-[5px] border-[2px] hover:bg-transparent hover:text-white"
                        >
                          <MdEdit fontSize={22}  />
                        </button> */}
                        <AdminsEditModal data={row} />
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
