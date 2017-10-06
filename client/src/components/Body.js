import React, { Component } from "react";
import Products from './Products';
import CategoryList from "./Categories-left";

const BodyStyle = {
	marginTop: "250px",
};

class Body extends Component {
	render() {
		return(

			<div className="container-fluid" style={ BodyStyle }>
				<div className="row justify-content-md-center">
					<div className="col-sm-5">
						<div className="well">
							<h1> Categories </h1>
                            <hr/>
                            <CategoryList/>
						</div>
					</div>
					<div className="col-sm-7">
						<Products />
					</div>
				</div>
			</div>
		)
	}

}

export default Body;