import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/HomePage/Home";
import Donate from "./components/Pages/Donate/Donate";
import Topbar from "./components/Topbar/Topbar";
import Team from "./components/Pages/Our Team/Team";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/donate" exact component={Donate} />
        <Route path="/team" exact component={Team} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
