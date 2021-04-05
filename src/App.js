import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './Components/Navbar';
import Home from './Views/Home';
import CustomImage from './Views/CustomImage';
import Temperature from './Views/Temperature';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/temperature" component={Temperature}/>
        <Route exact path="/customize-image" component={CustomImage}/>
      </Switch>
    </div>
  );
}

export default App;
