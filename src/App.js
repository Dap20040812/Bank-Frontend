import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Deposit from './components/Deposit';
import Home from './components/Home';
import Login from './components/Login';
import Transfer from './components/Transfer';
import CreateAccount from './components/CreateAccount';

function App() {
  return (
    <div className="main" >
      <BrowserRouter>
        <Routes>
          <Route default path = '/login' element = {<Login />} />
          <Route path = '/' element = {<Home />} />
          <Route path = '/createaccount' element = {<CreateAccount />} />
          <Route path = '/deposit' element = {<Deposit />} />
          <Route path = '/transfer' element = {<Transfer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
