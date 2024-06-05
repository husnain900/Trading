import { useState, useEffect } from 'react';
import "./Nav.css";
import { Button } from '@mui/material';
import Sidebar from '../SideBar/SIdebar';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [sticky, setSticky] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    const handleScroll = () => {
        if (window.scrollY >= 120) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <header>
                <nav className={`navbar ${sticky ? 'sticky' : ''}`}>
                    <div className="container">
                        <div className="d-flex align-items-center justify-content-between w-100">
                            <div className="logo">
                                <Link to='/'>
                                    <img src='Assets/Images/Logo/fathena.png' alt="logo" />
                                </Link>
                            </div>
                            <Button variant='text' className="menu" onClick={toggleSidebar}>
                                <img src='Assets/Images/mennu.png' alt="menu" />
                            </Button>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Use the Sidebar component */}
            <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

            {/* Overlay */}
            <div className={`${sidebarOpen ? 'active' : ''}`} onClick={closeSidebar}></div>
        </div>
    );
};

export default Nav;
