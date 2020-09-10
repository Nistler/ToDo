import React, { Component } from "react";

export default class Item extends Component {
  render() {
    const { task, changeStatus, onRemove, isActive } = this.props;
    return (
      <div className="sticker">
        <div className="sticker-content">
          <button
            type="button"
            className="buttons"
            onClick={changeStatus(task.id)}
          >
            {isActive ? (
              <i className="fas fa-check icons"></i>
            ) : (
              <i className="fas fa-undo icons"></i>
            )}
          </button>
          <div className="taskText">
            {isActive ? task.text : <s>{task.text}</s>}
          </div>
          <button type="button" className="buttons" onClick={onRemove(task.id)}>
            <i className="fas fa-times icons"></i>
          </button>
        </div>
      </div>
    );
  }
}
