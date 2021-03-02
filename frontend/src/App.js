<<<<<<< HEAD
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/HomePage/Home";
import Donate from "./components/Pages/Donate/Donate";
import Team from "./components/Pages/Our Team/Team";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import Topbar from "./components/Topbar/Topbar";
=======
import React from 'react' 
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Pages/HomePage/Home'
import Donate from './components/Pages/Donate/Donate'
import Team from './components/Pages/Our Team/Team'
import Footer from './components/Footer/Footer'
import Cart from './components/Pages/Cart/Cart'
import Register from './components/Pages/Register/Register'
>>>>>>> a38abe884491a7fec87088a6eb1bdbb0174df832

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <Topbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/donate" exact component={Donate} />
        <Route path="/team" exact component={Team} />
        <Route path="/cart" exact component={Cart} />
      </Switch>

=======
      <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/donate' exact component={Donate} />
          <Route path='/team' exact component={Team} />
          <Route path='/cart' exact component={Cart} />
          <Route path='/register' exact component={Register} />
      </Switch>
>>>>>>> a38abe884491a7fec87088a6eb1bdbb0174df832
      <Footer />
    </Router>
  );
}

export default App;
