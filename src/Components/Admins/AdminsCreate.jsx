import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import { $api } from "../../utils/axios";
import { useTeacherRender } from "../../store/renders";
import { sweetAlert } from "../../utils/sweetalert";

export default function AdminsCreate({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { increment } = useTeacherRender();

  const onSubmit = async () => {
    if (!name || !surname) {
      setError("Iltimos, ism va familiyani kiriting.");
      return;
    }

    if (phone.length !== 9) {
      setError("Telefon raqam 9 ta raqamdan iborat bo‘lishi kerak.");
      return;
    }

    if (password.length < 8) {
      setError("Parol kamida 8 ta belgidan iborat bo‘lishi kerak.");
      return;
    }

    const options = {
      name,
      surname,
      phone_number: `+998${phone}`,
      password,
    };

    setLoading(true);
    try {
      const response = await $api.post(`/teachers`, options);
      if (response.status === 201) {
        setLoading(false);
        onClose();
        setName("");
        setSurname("");
        setPhone("");
        setPassword("");
        setError("");
        increment();
        sweetAlert("Xodim muvaffaqiyatli yaratildi!", "success");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error.response?.data?.message || "Xatolik yuz berdi!");
      sweetAlert("Xatolik", "error");
    }
  };

  const handlePhoneChange = (e) => {
    // Получаем только цифры из введенного значения и ограничиваем до 9 цифр
    const numericValue = e.target.value.replace(/\D/g, "").slice(0, 9);
    setPhone(numericValue);
  };

  return (
    <>
      <div className={`Modal ${isOpen ? "open" : ""}`} onClick={onClose}>
        <div
          className={`ModalContent ${isOpen ? "open" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-[10px] pb-[30px]">
            <div className="flex items-center justify-between pt-[10px] pb-[20px]">
              <h1 className="text-MainColor text-[20px]">Xodim yaratish</h1>
              <button onClick={onClose}>
                <svg
                  className="text-[#5E5C5A] text-[12px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 14 14"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M1.707.293A1 1 0 0 0 .293 1.707L5.586 7L.293 12.293a1 1 0 1 0 1.414 1.414L7 8.414l5.293 5.293a1 1 0 0 0 1.414-1.414L8.414 7l5.293-5.293A1 1 0 0 0 12.293.293L7 5.586z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <div className="flex flex-col gap-3">
                <Input
                  label="Ism"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  color="#2c3e50"
                  type="text"
                  required
                  className="border-MainColor text-[#2c3e50]"
                />

                <Input
                  label="Familiya"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  color="#2c3e50"
                  type="text"
                  required
                  className="border-MainColor text-[#2c3e50]"
                />

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-[#2c3e50]">
                    +998
                  </div>
                  <input
                    type="text"
                    placeholder="*********"
                    value={phone}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "").slice(0, 9); // Только цифры и максимум 9 символов
                      setPhone(value);
                    }}
                    className="border border-MainColor text-[#2c3e50] pl-12 w-full p-2 rounded"
                    required
                  />
                </div>
                <Input
                  label="Parol"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  color="#2c3e50"
                  type="password"
                  required
                  className="border-MainColor text-[#2c3e50]"
                />
              </div>

              {error && <p className="text-red-500 mt-2">{error}</p>}

              <Button
                onClick={onSubmit}
                fullWidth
                disabled={loading}
                loading={loading}
                color="white"
                className="bg-MainColor mt-[15px] transition duration-500 border-MainColor border-[2px] text-white hover:bg-transparent hover:text-MainColor"
              >
                Yaratish
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
