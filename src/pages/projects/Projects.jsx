import "./projects.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Projects = () => {

    return (
        <>
            <Navbar />
            <div className="container py-5 min-vh-100">
                <div className="text-center mb-5">
                    <h1 className="fw-bold">My Projects</h1>
                    <p className="text-muted">
                        These are some of my projects....
                    </p>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body gap-3">
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <img 
                                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.unsell.design%2Fwp-content%2Fuploads%2F2023%2F08%2F633617353_Template-Featured-image.jpg&f=1&nofb=1&ipt=0b2108507802b23e51b2c8cf035982908e0897693f4c66c69860a75741f3d58f" 
                                            alt="project img"
                                            width="300"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <a href="">
                                            <h4>Poject Title</h4>
                                        </a>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                            incididunt ut labore et dolore magna aliqua.
                                        </p>
                                        <div className="">
                                            <span className="fw-medium">JAVASCRIPT</span> |  <span className="fw-medium">MONGOOSE</span> | 
                                            <span className="fw-medium"> PYTHON</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body gap-3">
                                <div className="row">
                                    <div className="col-md-6">
                                        <img 
                                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.unsell.design%2Fwp-content%2Fuploads%2F2023%2F08%2F633617353_Template-Featured-image.jpg&f=1&nofb=1&ipt=0b2108507802b23e51b2c8cf035982908e0897693f4c66c69860a75741f3d58f" 
                                            alt="project img"
                                            width="300"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <h4>Poject Title</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        </p>
                                        <div>
                                            <a href="">
                                                <input 
                                                    type="button"
                                                    value="LIVE"
                                                />
                                            </a>
                                            <a href="">
                                                <input 
                                                    type="button"
                                                    value="GitHub"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Projects;
