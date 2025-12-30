import "./contact.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Contact = () => {

    return (
        <>
            <Navbar />
            <div className="container d-flex justify-content-center align-items-center flex-grow-1 py-5">
                <div class="w-100" style={{ maxWidth: "500px" }}>
                    <div className="text-center mb-4">
                        <h1 className="fw-bold">Contact me</h1>
                        <p className="text-danger">
                            Let's get in touch
                        </p>
                    </div>
                    <div className="card shadow-lg border-0 rounded-4">
                        <div className="card-body p-4">
                            <form action="" method="">
                                <div className="mb-3">
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        className="form-control form-control-lg" 
                                        placeholder="Name" 
                                    />
                                </div>
                                <div className="mb-3">
                                    <input 
                                        type="text" 
                                        id="email" 
                                        name="email" 
                                        className="form-control form-control-lg" 
                                        placeholder="Email" 
                                    />
                                </div>
                                <div className="mb-3">
                                    <input 
                                        type="text" 
                                        id="subject" 
                                        name="subject" 
                                        className="form-control form-control-lg" 
                                        placeholder="Subject" 
                                    />
                                </div>
                                <div className="mb-3">
                                    <textarea 
                                        name="message" 
                                        id="message" 
                                        className="form-control form-control-lg"
                                        placeholder="Message" 
                                        rows="4"></textarea>
                                </div>
                                <div className="d-grid">   
                                    <button 
                                        type="submit" 
                                        class="btn btn-danger btn-lg rounded-pill"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact;
