import React, { useState } from 'react';
import Web from '../components/Web';
import Cards from '../components/Cards';
import Presupuestos from '../components/Presupuestos';
import '../App.css';
import '../index.css';
import { Link } from 'react-router-dom';
 

const Content = () => {
  const [budget, setBudget] = useState(0);
  const [languagesCount, setLanguagesCount] = useState(0);
  const [pagesCount, setPagesCount] = useState(0);
  const [isWebChecked, setIsWebChecked] = useState(false);
  const [presupuestos, setPresupuestos] = useState([]);
  const [currentService, setCurrentService] = useState('');

  const handleToggleService = (titol, isChecked, price) => {
    setBudget((prevBudget) => {
      if (isChecked) {
        // Suma el precio del servicio seleccionado
        return prevBudget + price;
      } else {
        // Resta el precio del servicio deseleccionado
        return prevBudget - (titol === 'WEB' && isWebChecked ? price : 0);
      }
    });

    if (titol === 'WEB') {
      setIsWebChecked(isChecked);
      setCurrentService('WEB');
    }
  };

  const handleLanguagesCountChange = (amount) => {
    setLanguagesCount(amount);
  };

  const handlePagesCountChange = (amount) => {
    setPagesCount(amount);
  };

  const handlePresupuestoSubmit = (nombre, email) => {
    const newPresupuesto = {
      nombre,
      email,
      servicio: currentService,
      precio: budget + languagesCount,
    };

    setPresupuestos([...presupuestos, newPresupuesto]);
    // Reiniciar valores después de agregar un presupuesto
    setBudget(0);
    setLanguagesCount(0);
    setPagesCount(0);
    setIsWebChecked(false);
    setCurrentService('');
  };

  return (
    <>
      <div>
        <h1 className='header'>ACONSEGUEIX LA MILLOR QUALITAT</h1>
      </div>

      
      <Link to="/welcome">
        <button className='welcome' >Go to Welcome</button>
      </Link>

      <Cards
        titol="SEO"
        subtitol="Programació d'una web responsive completa"
        price={300}
        onToggle={handleToggleService}
      />

      <Cards
        titol="ADS"
        subtitol="Programació d'una web responsive completa"
        price={400}
        onToggle={handleToggleService}
      />

      <Cards
        titol="WEB"
        subtitol="Programació d'una web responsive completa"
        price={500}
        onToggle={(isChecked) => handleToggleService('WEB', isChecked, 500)}
      />

      {isWebChecked && (
        <Web
          languagesCount={languagesCount}
          onLanguagesCountChange={handleLanguagesCountChange}

          pagesCount={pagesCount}
          onPagesCountChange={handlePagesCountChange}


        />
      )}

      <div className="total-budget">
        <p>Total Presupuesto: {budget + ((languagesCount + pagesCount) * 30)}€</p>
      </div>

      <Presupuestos
        presupuestos={presupuestos}
        onPresupuestoSubmit={handlePresupuestoSubmit}
      />
    </>
  );
};

export default Content;