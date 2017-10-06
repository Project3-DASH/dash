import React, { Component } from 'react';
import Modal from './Modal';
import {Modals} from './Modals';
import md5 from "md5";
import {ShareButtons, ShareCounts, generateShareIcon} from 'react-share';

import './Products.css';


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
		var temp = [
			{
				name : "$15 Starbucks Gift Card", 
				company : "Starbucks", 
				category : "Food", 
				image : "https://pbs.twimg.com/profile_images/877601376464904192/b3jangc1.jpg"
			},
			{
				name : "Iphone 8", 
				company : "Apple", 
				category : "Technology", 
				image : "https://cdn.macrumors.com/article-new/2017/09/iphone-7-plus-vs-iphone-8-plus-duo.jpg"
			},
			{
				name : "Kitten Mittens", 
				company : "Paddy's Pub", 
				category : "Pet", 
				image : "http://cdn.snowboarding.transworld.net/blogs.dir/442/files/2011/02/sunnye.jpg"
			}
		]
		this.setState({productList : temp });
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
									Get 10 Friends Share Your Link & You ALL Win {product.company.name}
								</div>
								<button className="btnContainer" onClick={this.showModal}>Enter</button>	
							</div>
							
						</div>
					)
				}
				<Modal />
				{
					showModal ?
					<Modals onClose={this.hideModal}>
						Share on Social 
							<a href={'https://twitter.com/intent/tweet/?text=' + md5(this.state.email)}  className="twitter-share-button" data-size="large" data-via="dash">Tweet</a>
    
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