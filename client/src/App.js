import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='*' element={<NoMatch />}/>
      </Routes>
    
    </div>
  );
}

export default App;
