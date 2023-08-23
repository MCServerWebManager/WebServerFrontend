import React, { useState } from 'react';
import {Button} from '@mui/material';
import Sidebar from '../../components/Sidebar';

function PlayersPage() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleToggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <main className={"h-full w-full"}>
            <div className={"flex items-start justify-center h-full w-full"}>
                {/* 侧边栏 */}
                <Sidebar />
                {/* 切换侧边栏按钮 */}
                <Button onClick={handleToggleSidebar}>Toggle Sidebar</Button>
                {/* 页面内容 */}
            </div>
        </main>
    );
}

export default PlayersPage