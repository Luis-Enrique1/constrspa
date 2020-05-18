import React, { Suspense } from 'react';
// import ReactGA from 'react-ga';
import { Route } from 'react-router-dom';
import Home from './pages/home.js';
import './App.css';
import 'materialize-css/dist/css/materialize.css'

// const Home = React.lazy(() => import('./pages/home.jsx'));
const Contact = React.lazy(() => import('./pages/contact.jsx'));
const About = React.lazy(() => import('./pages/about.jsx'));

function App() {
  return (
      <div>
          <Route exact path="/" component={Home}/>
          <Suspense fallback={<div className="progress"><div className="indeterminate"></div></div>}>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/about" component={About}/>
          </Suspense>
      </div>
  );
}


export default App;