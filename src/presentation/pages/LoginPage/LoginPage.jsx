import "./LoginPage.css";
import App from 'remoteLogin/App';
import { useNavigate } from 'react-router-dom';
import { useAuthShell } from '../../context/AuthShellContext';

const LoginPage = () => {
  const navigate = useNavigate();
  const { setAuthenticated } = useAuthShell();
  const handleError = (error) => {
    console.error("Error al cargar el componente remoto:", error);
  };

  const handleSuccessfulLogin = (tokens) => {
    setAuthenticated(true);

    navigate('/', { replace: true });
  };

  return (
    <div className="login-page">
      <div className="login-page__container">
        
        <section className="login-page__content">
          <App onLoginSuccess={handleSuccessfulLogin}/>  
        </section>        
      </div>
    </div>
  );
};

export default LoginPage;
