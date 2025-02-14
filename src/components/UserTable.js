import React from 'react';
import './UserTable.css';

const UserTable = ({ users, onEdit, onDelete }) => {
  return (
    <table className="user-table" style={{ width: '100%', border: '1px solid black' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid black' }}>Nombre</th>
          <th style={{ border: '1px solid black' }}>Correo Electrónico</th>
          <th style={{ border: '1px solid black' }}>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td style={{ border: '1px solid black' }}>{user.name}</td>
            <td style={{ border: '1px solid black' }}>{user.email}</td>
            <td style={{ border: '1px solid black' }}>
              <button onClick={() => onEdit(index)}>Editar</button>
              <button onClick={() => onDelete(index)}>Borrar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;