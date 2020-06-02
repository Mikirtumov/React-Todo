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

    const onCreateTodos = (task) => {

        const updatedTodos = [...todos];
        updatedTodos.push({id: Math.random(), name: task, done: false});
        setTodos(updatedTodos);
    }
    const onTaskDelete = (id) => {
        const updatedTodos = todos.filter(el => el.id !== id);
        setTodos(updatedTodos);
    }


    const [todos, setTodos] = useState(initialTodos)

    return (
        <div className="App">
            <TodoCreateForm onCreateTodos={onCreateTodos}/>
            <TodoList todos={todos} onTaskDelete={onTaskDelete}/>
        </div>
    );
}

export default App;
