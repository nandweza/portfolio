import "./navbar.css";
import {NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink to="/" className="navbar-brand px-5">
                <h1>AK</h1>
            </NavLink>
            <button 
                className="navbar-toggler mx-5" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto justify-content-end px-5">
                    <li className="nav-item">
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => 
                                isActive ? "nav-link active-link" : "nav-link" 
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => 
                                isActive ? "nav-link active-link" : "nav-link" 
                            }
                        >
                            Skills
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => 
                                isActive ? "nav-link active-link" : "nav-link" 
                            }
                        >
                            Projects
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
