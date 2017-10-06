import React, { Component } from "react";
import Products from './Products';

const BodyStyle = {
	marginTop: "250px",
};

class Body extends Component {
	render() {
		return(

			<div className="container-fluid" style={ BodyStyle }>
				<div className="row justify-content-md-center">
					<div className="col-sm-4">
						<div className="well">
							<h1> Side panel </h1>
						</div>
					</div>
					<div className="col-sm-8">
						<Products />
					</div>
				</div>
			</div>
		)
	}

}


export default Body;