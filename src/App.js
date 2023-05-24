import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Deposit from './components/Deposit';
import Home from './components/Home';
import Login from './components/Login';
import Transfer from './components/Transfer';

function App() {
  return (
    <div className="main" >
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/login' element = {<Login />} />
          <Route path = '/deposit' element = {<Deposit />} />
          <Route path = '/transfer' element = {<Transfer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
