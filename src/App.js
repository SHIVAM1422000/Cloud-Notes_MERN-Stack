import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
       <h1 className='text-warning'>Mansaarovar</h1>
    
        {/* Navigations Links  */}
    {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav> */}
        

        {/* // adiing paths here */}
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route exact path="/about"> <About/></Route>
        </Switch>

</div>
    </Router>
    

  );
}

export default App;
