import { Card, CardBody } from "@material-tailwind/react";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { $api } from "../../utils/axios";
import { useTeacherRender } from "../../store/renders";
import { AdminsEditModal } from "./AdminsEditModal";
import ReactLoading from "react-loading";
import { MdDelete } from "react-icons/md";
import AdminDelete from "./AdminDelete";



export default function AdminsTable({ setEditModal, setEditModalData }) {
  const [teachers, setTeachers] = useState([]);
  const { count } = useTeacherRender();
  const [loading, setLoading] = useState(true);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteData, setDeleteData] = useState(null);

  const fetchAllTeachers = async () => {
    setLoading(true)
    try {
      const response = await $api.get("/teachers");
      setTeachers(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllTeachers();
  }, [count]);

  const handleEditModal = (data) => {
    setEditModalData(data);
    setEditModal(true);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <ReactLoading type="spinningBubbles" color="#000" height={100} width={100} />
      </div>
    );
  }

  return (
    <>
      <Card className="mt-6 shadow-none p-0">
        <CardBody className="p-0">
          <div className="overflow-x-auto px-4">
            <table className="min-w-full table-auto border-separate border-spacing-y-4">
              <thead>
                <tr className="bg-gray-200 text-gray-700">
                  <th className="px-4 py-2 text-left font-semibold rounded-l-xl">№</th>
                  <th className="px-4 py-2 text-center font-semibold">Ismi</th>
                  <th className="px-4 py-2 text-center font-semibold">Telefon</th>
                  <th className="px-4 py-2 text-center font-semibold">Sana</th>
                  <th className="px-4 py-2 text-right font-semibold rounded-r-lg">Sozlamalar</th>
                </tr>
              </thead>
              <tbody>
                {teachers.map((row, index) => (
                  <tr key={row.id} className="bg-MainColor text-white shadow-md">
                    <td className="px-4 py-3 font-semibold rounded-l-xl shadow-md">{index + 1}</td>
                    <td className="px-4 py-3 text-center">{row.name} {row.surname}</td>
                    <td className="px-4 py-3 text-center">{row.phone_number}</td>
                    <td className="px-4 py-3 text-center">
                      {format(new Date(row.created_at), "yyyy-MM-dd HH:mm")}
                    </td>
                    <td className="px-4 py-3 text-right rounded-r-lg shadow-md">
                      <div className="flex items-center justify-end gap-[10px]">
                        <button
                          onClick={() => {
                            setDeleteModal(true);
                            setDeleteData(row?.id);
                          }}
                          className="text-MainColor bg-[white] border-[white] duration-300 rounded-[5px] p-[5px] border-[2px] hover:bg-transparent hover:text-white"
                        >
                          <MdDelete fontSize={22} />
                        </button>
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
      <AdminDelete
        isOpen={deleteModal}
        onClose={() => setDeleteModal(false)}
        refresh={fetchAllTeachers}
        id={deleteData}
      />
    </>
  );
}
