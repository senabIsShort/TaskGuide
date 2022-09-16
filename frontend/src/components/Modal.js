import React from "react";
import "./Modal.css"

export default class Modal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeItem: this.props.activeItem,
		};
	}
		
	onClose = (e) => {
		this.props.onClose && this.props.onClose(e);
		// this.props.showModal = false;
	};

	render() {
		if(!this.props.showModal) {
			return null;
		}
		return (
			<div class="modal" id="modal">
        <h2>Modal Window</h2>
        <div class="content">{this.props.children}</div>
        <div class="actions">
          <button class="toggle-button" onClick={this.onClose}>
            close
          </button>
        </div>
      </div>
		);
	}
}