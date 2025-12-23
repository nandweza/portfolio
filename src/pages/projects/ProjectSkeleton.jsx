const ProjectSkeleton = () => {
  	return (
    	<div className="container py-5 mini-vh-100">
      		<div className="text-center mb-5 placeholder-glow">
        		<h1 className="placeholder col-3 mx-auto mb-3"></h1>
				<br />
				<p className="placeholder col-5 mx-auto"></p>
      		</div>

        	<div className="row -4">
				{[1,2].map((_, index) => (
					<div key={index} className="col-lg-6 col-md-12">
						<div className="card h-100 shadow-sm border-0">
							<div className="row g-0 h-100">
								<div className="col-md-5">
									<div 
										className="placeholder-glow h-100"
										style={{ minHeight: "220px" }}
									>
										<div className="placeholder w-100 h-100 rounded-start"></div>
									</div>
								</div>
								<div className="col-md-7">
									<div className="card-body d-flex flex-column h-100 placeholder-glow">
										<h4 className="placeholder col-6 mb-3"></h4>

										<p className="placeholder col-12 mb-2"></p>
										<p className="placeholder  col-10 mb-2"></p>
										<p className="placeholder col-8 mb-4"></p>

										<div className="mb-3">
											<span className="placeholder badge bg-secondary me-2 col-3"></span>
											<span className="placeholder badge bg-secondary me-2 col-3"></span>
											<span className="placeholder badge bg-secondary col-3"></span>
										</div>

										<div className="d-flex gap-2 mt-auto">
											<span className="placeholder btn btn-primary col-4"></span>
											<span className="placeholder btn btn-outline-dark col-4"></span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
        	</div>
      	</div>
  	);
};

export default ProjectSkeleton;
