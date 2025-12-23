const SkillsSkeleton = () => {
  	return (
    	<div className="container py-5 mt-5">
      		<div className="text-center mb-5 placeholder-glow">
        		<h1 className="placeholder col-3 mx-auto"></h1>
      		</div>

      		<div className="row">
        		<div className="col-md-3 mb-4">
          			<div className="card p-3 placeholder-glow">
            			{[1, 2, 3, 4].map(i => (
              				<div key={i} className="placeholder col-8 mb-3"></div>
            			))}
          			</div>
        		</div>
        		<div className="col-md-9">
          			<div className="row g-3">
            			{[1, 2, 3, 4, 5, 6].map(i => (
              				<div key={i} className="col-sm-6 col-lg-4">
                				<div className="card p-4 placeholder-glow">
                  					<div className="placeholder col-6"></div>
                				</div>
              				</div>
            			))}
          			</div>
        		</div>
      		</div>
    	</div>
  	);
};

export default SkillsSkeleton;
