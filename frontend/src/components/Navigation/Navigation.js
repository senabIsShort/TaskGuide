import "./Navigation.css"

function Navigation (props) {
	return (
		<nav>
			<span
				className="nav-title"
				>
				TaskGuide
			</span>
			<button 
				className="new-task-btn"
				onClick={props.createItem}
				>
				New Task
			</button>
			<ul>
				<li>
					<button 
						className={props.viewCompleted ? "nav-link active" : "nav-link"}
						onClick={() => props.setViewCompleted(true)}
						>
						Complete
					</button>
				</li>
				<li>
					<button 
						className={props.viewCompleted ? "nav-link" : "nav-link active"}
						onClick={() => props.setViewCompleted(false)}
						>
						Incomplete
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;