import "./skills.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Skills = () => {
    
    return (
        <>
        <Navbar />
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-3">
                    <h4>Skills</h4>
                </div>
                <div className="col-12 col-md-9">
                    <p>Lorem ipsum</p>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
};

export default Skills;