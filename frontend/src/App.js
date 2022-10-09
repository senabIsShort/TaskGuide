import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css' ;
import Modal from "./components/Modal/Modal";
import Form from "./components/Form/Form";
import Navigation from "./components/Navigation/Navigation";

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

  function handleStatusChange (event) {
    setActiveItem( item => {
      return {...item, completed: event.target.checked}
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

  };

  function handleDelete (item) {
    axios
      .delete(`/api/tasks/${item.id}/`)
      .then(() => refreshList());
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
  
  return (
    <>
    <Navigation
      createItem={createItem}
      viewCompleted={viewCompleted}
      setViewCompleted={setViewCompleted}
    />
    <main>
      <ul>
        {renderItems()}
      </ul>
    </main>
    <Modal 
      visibility={visibility}
      close={toggle}
    >
      <Form
        handleSubmit={handleSubmit}
        activeItem={activeItem}
        handleTitleChange={handleTitleChange}
        handleDescriptionChange={handleDescriptionChange}
        handleStatusChange={handleStatusChange}
      />
    </Modal>
    </>
  );
}

export default App;
