import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleIn// MySQL modülünü içe aktar
const mysql = require('mysql');

// Bağlantı bilgilerini içeren bir nesne oluştur
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database_name'
});

// Veritabanına bağlan
connection.connect(err => {
  if (err) {
    console.error('Veritabanına bağlanırken bir hata oluştu: ' + err.stack);
    return;
  }
  console.log('Veritabanına başarıyla bağlandı. Bağlantı ID\'si: ' + connection.threadId);
});

// Bağlantıyı kullanarak bir sorgu yap (örnek olarak bir tablodan veri çekme)
connection.query('SELECT * FROM your_table_name', (err, results, fields) => {
  if (err) throw err;
  console.log(results);
});

// Bağlantıyı kapat
connection.end();putChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;