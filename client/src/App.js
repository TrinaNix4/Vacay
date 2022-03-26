
import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'; 
import Home from './components/shared/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';
import HomeClass from './components/shared/HomeClass';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/shared/Navbar';




function App() {
  return (
    <div>
      <NavbarComp/>
      <>
      <Routes>
        <Route path='/' element={<Home />}/>
        {/* <Route path='/home' element={<HomeClass yo={'yoyo'}/>}/> */}
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='*' element={<NoMatch />}/>
      </Routes>
      </>
      </div>
  );
}

export default App;