import React, { Component } from "react";
import Item from "./Item.jsx";
import chikaDance from "./chikaDance.gif";

const generateID = () => Math.random().toString(36).substr(2, 9);

export default class TodoBox extends Component {
  constructor(props) {
    super(props);
    const tasks = localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : [];
    this.state = { tasks, currentTask: "", chika: false };
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ currentTask: value });
  };

  addTask = (e) => {
    e.preventDefault();
    const { tasks, currentTask } = this.state;
    if (currentTask.length === 0) {
      return;
    }
    const newTasks = [
      { id: generateID(), text: currentTask, isActive: true },
      ...tasks,
    ];
    this.setState({
      tasks: newTasks,
      chika: currentTask === "anime",
      currentTask: "",
    });
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  handleRemove = (id) => (e) => {
    e.preventDefault();
    const { tasks } = this.state;
    const filtered = tasks.filter((task) => task.id !== id);
    this.setState({ tasks: filtered });
    localStorage.setItem("tasks", JSON.stringify(filtered));
  };

  handleStatus = (id) => (e) => {
    e.preventDefault();
    const { tasks } = this.state;
    const mapped = tasks.map((task) =>
      task.id === id ? { ...task, isActive: !task.isActive } : task
    );
    this.setState({ tasks: mapped });
    localStorage.setItem("tasks", JSON.stringify(mapped));
  };

  render() {
    const { tasks, currentTask, chika } = this.state;
    const activeTasks = tasks
      .filter((el) => el.isActive)
      .map((el) => (
        <Item
          key={el.id}
          task={el}
          changeStatus={this.handleStatus}
          onRemove={this.handleRemove}
          isActive={el.isActive}
        />
      ));
    const finishedTasks = tasks
      .filter((el) => !el.isActive)
      .map((el) => (
        <Item
          key={el.id}
          task={el}
          changeStatus={this.handleStatus}
          onRemove={this.handleRemove}
          isActive={el.isActive}
        />
      ));
    return (
      <>
        <div className="container">
          <div className="inputSticker">
            <div className="sticker">
              <div className="sticker-content">
                <form className="form" onSubmit={this.addTask}>
                  <input
                    type="text"
                    maxLength="30"
                    value={currentTask}
                    required
                    className="input"
                    placeholder="I am going..."
                    onChange={this.handleChange}
                  />
                  <button type="submit" className="buttons">
                    <i className="fas fa-pencil-alt icons"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="tasksContainer">
            <div className="tasksBlock">
              <div className="text">Active tasks: {activeTasks.length}</div>
              {activeTasks}
            </div>
            <div className="tasksBlock">
              <div className="text">Done: {finishedTasks.length}</div>
              <div className="finished">{finishedTasks}</div>
            </div>
          </div>
        </div>
        {chika && (
          <img alt="Chika dancing" src={chikaDance} className="chika"></img>
        )}
      </>
    );
  }
}
