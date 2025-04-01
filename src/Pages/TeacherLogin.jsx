import React, { useState } from 'react';
import { Button, Input } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import Swal from 'sweetalert2';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const TeacherLogin = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const Login = async () => {
        try {
            const data = {
                phone_number: login,
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
                    <Input
                        label="Phone"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        color="white"
                        type="text"
                        required
                        className="border-white text-white bg-[#2c3e50]"
                    />
                    <div className="relative">
                        <Input
                            label="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            color="white"
                            type={showPassword ? "text" : "password"}
                            required
                            className="border-white text-white bg-[#2c3e50]"
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
