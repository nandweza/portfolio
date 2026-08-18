import { useState, useEffect, useCallback } from "react";
import "./projects.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ProjectCard from "../../components/ProjectCard";
import ProjectForm from "../../components/ProjectForm";
import { useAuth } from "../../context/AuthContext";
import ProjectSkeleton from "./ProjectSkeleton";

const API_URL = "https://portfolio-api-emkd.onrender.com/api/project";

const Projects = () => {
    const { isLoggedIn, token, logout } = useAuth();

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editingId, setEditingId] = useState(null); // _id of project being edited, or null
    const [creating, setCreating] = useState(false);

    // ---------- READ ----------
    const fetchProjects = useCallback(async () => {
        try {
            const res = await fetch(API_URL);
            if (!res.ok) throw new Error(`Server responded ${res.status}`);
            const data = await res.json();

            setProjects(Array.isArray(data) ? data : data.data ?? []);
        } catch (err) {
            console.error("Loading projects....");
            setTimeout(fetchProjects, 2000);
        } 
    }, []);

    useEffect(() => {
        fetchProjects();
    }, [fetchProjects]);

    // ---------- WRITE (all require the token) ----------
    const handleCreate = async (fields) => {
        try {
            const formData = new FormData();

            formData.append("title", fields.title);
            formData.append("description", fields.description);
            formData.append("liveUrl", fields.liveUrl);
            formData.append("codeUrl", fields.codeUrl);

            fields.techStack.forEach((tech) =>
                formData.append("techStack", tech)
            );

            formData.append("image", fields.image);

            const res = await fetch(API_URL, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.message);

            setCreating(false);
            fetchProjects();
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };

    const handleUpdate = async (id, fields) => {
        try {
            const formData = new FormData();

            formData.append("title", fields.title);
            formData.append("description", fields.description);
            formData.append("liveUrl", fields.liveUrl);
            formData.append("codeUrl", fields.codeUrl);

            fields.techStack.forEach((tech) =>
                formData.append("techStack", tech)
            );

            if (fields.image instanceof File) {
                formData.append("image", fields.image);
            }

            const res = await fetch(`${API_URL}/${id}`, {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.message);

            setEditingId(null);
            fetchProjects();
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };

    const handleDelete = async (id) => {
        // a guard against accidental clicks — deletes are forever
        if (!window.confirm("Delete this project? This cannot be undone.")) return;
        try {
            const res = await fetch(`${API_URL}/${id}`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${token}` },
            });
            if (!res.ok) throw new Error(`Delete failed (${res.status})`);
            fetchProjects();
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };

    if (loading && projects.length === 0) {
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
                                + Add Project 
                            </button>
                        ) : (
                            <span className="text-muted">Adding a new project…</span>
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
                        <ProjectForm
                            onSave={handleCreate}
                            onCancel={() => setCreating(false)}
                        />
                    </div>
                )}
                <ProjectSkeleton />
                <p className="text-center text-muted">No projects to display...</p>
                <Footer />
            </>
        )
    }

    // ---------- RENDER ----------
    return (
        <>
            <Navbar />
            <div className="container py-5 min-vh-100">
                <div className="text-center mb-5">
                    <h1 className="fw-bold">My Projects</h1>
                    <p className="text-danger">These are some of my projects....</p>
                </div>

                {isLoggedIn && (
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        {!creating ? (
                            <button
                                className="btn btn-primary"
                                onClick={() => setCreating(true)}
                            >
                                + Add Project
                            </button>
                        ) : (
                            <span className="text-muted">Adding a new project…</span>
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
                        <ProjectForm
                            onSave={handleCreate}
                            onCancel={() => setCreating(false)}
                        />
                    </div>
                )}

                {!loading && !error && projects.length === 0 && (
                    <p className="text-center text-muted">No projects yet.</p>
                )}

                <div className="row g-4">
                    {projects.map((project) => (
                        // key uses MongoDB's _id — stable across re-renders and deletes
                        <div className="col-lg-6 col-md-12" key={project._id}>
                            {editingId === project._id ? (
                                <ProjectForm
                                    project={project}
                                    onSave={(fields) => handleUpdate(project._id, fields)}
                                    onCancel={() => setEditingId(null)}
                                />
                            ) : (
                                <>
                                    <ProjectCard
                                        imgUrl={project.image}
                                        alt={project.title}
                                        title={project.title}
                                        description={project.description}
                                        techStack={project.techStack}
                                        demoUrl={project.liveUrl}
                                        codeUrl={project.codeUrl}
                                    />
                                    {isLoggedIn && (
                                        <div className="mt-2">
                                            <button
                                                className="btn btn-sm btn-outline-secondary me-2"
                                                onClick={() => setEditingId(project._id)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="btn btn-sm btn-outline-danger"
                                                onClick={() => handleDelete(project._id)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Projects;
