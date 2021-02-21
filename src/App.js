import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/HomePage/Home";
import Donate from "./components/Pages/Donate/Donate";
import Topbar from "./components/Topbar/Topbar";

function App() {
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/donate" exact component={Donate} />
      </Switch>
    </Router>
  );
}

export default App;
