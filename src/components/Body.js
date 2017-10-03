import React, { Component } from "react";

const BodyStyle = {
	marginTop: "250px",
};

class Body extends Component {
	render() {
		return(

			<div className="container-fluid" style={ BodyStyle }>
				<div className="row justify-content-md-center">
					<div className="col-sm-3">
						<div className="well">
							<h1> Side panel </h1>
						</div>
					</div>
					<div className="col-sm-6">
						<div className="well">
							<h1> Products list </h1>
						</div>
					</div>
					<div className="col-sm-3">
						<div className="well">
							<h1> Other </h1>
						</div>
					</div>
				</div>
			</div>
		)
	}

}

export default Body;