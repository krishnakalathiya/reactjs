//1.User List App (API Based)
// import React from 'react'
// import { useEffect , useState } from 'react'

// const UseEffect = () => {

//   const [task , setTask] = useState([])

// const fetchData = async() => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos")
//     const data = await res.json()
//     setTask(data)
//  }

//  useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//      .then((res) => res.json())
//      .then((data) => setTask(data))
//    } , [])


//   return (
//     <>
//         <div>
//          <button onClick={fetchData}>fetching</button> 
//         {
//           task.map((t) => {
//             return <li key={t.id}>{t.id} {t.title}</li>
//           })
//         }
//         </div>
//     </>
//   )
// }

// export default UseEffect

//2.Counter + Title Update
// import React, { useState, useEffect } from 'react';

// function CounterUpdate() {
//   const [count, setCount] = useState(0);

//   // This effect runs every time 'count' changes
//   useEffect(() => {
//     document.title = `Count: ${count}`;
    
//     // Optional: Cleanup function if you want to reset title on unmount
//     return () => {
//       document.title = "React App";
//     };
//   }, [count]); // Dependency array ensures this only runs when count updates

//   return (
//     <div>
//       <h1>Current Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>
//         Increment
//       </button>
//       <button onClick={() => setCount(count - 1)}>
//         Decrement
//       </button>
//     </div>
//   );
// }

// export default CounterUpdate;

//3.Simple To-Do App

// import React, { useState } from 'react';

// function TodoApp() {
//   const [tasks, setTasks] = useState([]);
//   const [input, setInput] = useState('');

//   // Add a new task
//   const addTask = (e) => {
//     e.preventDefault();
//     if (!input.trim()) return; 

//     const newTask = {
//       id: Date.now(),
//       text: input,
//       completed: false
//     };

//     setTasks([...tasks, newTask]);
//     setInput(''); 
//   };

//   // Toggle completion status
//   const toggleComplete = (id) => {
//     setTasks(tasks.map(task => 
//       task.id === id ? { ...task, completed: !task.completed } : task
//     ));
//   };

//   // Delete a task
//   const deleteTask = (id) => {
//     setTasks(tasks.filter(task => task.id !== id));
//   };

//   return (
//     <div style={{ maxWidth: '400px', margin: '50px auto', fontFamily: 'Arial' }}>
//       <h2>My Tasks</h2>
      
//       <form onSubmit={addTask} style={{ marginBottom: '20px' }}>
//         <input 
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="What needs to be done?"
//           style={{ padding: '8px', width: '70%' }}
//         />
//         <button type="submit" style={{ padding: '8px 12px', marginLeft: '5px' }}>
//           Add
//         </button>
//       </form>

//       <ul style={{ listStyle: 'none', padding: 0 }}>
//         {tasks.map(task => (
//           <li key={task.id} style={{ 
//             display: 'flex', 
//             justifyContent: 'space-between',
//             padding: '10px',
//             borderBottom: '1px solid #eee',
//             textDecoration: task.completed ? 'line-through' : 'none',
//             color: task.completed ? '#888' : '#000'
//           }}>
//             <span onClick={() => toggleComplete(task.id)}>
//               {task.text}
//             </span>
//             <button onClick={() => deleteTask(task.id)}>
//               ✕
//             </button>
//           </li>
//         ))}
//       </ul>
      
//       <small>{tasks.filter(t => !t.completed).length} tasks remaining</small>
//     </div>
//   );
// }

// export default TodoApp;

//useContext Basics - Tasks
// 1. User Login Context

// import React, { useContext } from 'react';
// import { AuthProvider, AuthContext } from './authcontext';
// import LoginForm from './loginform';

// function MainApp() {
//   const { user, logout } = useContext(AuthContext);

//   return (
//     <div style={{ textAlign: 'center', padding: '50px' }}>
//       {user ? (
//         <div>
//           <h1>Welcome, {user.name}!</h1>
//           <button onClick={logout}>Logout</button>
//         </div>
//       ) : (
//         <div>
//           <h1>Please Login</h1>
//           <LoginForm />
//         </div>
//       )}
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <AuthProvider>
//       <MainApp />
//     </AuthProvider>
//   );
// }


// 2.Cart count show in navbar
import { CartProvider } from './cartcontext';
import Navbar from './navbar';
import Product from './addtocart';

function App() {
  return (
    <CartProvider>
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Product />
        <Product />
      </div>
    </CartProvider>
  );
}

export default App;