import React, { useState } from 'react';

import { Outlet } from 'react-router-dom';
import SideBar from '../adminPages/sideBar/SideBar';
import TopBar from '../adminPages/topBar/TopBar';


const AdminLayOut = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    return (
        <div className="flex bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
            <SideBar isCollapsed={isSidebarCollapsed} onCollapse={setIsSidebarCollapsed} />
            <div className="flex-1 flex flex-col">
                <TopBar isSidebarCollapsed={isSidebarCollapsed} />
                <main className="flex ml-56 mt-10">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayOut;