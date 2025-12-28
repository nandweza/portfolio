import "./projects.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ProjectData from "../../data/ProjectData";

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
                    {ProjectData.map((project, index) => (
                        <div key={index} className="col-lg-6 col-md-12">
                            <div className="card h-100 shadow-sm border-0">
                                <div className="row g-0 h-100">
                                    <div className="col-md-6">
                                        <img 
                                            src={project.imgUrl}
                                            alt={project.alt}
                                            className="img-fluid h-100 w-100 rounded-start object-fit-cover"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-body d-flex flex-column h-100">
                                            <a href="">
                                                <h4 className="card-title fw-semibold">{project.title}</h4>
                                            </a>
                                            <p className="card-text text-muted flex-grow-1">
                                                {project.description}
                                            </p>
                                            <div className="mb-3">
                                                {project.techStack.map((tech, i) => (
                                                    <span key={i} className="badge bg-secondary me-2">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="d-flex gap-2 mt-auto">
                                                <a href={project.demoUrl} className="btn btn-primary btn-sm">
                                                    Live Demo
                                                </a>
                                                <a href={project.codeUrl} className="btn btn-outline-dark btn-sm">
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