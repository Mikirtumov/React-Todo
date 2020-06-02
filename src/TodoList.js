import React from 'react';


function TodoList(props) {


    return (
        <div>
            {
                props.todos.map(el => <li key={el.id}>{el.name}
                <button onClick={() => props.onTaskDelete(el.id)}>Delete</button>
                </li>)
            }
        </div>
    );
}

export default TodoList;
