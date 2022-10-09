import "./Modal.css"

function Modal (props) {

	if(!props.visibility) {
		return null;
	}

	return (
		<>
		<div className="overlay" onClick={props.close}>
		</div>
		<dialog className="modal" id="modal">
			<div className="modalHeader">
				<h2>Edit Task</h2>
				<button className="toggle-button" onClick={props.close}>
					&#10006; Close
				</button>
			</div>
			<div className="content">{props.children}</div>
		</dialog>
		</>
	);
}

export default Modal;