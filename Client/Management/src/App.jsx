import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import AdminPanel from './Components/AdminPanel';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/admin' element ={<AdminPanel/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
