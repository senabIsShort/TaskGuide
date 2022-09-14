import React, { Component } from "react";
import './App.css' ;

const taskItems = [
  {
    id: 1,
    title: "Go to Market",
    description: "Buy ingredients to prepare dinner",
    completed: true,
  },
  {
    id: 2,
    title: "Study",
    description: "Read Algebra and History textbook for the upcoming test",
    completed: false,
  },
  {
    id: 3,
    title: "Sammy's books",
    description: "Go to library to return Sammy's books",
    completed: true,
  },
  {
    id: 4,
    title: "Article",
    description: "Write article on how to use Django with React",
    completed: false,
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      taskList: taskItems,
    };
  }

  displayCompleted = (status) => {
    if (status) {
      return  this.setState({ viewCompleted: true });
    }

    return this.setState({ viewCompleted: false });
  }

  renderTabList = () => {
    return (
      <nav>
        <span
          className="nav-title"
        >
          TaskGuide
        </span>
        <ul>
          <li>
            <button 
              className={this.state.viewCompleted ? "nav-link active" : "nav-link"}
              onClick={() => this.displayCompleted(true)}
            >
              Complete
            </button>
          </li>
          <li>
            <button 
              className={this.state.viewCompleted ? "nav-link" : "nav-link active"}
              onClick={() => this.displayCompleted(false)}
            >
              Incomplete
            </button>
          </li>
        </ul>
      </nav>
    );
  };

  renderItems = () => {
    const { viewCompleted } = this.state;
    const newItems = this.state.taskList.filter(
      (item) => item.completed === viewCompleted
    );

    return newItems.map((item) => (
      <li
        key={item.id}
      >
        <span
          className={`task-title ${
            this.state.viewCompleted ? "completed-task" : ""
          }`}
          title={item.description}
        >
          {item.title}
        </span>
        <span>
          <button 
            className="btn btn-secondary"
          >
            Edit
          </button>
          <button 
            className="btn btn-important"
          >
            Delete
          </button>
        </span>
      </li>
    ));
  };


  render() {
    return (
      <>
      {this.renderTabList()}
      <main>
        <ul>
          {this.renderItems()}
        </ul>
      </main>
      </>
    );
  }
}

export default App;
