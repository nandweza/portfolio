import "./home.css";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Home = () => {
    
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row min-vh-100 align-items-center">
                    <div className="col-12 col-md-7 d-flex flex-column justify-content-center align-content-center mb-4 mb-md-0 animated-text">
                        <div className="flex-column justify-content-center align-item-center">
                            <h1>I'am Allan Kindarara</h1>
                            <h3>Software Engineer | FullStack Developer</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            </p>
                            <input 
                                type="button" 
                                value="My Resume" 
                                className="btn btn-primary btn-lg mb-3 shadow" 
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-5 d-flex justify-content-center align-items-center position-relative">
                        <img 
                            src="https://nandweza.github.io/allan/images/allan.png" 
                            alt="hero image" 
                            width="100%" 
                            className="img-fluid rounded-circle shadow hero-image" 
                            style={{maxWidth: "300px" }}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
