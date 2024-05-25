import React, { useState } from 'react';
import './App.css';


function LoginTodo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleLogin = () => {
    if (username.trim() !== '') {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };
  return (
    <>
     <div className={`App ${isLoggedIn ? 'dark-theme' : ''}`}>
      {isLoggedIn ? (
        <div className="user-panel">
          <h2>Welcome, {username}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="login-panel">
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
      {isLoggedIn && (
        <div className="todo-panel">
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <button onClick={handleAddTodo}>Add Todo</button>
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>{todo}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </>
  )
}

export default LoginTodo