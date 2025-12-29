import "./projects.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ProjectData from "../../data/ProjectData";
import ProjectCard from "../../components/ProjectCard";

const Projects = () => {

    return (
        <>
            <Navbar />
            <div className="container py-5 min-vh-100">
                <div className="text-center mb-5">
                    <h1 className="fw-bold">My Projects</h1>
                    <p className="text-danger">
                        These are some of my projects....
                    </p>
                </div>
                <div className="row g-4">
                    {ProjectData.map((project, index) => (
                        <div className="col-lg-6 col-md-12">
                            <ProjectCard key={index} {...project} />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Projects;
