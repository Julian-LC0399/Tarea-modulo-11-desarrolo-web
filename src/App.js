import React, { useState } from 'react';
import UserTable from './components/UserTable';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([
    { name: 'Juan Pérez', email: 'juan.perez@example.com' },
    { name: 'María López', email: 'maria.lopez@example.com' },
  ]);

  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, newUser]);
    setNewUser({ name: '', email: '' });
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div>
      <h1>Registro de Usuarios</h1>
      <button onClick={toggleFormVisibility}>
        {isFormVisible ? 'Ocultar Formulario' : 'Mostrar Formulario'}
      </button>
      {isFormVisible && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              name="name"
              value={newUser.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Correo Electrónico:</label>
            <input
              type="email"
              name="email"
              value={newUser.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Registrar</button>
        </form>
      )}
      <UserTable users={users} />
    </div>
  );
};

export default App;