import React, { useState } from 'react';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import Swal from 'sweetalert2';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const TeacherLogin = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLoginChange = (e) => {
        // Получаем только цифры и ограничиваем до 9 символов
        const value = e.target.value.replace(/\D/g, "").slice(0, 9);
        setLogin(value);
    };

    const Login = async () => {
        try {
            const data = {
                phone_number: '+998' + login, // Добавляем префикс к номеру при отправке
                password: password
            };
            const response = await axios.post('/teacher/login', data);
            localStorage.setItem("token", response?.data?.token);
            localStorage.setItem("role", 'TEACHER');
            Swal.fire({
                title: 'Muvaffaqiyatli!',
                icon: 'success',
                position: 'top-end',
                timer: 3000,
                timerProgressBar: true,
                showCloseButton: true,
                toast: true,
                showConfirmButton: false,
            });
            navigate('/exam');
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: error.response?.data?.message || 'Error.',
                icon: 'error',
                position: 'top-end',
                timer: 3000,
                timerProgressBar: true,
                showCloseButton: true,
                toast: true,
                showConfirmButton: false,
            });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[white]">
            <div className="w-full max-w-md p-6 bg-[#1B2A3D] text-[white] rounded-lg shadow-lg text-center">
                <h2 className="text-2xl font-semibold text-center mb-6">Kirish</h2>
                <div className="space-y-4">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-white pointer-events-none">
                            +998
                        </div>
                        <input
                            type="text"
                            placeholder="******"
                            value={login}
                            onChange={handleLoginChange}
                            required
                            className="w-full p-2.5 pl-12 bg-[#2c3e50] border border-white rounded text-white focus:outline-none focus:ring-1 focus:ring-white"
                        />
                    </div>
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full p-2.5 bg-[#2c3e50] border border-white rounded text-white focus:outline-none focus:ring-1 focus:ring-white"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
                        >
                            {showPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                        </button>
                    </div>
                    <Button
                        fullWidth
                        color="white"
                        onClick={Login}
                        className="bg-[white] border-[white] border-[2px] text-black hover:bg-transparent hover:text-[white]"
                    >
                        Kirish
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default TeacherLogin;