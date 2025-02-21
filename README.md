# 📝 React Todo App with Local Storage  

A simple **Todo App** built with **React, TypeScript, and Vite** that lets users add, delete, and persist tasks using **localStorage**.  

## 🚀 Features  
✅ Add new tasks  
✅ Delete tasks individually  
✅ Persist tasks after page refresh using `localStorage`  


---

## 🛠️ Installation 

npm create vite@latest my-todo-app --template react
cd my-todo-app
npm install
npm run dev


#How it works

  - useState([]) → Keeps track of tasks.
  - setItems([...items, input]) → Adds a new item.
  - setItems(items.filter((_, i) => i !== index)) → Delete an item.

#Persisting Data (localStorage)
- Retrieve tasks from localStorage when the app loads.
- Save tasks to localStorage whenever they are added or removed.

--------------------------------
 🎯 What you learn
--------------------------------  
✅ JavaScript ES6 (map(), filter(), event handling)
✅ React Components
✅ React State Management (useState)
✅ React Event Handling (onClick, onChange)
✅ List Rendering (map())
✅ Data Persistence with localStorage
