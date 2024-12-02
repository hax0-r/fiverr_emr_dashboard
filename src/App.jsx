import './App.css';
import Navbar from './Components/Navbar';
import Router from './Router/Router';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (
    <>
      {!isLoginPage && <Navbar />}
      <Router />
    </>
  );
}

export default App;
