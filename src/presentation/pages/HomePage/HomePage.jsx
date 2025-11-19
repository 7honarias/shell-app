import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">
            Bienvenido a Roda App
          </h1>
          <p className="hero__subtitle">
            Roda ayuda a los trabajadores de la economía digital y a los repartidores de última milla a moverse más rápido, aumentar sus ingresos y acceder a oportunidades de crédito, mejorando su estabilidad financiera y su capacidad de crecimiento.
          </p>
          <div className="hero__actions">
            <Link to="/" className="btn btn--primary">
              Solicitar Credito
            </Link>
             <Link to="/" className="btn btn--primary">
              Nuestro Catalogo
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
