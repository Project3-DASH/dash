import React, { Component } from 'react';
import Modal from './Modal';
import {Modals} from './Modals';
import {ShareButtons, ShareCounts, generateShareIcon} from 'react-share';
import './Products.css';
import md5 from "md5";

class Products extends Component {
	constructor(props){
		super(props);
		this.state = {
			isbuttonClicked  : false,
			productList : [],
			showModal: false,
		    showLazyModal: false
		}
	}

	componentWillMount(){
		let productList =  this.fetchProducts();
		// var temp = [
		// 	{
		// 		name : "Iphone 8", 
		// 		company : "Apple", 
		// 		category : "Technology", 
		// 		image : "https://cdn.macrumors.com/article-new/2017/09/iphone-7-plus-vs-iphone-8-plus-duo.jpg"
		// 	},
		// 	{
		// 		name : "Kitten Mittens", 
		// 		company : "Paddy's Pub", 
		// 		category : "Pet", 
		// 		image : "http://cdn.snowboarding.transworld.net/blogs.dir/442/files/2011/02/sunnye.jpg"
		// 	}
		// ]
	}

	fetchProducts = () => {
		fetch(`http://localhost:3001/api/products`, {
			accept: 'application/json',
		})
		.then(response => 
			response.json().then(data => ({
				data : data,
				status : response.status
			})
		)
		.then( res => {
			this.setState({ productList : res.data});
		})
		)
	}
	parseJSON = (response) => {
		let res = response.json();
	}
	checkStatus = (response) => {
		if (response.status >= 200 && response.status < 300) {
			console.log("fetch success");
		  	return response;
		} else {
		  const error = new Error(`HTTP Error ${response.statusText}`);
		  error.status = response.statusText;
		  error.response = response;
		  console.log(error); // eslint-disable-line no-console
		  throw error;
		}
	}

	hideLazyModal = () => {
		this.setState({showLazyModal: false});
	};

	hideModal = () => {
		this.setState({showModal: false});
	};

	showLazyModal = () => {
		this.setState({showLazyModal: true});
	};

	showModal = () => {
		this.setState({showModal: true});
	};
	  
	render() {
		const {showModal, showLazyModal} = this.state;
		return(
			<div>
				<h3 className="productTitle">Popular Contests</h3>
				{
					this.state.productList &&
					this.state.productList.map((product, index) => 
						<div className="productItem">
							<div className= "imgContainer">
								<img src={product.image} alt="Smiley face"  width="100" />
							</div>
							<div>
								<div className= "product_title">
									Get 10 Friends to Share Your Link & You ALL Win {product.company.name}
								</div>

								<input type='email' ref='enteremail'className="email" placeholder='Add Your Email' required/>
							      <div>
							        <button type="submit" onClick={this.showModal} className="loginbutton">Enter</button>
							      </div>

							</div>
							
						</div>
					)
				}


				 <Modal />
				{
					showModal ?
					<Modals onClose={this.hideModal}>
						Share Your Code 
						<div>
							<a href={'https://twitter.com/intent/tweet/?text=Share%20my%20code%20and%20we%20can%20win%20$15%20to%20Starbucks%20&' + 'url=https://www.google.com/' + md5(289102843092813)}  className="twitter-share-button" data-size="large" data-via="dash">Tweet</a>
    					</div>
          </Modals> : null}

					{showLazyModal ?
					<Modals onClose={this.hideLazyModal} notifyOnTouchEnd>
						Lazy Modal content
					</Modals> : null
				} 

			</div>
		)
	}
}

export default Products;