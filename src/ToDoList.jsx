import './ToDoList.css';
import { useState } from 'react'

function ToDoList(){

    const [newTask, setNewTask] = useState("")
    const [tasks, setNewTasks] = useState(["LAvar coisa", "fazer x","fazer y"])

    function handleInputChange(event){
        setNewTask(event.target.value)
    }

    return (
        <div className="container">
            <h1>To Do List</h1>
            <div className='inputs'>
                <input type="text" placeholder='Enter task...' value={newTask} onChange={handleInputChange}/>
                <button className='addButton'>+ Add Task</button>
            </div>
            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>{task}</li>
                )}
            </ol>
        </div>
    )   
}

export default ToDoList 