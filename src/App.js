import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
import TodoCreateForm from "./TodoCreateForm";

function App() {

    const todoObject = [
        {id: 1, name: 'Test1', done: false},
        {id: 2, name: 'Test2', done: false},
        {id: 3, name: 'Test3', done: false}

    ]

    const [todos, setTodos] = useState(todoObject)





    return (
        <div className="App">
            <TodoCreateForm />
            <TodoList todos={todos}/>
        </div>
    );
}

export default App;
