import './ToDoList.css';
import Pomodoro from './Pomodoro'
import { useState } from 'react'

function ToDoList(){

    const [newTask, setNewTask] = useState("")
    const [tasks, setTasks] = useState([])
    let completed = false;

    function handleInputChange(event){
        setNewTask(event.target.value)
    }

    function addTask(){
        if(newTask == ""){
            alert("Task vazia!")
        }
        else{
            setTasks(tasks => [...tasks, newTask])
            setNewTask("")
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_,i) => i != index)
        setTasks(updatedTasks)
    }

    function pomodoroTask(index){

    }
    return (
        <div className="container">
            <h1>To Do List</h1>
            <div className='inputs'>
                <input type="text" placeholder='Enter task...' value={newTask} onChange={handleInputChange}/>
                <button className='addButton' onClick={addTask}>+ Add Task</button>
            </div>
            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button className='pomodoroButton' onClick={() => pomodoroTask(index)}>Pomodoro</button>
                        <button className='removeButton' onClick={() => deleteTask(index)}>Remove</button>
                    </li>
                )}
            </ol>
        </div>
    )   
}

export default ToDoList 