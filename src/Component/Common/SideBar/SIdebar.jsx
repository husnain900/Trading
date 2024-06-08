// Sidebar.jsx
import { FaTimesCircle } from "react-icons/fa";
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const menuItems = [
    { name: "Trading Solutions", path: "#", clickable: false },
    { name: "Hosting Service", path: "/hosting-service", clickable: true },
    { name: "Trading Platform", path: "/trading-platform", clickable: true },
    { name: "Payment Solution", path: "/payment-solution", clickable: true },
    { name: "Aggregated Liquidity", path: "aggregated-liquidity", clickable: true },
    { name: "Site Development", path: "/site-development", clickable: false },
    { name: "Brand Identity", path: "/brand-identity", clickable: true },
    { name: "Web Design", path: "/web-design", clickable: true },
    { name: "Web Development", path: "/web-development", clickable: true },
    { name: "Digital Marketing", path: "/digital-marketing", clickable: true },
    { name: "Web Maintenance", path: "/web-maintenance", clickable: true }
];

const Sidebar = ({ isOpen, onClose }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="row">
                <div className="col-12 col-lg-6 order-2 order-lg-1 mt-5 mt-md-0">
                    {/* <div className="d-flex  align-items-end h-100 justify-content-between justify-content-lg-end flex-lg-column text-start">
                            <NavLink onClick={onClose} className='nav-link p-0 me-0 me-lg-auto' to="/contact-us">
                                <Button className="text-white fw-bold fs-6" >
                                    Contact Us
                                </Button>
                            </NavLink>
                            <NavLink onClick={onClose} className='nav-link p-0 me-0 me-lg-auto' to="/about-us">
                                <Button className="text-white fw-bold fs-6" >
                                    About Us
                                </Button>
                            </NavLink>
                    </div> */}
                </div>
                <div className="col-12 col-lg-6 order-1 order-lg-2">
                    <div className="text-end">
                        <Button className="close-btn" onClick={onClose}><FaTimesCircle size={30} className='text-white' /></Button>
                    </div>
                    <div className="nav-menu">
                        {menuItems.map((item, index) => (
                            item.clickable ? (
                                <NavLink
                                    key={index}
                                    to={item.path}
                                    className="d-flex flex-row nav-link"
                                    onClick={onClose} // Close sidebar on link click
                                >
                                    {item.name}
                                </NavLink>
                            ) : (
                                <div
                                    key={index}
                                    className="menu-label" // Add a specific class for non-clickable items
                                >
                                    {item.name}
                                </div>
                                
                            )
                        ))}
                         <div className="d-flex w-20">
                            <NavLink onClick={onClose} className='nav-link p-0 me-0 me-lg-auto ' to="/contact-us">
                                <Button className="text-white fw-bold fs-6" >
                                    Contact Us
                                </Button>
                            </NavLink>
                            <NavLink onClick={onClose} className='nav-link p-0 me-0 me-lg-auto' to="/about-us">
                                <Button className="text-white fw-bold fs-6" >
                                    About Us
                                </Button>
                            
                            </NavLink>
                          

                    </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Sidebar;
