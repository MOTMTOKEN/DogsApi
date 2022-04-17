import { useEffect, useState } from 'react';
import './App.css';
import Fetch from './components/Fetch';
import Owner from './components/Owner';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Info from './components/Info';
import Welcome from './components/Welcome';


const App = () => {

  let content = null; 
      const [dogs, setDogs] = useState([]);

    useEffect(() => {
      const url = "https://api.jsonbin.io/b/624c085fd96a510f02914b2b"

      fetch(url)
        .then (response => response.json())
        .then (setDogs);    
    }, []);

  return (
    
      <Router>

      <Routes>
        <Route  path="/"  element={<Welcome />} />
          <Route  path="Owner"  element={<Owner dogs = {dogs}/>}/>
          <Route  path="Info/:id"  element={<Info dogs = {dogs} />} />
          <Route  path="Fetch"  element={<Fetch />} />
          <Route  path="*"  element={<div > 404 Not Found</div>} />
      </Routes>
      
      </Router>
    
  );
}

export default App;
