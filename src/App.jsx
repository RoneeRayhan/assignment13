import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Service from './pages/Service/Service';
import About from './pages/About/About';
import Project from './pages/Project/Project';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import './App.css';

function App() {
  return (
    <Router>


      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/service" component={Service} />
        <Route path="/about" component={About} />
        <Route path="/project" component={Project} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
      </Routes>
    </Router>
  );
}

export default App;
