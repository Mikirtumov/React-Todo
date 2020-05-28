import React from 'react';

import './App.css';
import TodoList from "./TodoList";
import TodoCreateForm from "./TodoCreateForm";

function App() {
  return (
    <div className="App">
        <TodoCreateForm/>
      <TodoList/>
    </div>
  );
}

export default App;
