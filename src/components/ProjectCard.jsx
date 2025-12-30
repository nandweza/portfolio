const ProjectCard = (
    { 
        imgUrl, alt, title, description, techStack, demoUrl, codeUrl 
    }) => {

    return (
        <div className="card h-100 shadow-sm border-0">
            <div className="row g-0 h-100">
                <div className="col-md-6">
                    <img 
                        src={imgUrl}
                        alt={alt}
                        className="img-fluid h-100 w-100 rounded-start object-fit-cover"
                    />
                </div>
                <div className="col-md-6">
                    <div className="card-body d-flex flex-column h-100">
                        <a href={demoUrl} target="_blank" rel="noreferrer">
                            <h4 className="card-title fw-semibold">{title}</h4>
                        </a>
                        <p className="card-text text-muted flex-grow-1">
                            {description}
                        </p>
                        <div className="mb-3">
                            {techStack.map((tech, i) => (
                                <span key={i} className="badge bg-secondary me-2">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="d-flex gap-2 mt-auto">
                            <a href={demoUrl} target="_blank" rel="noreferrer" className="btn btn-danger btn-sm">
                                Live Demo
                            </a>
                            <a href={codeUrl} target="_blank" rel="noreferrer" className="btn btn-outline-dark btn-sm">
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
