import "./home.css";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Allan from "../../assets/allan.jpg";

const Home = () => {

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row min-vh-100 align-items-center g-3">
                    <div className="col-12 col-md-7 d-flex flex-column justify-content-center align-content-center mb-4 mb-md-0 animated-text">
                        <div className="flex-column justify-content-center align-item-center">
                            <h1><span className="text-danger">I'm</span> Allan Kindarara</h1>
                            <h3><span className="text-danger">Software Engineer</span> | <span className="text-danger">FullStack Developer</span></h3>
                            <p>
                                Hi, I'm Allan, a detail-oriented Software Engineer and FullStack Developer passionate about building 
                                innovative solutions, solving complex problems, and continously learning new technologies. 
                                I am currently an undergraduate Computer Science student at College of Western Idaho.
                            </p>
                            <input 
                                type="button" 
                                value="RESUME" 
                                className="btn btn-danger btn-lg mb-3 shadow fw-bold shadow-sm" 
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-5 d-flex justify-content-center align-items-center position-relative">
                        <img 
                            src={Allan}
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
