import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import './App.css';
import 'materialize-css/dist/css/materialize.css'

function App() {
  return (
    <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
  );
}


export default App;
