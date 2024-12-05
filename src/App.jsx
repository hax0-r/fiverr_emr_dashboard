import './App.css';
import Navbar from './Components/Navbar';
import Router from './Router/Router';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis'
// import 'lenis/dist/lenis.css'

function App() {

  // const lenis = new Lenis();

  // function raf(time) {
  //   lenis.raf(time);
  //   requestAnimationFrame(raf);
  // }

  // requestAnimationFrame(raf);

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
