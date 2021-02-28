<<<<<<< HEAD:frontend/src/App.js
import React from 'react' 
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Pages/HomePage/Home'
import Donate from './components/Pages/Donate/Donate'
import Team from './components/Pages/Our Team/Team'
import Footer from './components/Footer/Footer'
import Cart from './components/Cart/Cart'
=======
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/HomePage/Home";
import Donate from "./components/Pages/Donate/Donate";
import Topbar from "./components/Topbar/Topbar";
import Team from "./components/Pages/Our Team/Team";
import Footer from "./components/Footer/Footer";
>>>>>>> origin/feature_navbar:src/App.js

function App() {

  return (
    <Router>
      <Topbar />
      <Switch>
<<<<<<< HEAD:frontend/src/App.js
          <Route path='/' exact component={Home} />
          <Route path='/donate' exact component={Donate} />
          <Route path='/team' exact component={Team} />
          <Route path='/cart' exact component={Cart} />
=======
        <Route path="/" exact component={Home} />
        <Route path="/donate" exact component={Donate} />
        <Route path="/team" exact component={Team} />
>>>>>>> origin/feature_navbar:src/App.js
      </Switch>
      
      <Footer />
    </Router>
  );
}

export default App;
