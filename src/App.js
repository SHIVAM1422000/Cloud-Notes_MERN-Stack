import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './Context/Notes/noteState';
// import NoteContext from './Context/Notes/noteContext';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
    <NoteState>
    <Router>
       <Navbar/>
       <Alert message={"Radhey Radhey"}/>
      <div className="container">
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route exact path="/about"> <About/></Route>
        </Switch>
   </div>
    </Router>
      </NoteState>
</>
  );
}

export default App;
