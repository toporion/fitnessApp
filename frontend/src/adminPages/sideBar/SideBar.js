import React from 'react';
import { FaTachometerAlt, FaCalendarAlt, FaUsers, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { FaScissors } from "react-icons/fa6";

const menuItems = [
    { label: 'Dashboard', icon: <FaTachometerAlt />, href: '/dashboard' },
    { label: 'Appointments', icon: <FaCalendarAlt />, href: '/appointments' },
    { label: 'Services', icon: <FaScissors />, href: '/services' },
    { label: 'Clients', icon: <FaUsers />, href: '/clients' },
    { label: 'Settings', icon: <FaCog />, href: '/settings' },
];

const SideBar = () => {
    return (
        <div className="w-56 h-screen bg-gray-800 text-white flex flex-col fixed left-0 top-0 shadow-lg">
            <div className="text-xl font-bold py-6 text-center border-b border-gray-700 tracking-wide">
                Salon Admin
            </div>
            <nav className="flex-1 flex flex-col mt-6">
                {menuItems.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className="flex items-center gap-3 px-8 py-3 text-gray-300 hover:bg-gray-900 hover:text-white transition-colors"
                    >
                        <span className="text-lg">{item.icon}</span>
                        <span>{item.label}</span>
                    </a>
                ))}
            </nav>
            <div className="py-6 border-t border-gray-700 text-center">
                <button className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-2 rounded transition-colors w-full">
                    <FaSignOutAlt className="text-lg" />
                    Logout
                </button>
            </div>
        </div>
    );
};

export default SideBar;