import React, { Component } from 'react';
import {Modals} from './Modals';
import {ShareButtons, ShareCounts, generateShareIcon} from 'react-share';


class Modal extends Component {
	constructor(props){
		super(props);

		  this.state = {
		    showModal: false,
		    showLazyModal: false
		  };
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

    return (
      <div className="app">
        <h1>Testing Modal</h1>

        <button onClick={this.showModal}>
          Open Modal
        </button>
        &nbsp;Closes on mouse down or touch start events

        <br />

        <button onClick={this.showLazyModal}>
          Open Lazy Model
        </button>
        &nbsp;Closes on mouse down or touch end events

        {showModal ?
          <Modals onClose={this.hideModal}>
            Share on Social 
                 <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-text="Hey! Check the link below to win cool products!! " data-via="dash" data-show-count="false">Tweet</a><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
          </Modals> : null}

        {showLazyModal ?
          <Modals onClose={this.hideLazyModal} notifyOnTouchEnd>
            Lazy Modal content
          </Modals> : null}
      </div>
    );
  }
}

export default Modal;