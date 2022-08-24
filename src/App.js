import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import Orders from './pages/Orders';
import Help from './pages/Help';

function App() {
  return (
    <>
    
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/help' element={<Help/>}/>
      </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
