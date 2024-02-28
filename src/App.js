import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import About from './About';

function App() {
  return (
   
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
        
        </Routes>
  </BrowserRouter>
  
  );
}

    
export default App;
