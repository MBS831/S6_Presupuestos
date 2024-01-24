import React from 'react';
import { Link } from 'react-router-dom';
import '../welcome.css'; 

const Welcome = () => (
  <div className="container">
    <h1 >Bienvenidx a la Calculadora de Presupuestos</h1>
    <p>Esta aplicación te permite personalizar y generar presupuestos para diferentes servicios.</p> 
    <p>Selecciona los servicios que necesitas y personaliza tu presupuesto.</p>
    <p>Para una página web, elige el número de páginas y de idiomas.</p>
    <p>Calcula el coste total y guarda múltiples presupuestos.</p>

    <Link to="/Content">
      <button>Ir a la calculadora</button>
    </Link>
  </div>
);

export default Welcome;
