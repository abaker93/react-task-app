import React, { Component } from "react";
import Overview from "./components/Overview";
import "./styles/reset.css";
import "./styles/styles.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: "",
      tasks: [],
    };
  }

  handleChange = e => {
    this.setState({
      task: e.target.value,
    });
  };

  onSubmitTask = e => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: "",
    });
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <div>

        <header>
          <h1>Task List</h1>
        </header>
        
        <form>
          <input
            id="task-input"
            placeholder="New task"
            type="text"
            value={task}
            onChange={this.handleChange}
          />
          <button
            type="button"
            onClick={this.onSubmitTask}
          >
            + Add
          </button>
        </form>

        <Overview tasks={tasks} />

      </div>
    );
  }
}

export default App;