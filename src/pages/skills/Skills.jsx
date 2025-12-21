import "./skills.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useState } from "react";

const Skills = () => {
    const skillsData = [
        { name: "React", category: "frameworks", icon: "⚛️" },
        { name: "Bootstrap", category: "frameworks", icon: "🅱️" },
        { name: "JavaScript", category: "languages", icon: "🟨" },
        { name: "HTML", category: "languages", icon: "📄" },
        { name: "CSS", category: "languages", icon: "🎨" },
        { name: "Git", category: "tools", icon: "🔧" },
        { name: "Figma", category: "tools", icon: "🎨" },
    ];

    const [category, setCategory] = useState("all");

    const filteredSkills = 
        category === "all" 
        ? skillsData 
        : skillsData.filter(skill => skill.category === category);

    
    return (
        <>
            <Navbar />
            <div className="container py-5 min-vh-100">
                <div className="text-center mb-5">
                    <h1 className="fw-bold">My Skills</h1>
                    <p className="text-muted">
                        Technologies, tools, and frameworks I work with
                    </p>
                </div>

                <div className="row">
                    <div className="col-md-3 mb-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="mb-3">Categories</h5>

                                {[
                                    { label: "All", value: "all" },
                                    { label: "Frameworks", value: "frameworks" },
                                    { label: "Languages", value: "languages" },
                                    { label: "Tools", value: "tools" },
                                ].map(item => (
                                    <div key={item.value} className="form-check mb-2">
                                        <input
                                            className="form-check-input"
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
                                <div key={index} className="col-sm-6 col-lg-4">
                                    <div className="card h-100 shadow-sm">
                                        <div className="card-body d-flex align-items-center gap-3">
                                            <span className="fs-3">{skill.icon}</span>
                                            <h6 className="mb-0">{skill.name}</h6>
                                        </div>
                                    </div>
                                </div>
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