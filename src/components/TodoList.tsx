import React from 'react'
import { useState, useEffect } from 'react';


export const TodoList = () => {


const getLocalItems = () => {
    const storedItems = localStorage.getItem("todos");
    return storedItems ? JSON.parse(storedItems):[];
};

const [items, setItems ] = useState(getLocalItems());
const [input, setInput] = useState("");

useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(items));
},[items]);

const addItem = () => {
    if(input.trim() === "") return;
    setItems([...items, input]);
    setInput("");
};

const itemDelete = (index) => {
    setItems(items.filter((_, i) => i !== index ));
};

  return (
    <>
        <h1>TodoList</h1>
        <div className="todo-list">
            <input 
                type="text"
                value={input} 
                onChange={(e) =>setInput(e.target.value) }
            />
            <button onClick={addItem}>Add</button>
        </div>

        <ul className="list-items">
            {items.map((item, index) => (
                <li key={index}>
                   ✔️ {item} {""}
                    <button onClick={() => itemDelete(index)}>Delete</button>
                </li>
                
            ))}
        </ul>
    </>
  )
}

export default TodoList;