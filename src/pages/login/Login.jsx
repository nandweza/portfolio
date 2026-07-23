// src/pages/login/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Login = () => {
    const { login, isLoggedIn } = useAuth();
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async () => {
        setError(null);
        setSubmitting(true);
        try {
            await login(username, password);
            navigate("/"); // straight to where the admin buttons are
        } catch (err) {
            setError(err.message);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <Navbar />
            <div className="container py-5 min-vh-100 d-flex justify-content-center align-items-center">
                <div className="card p-4 shadow-sm" style={{ maxWidth: 400, width: "100%" }}>
                    <h3 className="fw-bold mb-3 text-center">Admin login</h3>

                    {isLoggedIn && (
                        <p className="text-success text-center">
                            You are already logged in.
                        </p>
                    )}

                    {error && <p className="text-danger">{error}</p>}

                    <label className="form-label small mb-1">Username</label>
                    <input
                        type="text"
                        className="form-control mb-2"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                    />

                    <label className="form-label small mb-1">Password</label>
                    <input
                        type="password"
                        className="form-control mb-3"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                    />

                    <button
                        className="btn btn-danger w-100"
                        onClick={handleSubmit}
                        disabled={submitting}
                    >
                        {submitting ? "Logging in…" : "Log in"}
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;
