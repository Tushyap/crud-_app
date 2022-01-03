import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Payment from './Pages/Payment';


function App() {
  return (
    <BrowserRouter>
     <>
       <Home/>
     </>
     <Routes>
     <Route path='/' component={Home}/>
     <Route path='/about' component={About}/>
     <Route path='/payment' component={Payment}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
 