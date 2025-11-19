import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-page__content">
        <div className="not-found-page__icon">404</div>
        <h1 className="not-found-page__title">Página no encontrada</h1>
        <p className="not-found-page__message">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <Link to="/" className="not-found-page__button">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
