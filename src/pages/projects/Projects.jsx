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
                <div className="row g-4">
                    {[1,4].map((_, index) => (
                        <div key={index} className="col-lg-6 col-md-12">
                            <div className="card h-100 shadow-sm border-0">
                                <div className="row g-0 h-100">
                                    <div className="col-md-5">
                                        <img 
                                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.unsell.design%2Fwp-content%2Fuploads%2F2023%2F08%2F633617353_Template-Featured-image.jpg&f=1&nofb=1&ipt=0b2108507802b23e51b2c8cf035982908e0897693f4c66c69860a75741f3d58f" 
                                            alt="project img"
                                            className="img-fluid h-100 w-100 rounded-start object-fit-cover"
                                        />
                                    </div>
                                    <div className="col-md-7">
                                        <div className="card-body d-flex flex-column h-100">
                                            <a href="">
                                                <h4 className="card-title fw-semibold">Poject Title</h4>
                                            </a>
                                            <p className="card-text text-muted flex-grow-1">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                                incididunt ut labore et dolore magna aliqua.
                                            </p>
                                            <div className="mb-3">
                                                <span className="badge bg-secondary me-2">JAVASCRIPT</span>
                                                <span className="badge bg-secondary me-2">MONGOOSE</span>
                                                <span className="badge bg-secondary me"> PYTHON</span>
                                            </div>
                                            <div className="d-flex gap-2 mt-auto">
                                                <a href="#" className="btn btn-primary btn-sm">
                                                    Live Demo
                                                </a>
                                                <a href="#" className="btn btn-outline-dark btn-sm">
                                                    GitHub
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Projects;
