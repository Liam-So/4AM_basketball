import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Pages/HomePage/Home'

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
          <Route path='/' exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
