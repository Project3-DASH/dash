import React, {Component } from 'react';
import API from '../../utils/API';
import './ResultItem.css';

class ResultItem extends Component{
    constructor() {
        super();
        // Setting initial state to store the input values
        this.state = {

        }
        // Binding the event listeners which we will pass as props
        this.handleSaveClick = this.handleSaveClick.bind(this);
    }

    handleSaveClick = (event) => {
        event.preventDefault();
        // console.log('the api request will go here');
        API.saveProduct(this.props)
            .then(res => console.log(res))
            .catch(err => console.log(err));

        window.location.pathname = "/saved";
    }

    render(){
        return(
            <div className="row ResultItem">
                <a
                    href={this.props.url}
                    target="_blank"
                    className="col-md-6 links">{this.props.headline}</a>
                <div className="col-md-6">
                    <button className="saveButton"
                            onClick={this.handleSaveClick}>Save</button>
                </div>
            </div>
        )
    }
}

export default ResultItem;
