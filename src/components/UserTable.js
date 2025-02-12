import React from 'react';

const UserTable = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo Electrónico</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;