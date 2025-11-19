import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// 💡 Importar el hook del contexto
import { useAuthShell } from '../../context/AuthShellContext';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const { isAuthenticated, logout } = useAuthShell(); 

  const allNavItems = [
    { path: '/', label: 'Inicio', requiresAuth: false },
    { path: '/login', label: 'Login', requiresAuth: false, showIfAuthenticated: false },
    { path: '/profile', label: 'Perfil', requiresAuth: true, showIfAuthenticated: true },
  ];

  const navItems = allNavItems.filter(item => {
    if (item.showIfAuthenticated === false && isAuthenticated) {
      return false;
    }
    if (item.showIfAuthenticated === true && !isAuthenticated) {
      return false;
    }
    return true;
  });

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__brand">
          <Link to="/" className="header__logo">
            Roda
          </Link>
        </div>

        <nav className="header__nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`header__link ${
                location.pathname === item.path ? 'header__link--active' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}

          {isAuthenticated && (
            <button 
              onClick={logout}
              className="header__logout-btn"
            >
              Cerrar Sesión
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;