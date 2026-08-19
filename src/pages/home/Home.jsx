import { useState, useEffect, useCallback } from "react";
import "./home.css";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import HomeForm from "../../components/HomeForm";
import { useAuth } from "../../context/AuthContext";
import { data } from "react-router-dom";
import HomeSkeleton from "./HomeSkeleton";

const API_URL = "https://portfolio-api-emkd.onrender.com/api/home";

const Home = () => {

    const {isLoggedIn, token, logout } = useAuth();

    const [homeData, setHomeData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editingId, setEditingId] = useState(null);
    const [creating, setCreating] = useState(false);

    const fetchHomeData = useCallback(async () => {
        try {
            const res = await fetch(API_URL);
            if (!res.ok) throw new Error(`Server responded ${res.status}`);
            const data = await res.json();

            const home = Array.isArray(data.data) 
                ? data.data[0] 
                : data.data;

            setHomeData(home ?? null);
            setLoading(false);
        } catch (err) {
            console.log("Loading data...");
            setTimeout(() => {
                fetchHomeData();
            }, 2000);
        } 
    }, []);

    useEffect(() => {
        fetchHomeData();
    }, [fetchHomeData]);

       // ---------- WRITE (all require the token) ----------

    const handleCreate = async (fields) => {
        try {
            const formData = new FormData();

            formData.append("name", fields.name);
            formData.append("title", fields.title);
            formData.append("description", fields.description);
            formData.append("resume", fields.resume);
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
            fetchHomeData();
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };

    const handleUpdate = async (id, fields) => {
        try {
            const formData = new FormData();

            formData.append("name", fields.name);
            formData.append("title", fields.title);
            formData.append("description", fields.description);
            formData.append("resume", fields.resume);

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
            fetchHomeData();
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
            fetchHomeData();
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };

    if (loading || !homeData) {
        return (
            <>
                <Navbar />
                {isLoggedIn && (
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        {!homeData && !creating && (
                            <button
                                className="btn btn-primary"
                                onClick={() => setCreating(true)}
                            >
                                + Add About Me
                            </button>
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
                        <HomeForm
                            onSave={handleCreate}
                            onCancel={() => setCreating(false)}
                        />
                    </div>
                )}
                <HomeSkeleton />
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className="container">

                {homeData && (
                    // key uses MongoDB's _id — stable across re-renders and deletes
                    <div className="" key={homeData._id}>
                        {editingId === homeData._id ? (
                            <HomeForm
                                home={homeData}
                                onSave={(fields) => handleUpdate(homeData._id, fields)}
                                onCancel={() => setEditingId(null)}
                            />
                        ) : (
                                
                            <div className="row min-vh-100 align-items-center g-3">
                                <div 
                                    className=
                                    "col-12 col-md-7 d-flex flex-column justify-content-center align-content-center mb-4 mb-md-0 animated-text order-2 order-md-1 mobile-centered"
                                >
                                    <div className="flex-column justify-content-center align-item-center">
                                        <h1>
                                            <span className="text-danger">I'm </span>
                                            {homeData.name}
                                        </h1>
                                        <h3 className="text-danger">
                                            {homeData.title}
                                        </h3>
                                        <p>
                                            {homeData.description}
                                        </p>
                                        <a
                                            href={homeData.resume}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-danger btn-lg mb-3 shadow fw-bold shadow-sm"
                                        >
                                            RESUME
                                        </a>
                                    </div>
                                </div>
                                <div className="col-12 col-md-5 d-flex justify-content-center align-items-center position-relative order-1 order-md-2">
                                    <img
                                        src={homeData.image}
                                        alt={homeData.name}
                                        width="100%"
                                        className="img-fluid rounded-circle shadow hero-image"
                                        style={{ maxWidth: "300px" }}
                                    />
                                </div>
                                {isLoggedIn && (
                                    <div className="mt-3">
                                        <button
                                            className="btn btn-sm btn-outline-secondary me-2"
                                            onClick={() => setEditingId(homeData._id)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-sm btn-outline-danger me-2"
                                            onClick={() => handleDelete(homeData._id)}
                                        >
                                            Delete
                                        </button>
                                        <button
                                            className="btn btn-sm btn-outline-secondary"
                                            onClick={logout}
                                        >
                                            Log out
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Home;
