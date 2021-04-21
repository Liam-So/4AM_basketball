import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/HomePage/Home";
import Donate from "./components/Pages/Donate/Donate";
import Team from "./components/Pages/Our Team/Team";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Pages/Cart/Cart";
import Register from "./components/Pages/Register/Register";
import Scholarship from "./components/Pages/Scholarship/Scholarship";
import Gear from "./components/Pages/Gear/Gear";
import Why from "./components/Pages/Why/Why";
import PaymentSuccess from "./components/Pages/Payment/PaymentSuccess";
import PaymentFailed from "./components/Pages/Payment/PaymentFailed";
import Media from "./components/Pages/Media/Media";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  return (
    <Router>
      <AnimatePresence>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/donate" exact component={Donate} />
          <Route path="/team" exact component={Team} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/register" exact component={Register} />
          <Route path="/scholarship" exact component={Scholarship} />
          <Route path="/gear" exact component={Gear} />
          <Route path="/why" exact component={Why} />
          <Route path="/success" exact component={PaymentSuccess} />
          <Route path="/paymentFailed" exact component={PaymentFailed} />
          <Route path="/media" exact component={Media} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </Router>
  );
}

export default App;
