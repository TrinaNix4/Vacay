
import logo from './logo.svg';
import './App.css';
import {Routes, Route, useParams} from 'react-router-dom'; 
import Home from './components/shared/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';
import HomeClass from './components/shared/HomeClass';
import 'bootstrap/dist/css/bootstrap.min.css';
import FetchUser from './components/shared/FetchUser';
import ProtectedRoute from './components/shared/ProtectRoute';


//Fetch User: going to see if the user is logged in(valid user?)
//before we render our routes, it's going to check for user.


function App() {
  return (
    <div>
      <Navbar/>
      <FetchUser>
      <>
      <Routes>
      {/* unprotected - */}
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/' element={<Home />}/>
        
        {/* protected  routes inside here need to be logged in
        otherwise, you go to the login page */}
      <Route element= {<ProtectedRoute />}> 
        <Route path='/home' element={<HomeClass yo={'yoyo'}/>}/> 
        </Route>
        <Route path='*' element={<NoMatch />}/>
      </Routes>
      </>
      </FetchUser>
      </div>
  );
}

export default App;