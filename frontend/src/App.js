import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "./components/Modal";
import './App.css' ;

function App () {
  const [viewCompleted, setViewCompleted] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [activeItem, setActiveItem] = useState({
    title: "",
    description: "",
    completed: false,
  });
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    refreshList();
  },[])

  function refreshList() {
    axios
      .get("api/tasks")
      .then((result) => setTaskList(result.data))
      .catch((error) => console.log(error));
  }

  function toggle() {
    setVisibility(!visibility);
  }

  function handleTitleChange (event) {
    setActiveItem( item => {
      return {...item, title: event.target.value} 
    });
  }

  function handleDescriptionChange (event) {
    setActiveItem( item => {
      return {...item, description: event.target.value} 
    });
  }

  function handleSubmit () {
    toggle();

    if(activeItem.id) {
      axios
        .put(`/api/tasks/${activeItem.id}/`, activeItem)
        .then(() => refreshList());
      return;
    }

    axios
      .post("api/tasks/", activeItem)
      .then(() => refreshList());

    // alert("save" + JSON.stringify(activeItem));
  };

  function handleDelete (item) {
    axios
      .delete(`/api/tasks/${item.id}/`)
      .then(() => refreshList());
    // alert("delete" + JSON.stringify(item));
  };

  function createItem () {
    const item = {title: "", description: "", completed: false};

    setActiveItem(item);
    toggle();
  };

  function editItem (item) {
    setActiveItem(item);
    toggle();
  }

  function renderTabList () {
    return (
      <nav>
        <span
          className="nav-title"
          >
          TaskGuide
        </span>
        <button 
          className="new-task-btn"
          onClick={createItem}
          >
          New Task
        </button>
        <ul>
          <li>
            <button 
              className={viewCompleted ? "nav-link active" : "nav-link"}
              onClick={() => setViewCompleted(true)}
              >
              Complete
            </button>
          </li>
          <li>
            <button 
              className={viewCompleted ? "nav-link" : "nav-link active"}
              onClick={() => setViewCompleted(false)}
              >
              Incomplete
            </button>
          </li>
        </ul>
      </nav>
    );
  };

  function renderItems () {
    const newItems = taskList.filter(
      (item) => item.completed === viewCompleted
    );

    return newItems.map((item) => (
      <li
        key={item.id}
      >
        <span
          className={`task-title ${
            viewCompleted ? "completed-task" : ""
          }`}
          title={item.description}
        >
          {item.title}
        </span>
        <p>
          {item.description}
        </p>
        <span
        className="control-btns"
        >
          <button 
            className="btn btn-secondary"
            onClick={() => editItem(item)}
          >
            Edit
          </button>
          <button 
            className="btn btn-important"
            onClick={() => handleDelete(item)}
          >
            Delete
          </button>
        </span>
      </li>
    ));
  };

  function renderForm() {
    return (
      <>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input 
            type="text" 
            value={activeItem.title} 
            onChange={handleTitleChange} 
            placeholder="Enter the title for your Task"
          />
        </label>
        <label>
          Description:
          <textarea 
            value={activeItem.description} 
            onChange={handleDescriptionChange} 
            placeholder="Enter the description your Task"
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </>
    );
  }
  
  return (
    <>
    {renderTabList()}
    <main>
      <ul>
        {renderItems()}
      </ul>
    </main>
    <Modal 
      visibility={visibility}
      close={toggle}
    >
      {renderForm()}
    </Modal>
    </>
  );

  
}

export default App;
