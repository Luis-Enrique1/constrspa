import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import './App.css';
import 'materialize-css/dist/css/materialize.css'

const Contact = React.lazy(() => import('./pages/Contact'));
const About = React.lazy(() => import('./pages/About'));

function App() {
  return (
    <Router>
      <div>
        <Suspense fallback={<div className="progress"><div className="indeterminate"></div></div>}>
          <Route exact path="/" component={Home}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/about" component={About}/>
        </Suspense>
      </div>
  </Router>
  );
}


export default App;
