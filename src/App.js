import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import Orders from './pages/Orders';
import Help from './pages/Help';
import Account from './pages/Account';
import OrderDetail from './pages/OrderDetail';
import IsiBensin from './pages/IsiBensin';
import CreateOrder from './pages/CreateOrder';

function App() {
  return (
    <>
    
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/orderdetail' element={<OrderDetail/>}/>
        <Route path='/isibensin' element={<IsiBensin/>}/>
        <Route path='/buatpesanan' element={<CreateOrder/>}/>
      </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
