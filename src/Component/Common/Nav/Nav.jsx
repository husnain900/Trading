import { useState, useEffect } from 'react';
import "./Nav.css";
import { Button } from '@mui/material';
import Sidebar from '../SideBar/SIdebar';
import { Link, NavLink } from 'react-router-dom';
const navItems = [
    { path: '/hosting-service', label: 'Hosting' },
    { path: '/trading-platform', label: 'Trading' },
    { path: '/payment-solution', label: 'Payment' },
    { path: '/aggregated-liquidity', label: 'Liquidity' },
];

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
            <header className='mb-3'>
                <nav className={`navbar ${sticky ? 'sticky' : ''}`}>
                    <div className="container">
                        <div className="d-flex align-items-center justify-content-between w-100">
                            <div className="logo">
                                <Link to='/'>
                                    <img src='Assets/Images/Logo/fathena.png' alt="logo" />
                                </Link>
                            </div>
                            <div className="d-flex align-items-center gap-7 ">
                                <div className="d-none d-lg-block">
                                    <ul className='p-0 m-0 d-flex align-items-center gap-7 '>
                                        {navItems.map((item, index) => (
                                            <li key={index}>
                                                <NavLink className='nav-link fs-5' to={item.path}>
                                                    {item.label}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <Button variant='text' className="menu" onClick={toggleSidebar}>
                                    <img src='Assets/Images/mennu.png' alt="menu" />
                                </Button>
                            </div>
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
