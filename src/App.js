
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Player from './Pages/Player/Player';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './fire_base'
import React ,{ useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("logged in");
        navigate("/");
      } else {
        console.log("Out");
        navigate("/login");
      }
    });
  }, []);

  return null;
};
const App=()=> {
  return (
    <div className="App">

      <Router>
       <ToastContainer theme='dark'/>
      <AuthHandler />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/player/:id' element={<Player/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
