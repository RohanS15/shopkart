import Navbar1 from './Components/Navbars/Navbar1';
import './App.css';
import Home from './Components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Menu from './Components/menu/Menu';

function App() {
  return (
    <div className="App">
      <Navbar1 />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
      </Routes>


    </div>
  );
}

export default App;
