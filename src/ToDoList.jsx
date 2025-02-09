import './ToDoList.css';

function ToDoList(){
    return (
        <div className="container">
            <h1>To do list</h1>
            <div className="inputs">
                <input type="text" placeholder='Enter your task'/>
                <button>+</button>
            </div>
        </div>
    )
}

export default ToDoList 