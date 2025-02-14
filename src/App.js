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
  const [alertMessage, setAlertMessage] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentUserIndex, setCurrentUserIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUser.name && newUser.email) {
      if (isEditing) {
        const updatedUsers = users.map((user, index) =>
          index === currentUserIndex ? newUser : user
        );
        setUsers(updatedUsers);
        setIsEditing(false);
        setCurrentUserIndex(null);
        setAlertMessage('Usuario actualizado exitosamente.');
      } else {
        setUsers([...users, newUser]);
        setAlertMessage('Usuario registrado exitosamente.');
      }
      setNewUser({ name: '', email: '' });
    } else {
      setAlertMessage('Por favor, complete todos los campos.');
    }
  };

  const handleEdit = (index) => {
    setNewUser(users[index]);
    setIsEditing(true);
    setCurrentUserIndex(index);
    setIsFormVisible(true);
  };

  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    setAlertMessage('Usuario borrado exitosamente.');
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
    if (!isFormVisible) {
      setNewUser({ name: '', email: '' });
      setIsEditing(false);
      setCurrentUserIndex(null);
    }
  };

  return (
    <div>
      <h1>Registro de Usuarios</h1>
      <button onClick={toggleFormVisibility}>
        {isFormVisible ? 'Ocultar formulario' : 'Mostrar formulario'}
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
          <button type="submit">{isEditing ? 'Actualizar' : 'Registrar'}</button>
        </form>
      )}
      {alertMessage && <div className="alert">{alertMessage}</div>}
      <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;