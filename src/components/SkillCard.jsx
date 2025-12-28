const SkillCard = ({ name, icon: Icon, category, className }) => {
    const categoryColors = {
        code: "text-warning",
        frontend: "text-primary",
        backend: "text-success",
        database: "text-danger",
        tools: "text-secondary",
        hosting: "text-secondary",
        os: "text-info",
        stylesheet: "text-danger",
        frameworks: "text-primary",
    };


    return (
        <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card h-100 skill-card border-0 shadow-sm">
                <div className="card-body d-flex align-items-center gap-3">
                    <Icon
                        size={32}
                        className={className || categoryColors[category]}
                    />
                    <span className="fw-medium">{name}</span>
                </div>
            </div>
        </div>
    );
};

export default SkillCard;
