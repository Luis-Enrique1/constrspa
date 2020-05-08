import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home.jsx';
import './App.css';
import 'materialize-css/dist/css/materialize.css'

function App() {
  return (
    <Router>
    <div>
      <Route exact path="/" component={Home}/>
      {/* <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/> */}
    </div>
  </Router>
  );
}


export default App;
