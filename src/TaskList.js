import React from 'react';
import './TaskList.css'

const TaskList = props => {

    let taskActive = props.task.filter(task => task.active)
    taskActive = taskActive.map(task =>
        <li className="activeListItem" key={task.id}> {task.name} <span>zostało dodane do listy zadań w dniu: </span> {task.date}
            <button className="statusButton" onClick={() => props.changeStatus(task.id)}>Zriobione</button>
            <button className="deleteButton" onClick={() => props.deleteTask(task.id)}>x</button></li>)

    let taskInactive = props.task.filter(task => !task.active)
    taskInactive = taskInactive.map(task =>
        <li className="inactiveListItem" key={task.id}> {task.name} <span>zostało wykonane w dniu: </span> {task.date}
            <button className="deleteButton" onClick={() => props.deleteTask(task.id)}>x</button></li>)

    return (
        <>
            <h3>Zadania aktywne</h3>
            <ul className="activeTask" >
                {taskActive}
            </ul>
            <div className="border"></div>
            <h3>Zadania zriobione</h3>
            <ul className="inactiveTask">
                {taskInactive}
            </ul>
        </>
    );
}

export default TaskList;