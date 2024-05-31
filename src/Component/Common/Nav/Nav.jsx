import './Nav.css';

const Nav = () => {
    return (
        <div>
            <nav className='Navbar'>
                <div className="container">
                    <div className="d-flex">
                        <div className="logo">
                            <img src='Assets/Images/Logo/fathena.png' alt="logo" />
                        </div>
                        <div className="menu">
                            <img src='Assets/Images/mennu.png' alt="logo" />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav
