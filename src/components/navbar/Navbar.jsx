import "./navbar.css";
import {NavLink } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
            <NavLink to="/" className="navbar-brand">
                <h1>AK</h1>
            </NavLink>
            <button 
                className="navbar-toggler" 
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
                <div className="ms-auto d-flex flex-column flex-lg-row aligns-items-start align-items-lg-center gap-lg-4 gap-3 pt-lg-0">
                <ul className="navbar-nav d-flex flex-column flex-lg-row gap-lg-3 text-start">
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
                <div className="nav-divider d-none d-lg-block"></div>
                <div className="d-flex align-items-center">
                    <a href="" target="_blank" rel="noreferrer">
                        <span className="nav-icon-wrapper" data-bs-toggle="tooltip" title="LinkedIn">
                            <LinkedInIcon />
                        </span>
                    </a>         
                    <a href="" target="_blank" rel="noreferrer">
                        <span className="nav-icon-wrapper" data-bs-toggle="tooltip" title="GitHub">
                            <GitHubIcon />
                        </span>
                    </a> 
                    <a href="" target="_blank" rel="noreferrer">
                        <span className="nav-icon-wrapper" data-bs-toggle="tooltip" title="Contact Me">
                            <MailIcon />
                        </span>
                    </a> 
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
