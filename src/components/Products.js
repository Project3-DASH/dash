import React, { Component } from 'react';
import Modal from './Modal';

class Products extends Component {
	render() {
		return(

			<div className="container-fluid" style={ BodyStyle }>
				<div className="row justify-content-md-center">
					<div className="col-sm-4">
						<div className="well">
							<h1> Product Name  </h1>

							<h3> Giveaway details </h3>
						</div>
					</div>
				</div>
			</div>
			
			<Modal />
		)
	}
}

export default Products;