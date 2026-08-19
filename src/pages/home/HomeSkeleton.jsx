const HomeSkeleton = () => {
	return (
		<div className="container mt-5">
			<div className="row min-vh-100 align-items-center g-3">
				<div className="col-12 col-md-7 d-flex flex-column justify-content-center align-content-center mb-4 mb-md-0 animated-text">
					<div className="flex-column justify-content-center align-item-center">
						<div className="placeholder-glow">
							<h1 className="placeholder col-6 mb-3"></h1>
						</div>
						<div className="placeholder-glow">
							<h2 className="placeholder col-4 mb-3"></h2>
						</div>
						<div className="placeholder-glow">
							<p className="placeholder col-8"></p>
							<p className="placeholder col-8"></p>
							<p className="placeholder col-8"></p>
						</div>
						<div className="placeholder-glow">
							<button className="placeholder btn btn-danger shadow col-3"></button>
						</div>
					</div>
				</div>
				<div className="col-12 col-md-5 d-flex justify-content-center align-items-center position-relative">
					<div className="placeholder-glow" style={{ minWidth: "300px" }}>
						<span className="placeholder img-fluid rounded-circle shadow" style={{ maxWidth: "300px" }}></span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeSkeleton;
