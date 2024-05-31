import { useState } from 'react';
import './Nav.css';
import { Button } from '@mui/material';
import Sidebar from '../SideBar/SIdebar';

const Nav = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <div>
            <nav className='navbar'>
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between w-100">
                        <div className="logo">
                            <img src='Assets/Images/Logo/fathena.png' alt="logo" />
                        </div>
                        <Button variant='text' className="menu" onClick={toggleSidebar}>
                            <img src='Assets/Images/mennu.png' alt="menu" />
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Use the Sidebar component */}
            <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

            {/* Overlay */}
            {sidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}
        </div>
    );
};

export default Nav;
