import React, { useState } from 'react';

const Presupuestos = ({ presupuestos, onPresupuestoSubmit }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    if (nombre && email) {
      onPresupuestoSubmit(nombre, email);
    }
  };

  return (
    <div>
      <h2>Pressupost</h2>
      <label htmlFor="nombre">Nom i cognoms:</label>
      <input type="text" id="nombre" placeholder="Nom i cognoms" value={nombre} onChange={handleNombreChange} />
  
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" placeholder="Email" value={email} onChange={handleEmailChange} />
  
      <button onClick={handleSubmit}>Sol·licitar Pressupost</button>
  
      <h2>Llista de Pressupostos</h2>
      <ul>
        {presupuestos.map((presupuesto, index) => (
          <li key={index}>
            <p>{`Nom: ${presupuesto.nombre}, Email: ${presupuesto.email}, Servei: ${presupuesto.servicio}, Preu total: ${presupuesto.precio}€`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
  
};

export default Presupuestos;