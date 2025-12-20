const ProjectSkeleton = () => {
  return (
    <div className="container mt-5">
      <div className="placeholder-glow">
        <h1 className="placeholder col-4 mb-4"></h1>
        <p className="placeholder col-8"></p>
        <p className="placeholder col-6"></p>
        <p className="placeholder col-7"></p>

        <div className="d-flex gap-3 mt-4">
          <span className="placeholder rounded-circle" style={{ width: 40, height: 40 }}></span>
          <span className="placeholder rounded-circle" style={{ width: 40, height: 40 }}></span>
          <span className="placeholder rounded-circle" style={{ width: 40, height: 40 }}></span>
        </div>
      </div>
    </div>
  );
};

export default ProjectSkeleton;
