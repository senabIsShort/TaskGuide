import "./Form.css"

function Form (props) {
	return (
		<>
		<form onSubmit={props.handleSubmit}>
			<div className="title">
				<label className="titleL">Title:</label>
				<input 
					className="titleI"
					type="text" 
					value={props.activeItem.title} 
					onChange={props.handleTitleChange} 
					placeholder="Enter the title for your Task"
				/>
			</div>
			<div className="status">
				<label className="statusL">Status:</label>
				<input className="statusCB" type="checkbox"/>
			</div>
			<div className="description">
				<label className="descriptionL">Description: </label>
				<textarea 
					className="descriptionI"
					value={props.activeItem.description} 
					onChange={props.handleDescriptionChange} 
					placeholder="Enter the description your Task"
				/>
			</div>
			<input className="submit" type="submit" value="Submit" />
		</form>
		</>
	);
}

export default Form;