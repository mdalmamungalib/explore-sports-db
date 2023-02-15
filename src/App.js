
import './App.css';
import HomePage from './Components/Home/HomePage';
import NavBar from './Components/NavBar/NavBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  return (
    <div className="App">
      <NavBar></NavBar>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
