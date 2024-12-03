import React, { useState } from 'react';
import { Button, Input } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import Swal from 'sweetalert2';

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-[white]">
      <div className="w-full max-w-md p-6 bg-[#1B2A3D] text-[white] rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold text-center mb-6">Kirish</h2>

        <div className="space-y-4">
          <Input
            label="Email"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            color="white" 
            type="text"
            required
            className="border-white text-white bg-[#2c3e50]"
          />
          <Input
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            color="white"  // Changed to gray for a neutral look
            type="password"
            required
            className="border-white text-white bg-[#2c3e50]" 
          />
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

export default Login;
