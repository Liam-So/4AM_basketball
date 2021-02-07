import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/HomePage/Home";
import Donate from "./components/Pages/Donate/Donate";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/donate" exact component={Donate} />
      </Switch>
    </Router>
  );
}

export default App;
