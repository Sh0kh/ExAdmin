import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Input,
} from "@material-tailwind/react";
import { FaPencilAlt } from "react-icons/fa";
import { useTeacherRender } from "../../store/renders";
import { $api } from "../../utils/axios";
import { sweetAlert } from "../../utils/sweetalert";

export function AdminsEditModal({ data }) {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState(data?.phone_number || "");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { increment } = useTeacherRender();

  const onSubmit = async () => {
    if (phone.length !== 9) {
      setError("Telefon raqam 9 ta raqamdan iborat bo‘lishi kerak.");
      return;
    }

    if (password.length < 8) {
      setError("Parol kamida 8 ta belgidan iborat bo‘lishi kerak.");
      return;
    }

    const options = {
      phone_number: phone,
      password,
    };

    setLoading(true);
    try {
      const response = await $api.post(`/teacher/update-password`, options);
      if (response.status >= 200 && response.status < 300) {
        setLoading(false);
        setPhone("");
        setPassword("");
        setError("");
        increment();
        setOpen(false);
        sweetAlert("Xodim muvaffaqiyatli yangilandi!", "success");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error.response?.data?.message || "Xatolik yuz berdi!");
      setOpen(false);
      sweetAlert(error, "error");
    }
  };

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <IconButton onClick={handleOpen}>
        <FaPencilAlt className="h-4 w-4" />
      </IconButton>
      <Dialog size="sm" open={open} handler={handleOpen}>
        <DialogHeader className=" p-4">Yangilash</DialogHeader>
        <DialogBody className="p-4">
          <div>
            <div className="flex flex-col gap-3">
              <Input
                label="Telefon raqam"
                placeholder="*******"
                value={phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "").slice(0, 9); // Faqat raqam va 7 ta uzunlikni saqlash
                  setPhone(value);
                }}
                color="#2c3e50"
                type="text"
                required
                className="border-MainColor text-[#2c3e50]"
              />

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
        </DialogBody>
      </Dialog>
    </>
  );
}
