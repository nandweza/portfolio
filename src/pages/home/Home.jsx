import "./home.css";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';

const Home = () => (
    <div>
        <Navbar />
        <div className="container">
            <div className="left item">
                <h1>I'am Allan Kindarara</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
                <button className="">
                    My Resume
                </button>
                <div className="icons-flex">
                    <span>
                        <LinkedInIcon sx={{fontSize: {xs: 25, md: 40} }} />
                    </span>
                    <span>
                        <GitHubIcon sx={{fontSize: {xs: 25, md: 40} }} />
                    </span>
                    <span>
                        <MailIcon sx={{fontSize: {xs: 25, md: 40} }} />
                    </span>
                </div>
            </div>
            <div className="card right item">
                <img src="https://nandweza.github.io/allan/images/allan.png" alt="Allan's photo" width="100%" />
            </div>
        </div>
        <Footer />
    </div>
)

export default Home;
