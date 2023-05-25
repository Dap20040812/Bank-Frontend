import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Deposit from './components/Deposit';
import Home from './components/Home';
import Login from './components/Login';
import Transfer from './components/Transfer';
import CreateAccount from './components/CreateAccount';
import Prueba from './components/Prueba';

function App() {
  return (
    <div className="main" >
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/login' element = {<Login />} />
          <Route path = '/createaccount' element = {<CreateAccount />} />
          <Route path = '/deposit' element = {<Deposit />} />
          <Route path = '/transfer' element = {<Transfer />} />
          <Route path = '/prueba' element = {<Prueba />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
