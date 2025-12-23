const ContactSkeleton = () => {

    return (
        <div className="container d-flex justify-content-center align-items-center flex-grow-1 py-5">
                <div class="w-100" style={{ maxWidth: "500px" }}>
                    <div className="text-center mb-4 placeholder-glow">
                        <h1 className="placeholder col-3 mx-auto mb-3"></h1>
                        <br />
                        <p className="placeholder col-5 mx-auto"></p>
                    </div>
                    <div className="card shadow-lg border-0 rounded-4">
                        <div className="card-body p-4 placeholder-glow">
                            <form>
                                <div className="mb-3">
                                    <input
                                        className="form-control form-control-lg placeholder" 
                                    />
                                </div>
                                <div className="mb-3">
                                    <input 
                                        className="form-control form-control-lg placeholder" 
                                    />
                                </div>
                                <div className="mb-3">
                                    <input 
                                        className="form-control form-control-lg placeholder" 
                                    />
                                </div>
                                <div className="mb-3">
                                    <textarea
                                        className="form-control form-control-lg placeholder"
                                        rows="4"></textarea>
                                </div>
                                <div className="d-grid">   
                                    <button
                                        class="btn btn-lg rounded-pill placeholder"
                                    >
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ContactSkeleton;
