import "./Form.css"

function Form (props) {
	return (
		<>
		<form onSubmit={props.handleSubmit}>
			<label>
				Title:
				<input 
					type="text" 
					value={props.activeItem.title} 
					onChange={props.handleTitleChange} 
					placeholder="Enter the title for your Task"
				/>
			</label>
			<label>
				Description:
				<textarea 
					value={props.activeItem.description} 
					onChange={props.handleDescriptionChange} 
					placeholder="Enter the description your Task"
				/>
			</label>
			<input type="submit" value="Submit" />
		</form>
		</>
	);
}

export default Form;