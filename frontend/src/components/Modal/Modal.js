import "./Modal.css"

function Modal (props) {
	
	if(!props.visibility) {
		return null;
	}

	return (
		<div className="modal" id="modal">
			<h2>Edit Task</h2>
			<div className="content">{props.children}</div>
			<div className="actions">
				<button className="toggle-button" onClick={props.close}>
					Close
				</button>
			</div>
		</div>
	);
}

export default Modal;