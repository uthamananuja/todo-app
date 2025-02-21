import React, { useState, useEffect } from 'react';


const TodoList: React.FC = () => {
const getLocalItems = (): string [] => {
    const storedItems = localStorage.getItem("todos");
    return storedItems ? JSON.parse(storedItems):[];
};

const [items, setItems ] = useState<string[]>(getLocalItems());
const [input, setInput] = useState<string>("");

useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(items));
},[items]);

const addItem = (): void => {
    if(input.trim() === "") return;
    setItems([...items, input]);
    setInput("");
};

const itemDelete = (index: number): void => {
    setItems(items.filter((_, i) => i !== index ));
};

  return (
    <>
        <h1>TodoList</h1>
        <div className="todo-list">
            <input 
                type="text"
                value={input} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>setInput(e.target.value) }
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