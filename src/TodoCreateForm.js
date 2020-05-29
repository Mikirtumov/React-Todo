import React, {useState} from 'react';
import './App.css';

function TodoCreateForm() {

    const [task, setTask] = useState('')

    const addTast = () => {
        console.log(task)
    }


    return (
        <div>
            <input type="text" value={task} onChange={e => setTask(e.target.value)}/>
            <button onClick={addTast}>add</button>
        </div>
    );
}

export default TodoCreateForm;
