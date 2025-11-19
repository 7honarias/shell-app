import React, { Suspense, lazy, useState, useEffect } from 'react';
import './RemoteComponent.css';

const RemoteComponent = ({ scope, module, fallback = null, onError = null }) => {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    const loadComponent = async () => {
      try {
        // Verificar si el módulo remoto está disponible
        if (!window[scope]) {
          throw new Error(
            `El microfrontend "${scope}" no está disponible. ` +
            `Asegúrate de que esté corriendo en su puerto correspondiente.`
          );
        }

        // Cargar el componente remoto dinámicamente
        const RemoteModule = lazy(async () => {
          const container = window[scope];
          await container.init(__webpack_share_scopes__.default);
          const factory = await container.get(module);
          return factory();
        });

        setComponent(() => RemoteModule);
        setHasError(false);
      } catch (error) {
        console.error(`Error loading remote component ${scope}/${module}:`, error);
        setHasError(true);
        setErrorMessage(error.message);
        if (onError) {
          onError(error);
        }
      }
    };

    loadComponent();
  }, [scope, module, onError]);

  if (hasError) {
    return (
      <div className="remote-component-error">
        <div className="remote-component-error__content">
          <h2 className="remote-component-error__title">
            ⚠️ Error al cargar el microfrontend
          </h2>
          <p className="remote-component-error__message">
            No se pudo cargar el módulo <strong>{scope}/{module}</strong>
          </p>
          <div className="remote-component-error__details">
            <p><strong>Detalles:</strong></p>
            <pre>{errorMessage}</pre>
          </div>
          <div className="remote-component-error__help">
            <p><strong>Posibles soluciones:</strong></p>
            <ul>
              <li>Verifica que el microfrontend esté corriendo</li>
              <li>Revisa que la URL esté configurada correctamente</li>
              <li>Verifica la configuración de Module Federation</li>
            </ul>
          </div>
          <button 
            className="remote-component-error__button"
            onClick={() => window.location.reload()}
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  if (!Component) {
    return (
      <div className="remote-component-loading">
        <div className="spinner"></div>
        <p>Cargando microfrontend...</p>
      </div>
    );
  }

  return (
    <Suspense 
      fallback={
        fallback || (
          <div className="remote-component-loading">
            <div className="spinner"></div>
            <p>Cargando componente...</p>
          </div>
        )
      }
    >
      <Component />
    </Suspense>
  );
};

export default RemoteComponent;
