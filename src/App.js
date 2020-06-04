import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import TodoCreateForm from "./TodoCreateForm";
import TodoList from "./TodoList";

const initialTodos = [
    {id: 1, name: 'Test1', done: false},
    {id: 2, name: 'Test2', done: true},
    {id: 3, name: 'Test3', done: false}
];

function App() {
    const [todos, setTodos] = useState(initialTodos);

    const onCreateTodos = (task) => {
        const updatedTodos = [...todos];
        updatedTodos.push({id: Math.random(), name: task, done: false});
        setTodos(updatedTodos);
    }
    const onTaskDelete = (id) => {
        const updatedTodos = todos.filter(el => el.id !== id);
        setTodos(updatedTodos);
    }
    const onTaskDoneToggle = (id) => {
        const updatedTodos = todos.map(el => {
            if(el.id === id) return { ...el, done: !el.done}
            else return el;

        })
        setTodos(updatedTodos);
    }
    const onTaskSave = (task) => {
        const updatedTodos = todos.map(el => {
            if(el.id === task.id) return { ...el, name: task.name}
            else return el;

        })
        setTodos(updatedTodos);
    }




    return (
        <div className="App">
            <TodoCreateForm onCreateTodos={onCreateTodos}/>
            <TodoList
                todos={todos}
                onTaskDelete={onTaskDelete}
                onTaskDoneToggle={onTaskDoneToggle}
                onTaskSave={onTaskSave}/>
        </div>
    );
}

export default App;
