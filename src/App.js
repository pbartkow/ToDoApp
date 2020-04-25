import React, { Component } from 'react';
import TaskList from './TaskList'

import './App.css';

class App extends Component {

  state = {
    text: "",
    tasks: [],
  }

  counter = 0;

  handleSubmit = e => {
    e.preventDefault();
    const tasks = [...this.state.tasks];

    if (this.state.text !== "") {
      tasks.push({
        id: this.counter,
        name: this.state.text,
        date: new Date().toLocaleDateString(),
        active: true,
        finishDate: null
      })
      this.setState({
        tasks,
        text: ''
      })
      this.counter++
    } else {
      alert("WPISZ TREŚĆ ZADANIA")
    }
  }

  handleOnChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleDeleteTask = (id) => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id);
    this.setState({
      tasks
    })
  }


  handleChangeStatus = (id) => {
    let tasks = [...this.state.tasks];
    console.log("zmiana statusu w elemencie o id: " + id)
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().toLocaleDateString();
      }
    })
    this.setState({
      tasks
    })
  }

  render() {
    return (
      <div className="formContainer">
        <form className="mainForm" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Wpisz zadanie" value={this.state.text} onChange={this.handleOnChange} />
          <button className="addButton" type="submit">Dodaj</button>
        </form>
        <div className="taskList">
          <TaskList task={this.state.tasks} deleteTask={this.handleDeleteTask} changeStatus={this.handleChangeStatus} />
        </div>
      </div>
    );
  }
}

export default App;
