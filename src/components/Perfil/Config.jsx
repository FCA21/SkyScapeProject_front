import React, { useState } from 'react';
import './Config.css';

function Config() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSaveChanges = () => {
    // Aquí podrías implementar la lógica para guardar los cambios del usuario
    // Por ejemplo, hacer una solicitud API para actualizar los datos del usuario
    console.log(`Email actualizado: ${email}`);
    console.log(`Usuario actualizado: ${username}`);
  };

  return (
    <div className="configuracionUsuarioContainer">
      <h2>Configuración de Usuario</h2>
      <div className="inputField">
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <div className="inputField">
        <label>Nombre de Usuario:</label>
        <input type="text" value={username} onChange={handleUsernameChange} />
      </div>
      <button onClick={handleSaveChanges}>Guardar Cambios</button>
      {/* Puedes agregar más campos de configuración según sea necesario */}
    </div>
  );
}

export default Config;
