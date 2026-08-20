import "./skills.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import SkillSkeleton from "../skills/SkillSkeleton";
import SkillCard from "../../components/SkillCard";
import SkillForm from "../../components/SkillForm";
import { useState, useEffect, useCallback } from "react";
import { useAuth } from "../../context/AuthContext";
import { categories } from "../../components/IconOPtions";

const API_URL = "https://portfolio-api-emkd.onrender.com/api/skill";

const Skills = () => {
    const { isLoggedIn, token, logout } = useAuth();

    const [skills, setSkills] = useState([]);
    const [category, setCategory] = useState("all");

    const [loading, setLoading] = useState(true);
    const [editingId, setEditingId] = useState(null);
    const [creating, setCreating] = useState(false);

    const filteredSkills = 
        category === "all" 
        ? skills 
        : skills.filter(skill => skill.category.includes(category));

    // ------------------- READ ----------------------------
    const fetchSkills = useCallback(async () => {
        try {
            const res = await fetch(API_URL);
            if (!res.ok) throw new Error(`Server responded ${res.status}`);
            const data = await res.json();

            setSkills(Array.isArray(data) ? data : data.data ?? []);
        } catch (error) {
            console.error("Loading skills....");
            setTimeout(fetchSkills, 2000);
        }
    }, []);

    useEffect(() => {
        fetchSkills();
    }, [fetchSkills]);

    // ---------- WRITE (require token) ----------
    const handleCreate = async (fields) => {
        try {
            const res = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(fields),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.message);

            setCreating(false);
            fetchSkills();
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };

    const handleUpdate = async (id, fields) => {
        try {

            const res = await fetch(`${API_URL}/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(fields),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.message);

            setEditingId(null);
            fetchSkills();
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };

    const handleDelete = async (id) => {
        // a guard against accidental clicks — deletes are forever
        if (!window.confirm("Delete this skill? This cannot be undone.")) return;
        try {
            const res = await fetch(`${API_URL}/${id}`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${token}` },
            });
            if (!res.ok) throw new Error(`Delete failed (${res.status})`);
            fetchSkills();
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };

    if (loading && skills.length === 0) {
        return (
            <>
                <Navbar />
                {isLoggedIn && (
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        {!creating ? (
                            <button
                                className="btn btn-primary"
                                onClick={() => setCreating(true)}
                            >
                                + Add Skill
                            </button>
                        ) : (
                            <span className="text-muted">Adding a new skill…</span>
                        )}
                        <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={logout}
                        >
                            Log out
                        </button>
                    </div>
                )}
                {creating && (
                    <div className="mb-4">
                        <SkillForm
                            onSave={handleCreate}
                            onCancel={() => setCreating(false)}
                        />
                    </div>
                )}
                <SkillSkeleton />
                <p className="text-center text-muted">Loading...</p>
                <Footer />
            </>
        )
    }
    
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

                {isLoggedIn && (
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        {!creating ? (
                            <button
                                className="btn btn-primary"
                                onClick={() =>
                                    setCreating(true)
                                }
                            >
                                + Add Skill
                            </button>
                        ) : (
                            <span className="text-muted">
                                Adding a new skill...
                            </span>
                        )}

                        <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={logout}
                        >
                            Log out
                        </button>
                    </div>
                )}

                {creating && (
                    <div className="mb-4">
                        <SkillForm
                            onSave={handleCreate}
                            onCancel={() =>
                                setCreating(false)
                            }
                        />
                    </div>
                )}


                <div className="row">
                    <div className="col-md-3 mb-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="mb-3 text-danger">Categories</h5>

                                {categories.map(item => (
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
                            {filteredSkills.map(
                                (skill) => (
                                    <div
                                        className="col-xl-3 col-lg-4 col-md-6"
                                        key={skill._id}
                                    >
                                        {editingId === skill._id ? (
                                            <SkillForm 
                                                skill={skill}
                                                onSave={(
                                                    fields
                                                ) =>
                                                    handleUpdate(
                                                        skill._id,
                                                        fields
                                                    )
                                                }
                                                onCancel={() =>
                                                    setEditingId(null)
                                                }
                                            />
                                        ) : (
                                            <>
                                                <SkillCard {...skill} />
                                                {isLoggedIn && (
                                                    <div className="mt-2">
                                                        <button
                                                            className="btn btn-sm btn-outline-secondary me-2"
                                                            onClick={() =>
                                                                setEditingId(skill._id)
                                                            }
                                                        >
                                                            Edit
                                                        </button>

                                                        <button
                                                            className="btn btn-sm btn-outline-danger"
                                                            onClick={() =>
                                                                handleDelete(skill._id)
                                                            }
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </div>
                                )
                            )}

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