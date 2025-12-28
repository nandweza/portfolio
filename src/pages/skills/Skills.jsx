import "./skills.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import SkillsData from "../../data/SkillsData";
import SkillCard from "../../components/SkillCard";
import { useState } from "react";

const Skills = () => {

    const [category, setCategory] = useState("all");

    const filteredSkills = 
        category === "all" 
        ? SkillsData 
        : SkillsData.filter(skill => skill.category === category);

    
    return (
        <>
            <Navbar />
            <div className="container py-5 min-vh-100">
                <div className="text-center mb-5">
                    <h1 className="fw-bold">My Skills</h1>
                    <p className="text-danger">
                        Technologies, tools, and frameworks I work with
                    </p>
                </div>

                <div className="row">
                    <div className="col-md-3 mb-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="mb-3 text-danger">Categories</h5>

                                {[
                                    { label: "All", value: "all" },
                                    { label: "Code", value: "code" },
                                    { label: "Markup", value: "markup" },
                                    { label: "Scripting", value: "scripting" },
                                    { label: "Style Sheet", value: "stylesheet" },
                                    { label: "Frameworks", value: "frameworks" },
                                    { label: "DataBases", value: "database" },
                                    { label: "Backend", value: "backend" },
                                    { label: "Frontend", value: "frontend" },
                                    { label: "Hosting", value: "hosting" },
                                    { label: "Operating Systems", value: "os" },
                                    { label: "Tools", value: "tools" },
                                ].map(item => (
                                    <div key={item.value} className="form-check mb-2">
                                        <input
                                            className="form-check-input radio-color"
                                            type="radio"
                                            name="skillCategory"
                                            id={item.value}
                                            checked={category === item.value}
                                            onChange={() => setCategory(item.value)}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor={item.value}
                                        >
                                            {item.label}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row g-3">
                            {filteredSkills.map((skill, index) => (
                                <SkillCard key={index} {...skill} />
                            ))}

                            {filteredSkills.length === 0 && (
                                <div className="text-muted text-center mt-4">
                                    No skills found.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Skills;