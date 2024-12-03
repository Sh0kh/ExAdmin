import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import { useSelector } from 'react-redux';

export default function MainLayout() {
    const isActive = useSelector((state) => state.state.isActive); // Get current state

    return (
        <div className={`main-layout ${!isActive ? 'shifted' : ''}`}>
            <div className="flex w-full">
                <Sidebar />
                <div className={`w-full duration-300 ${!isActive ? 'shifted' : ''}`}>
                    <Navbar />
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
