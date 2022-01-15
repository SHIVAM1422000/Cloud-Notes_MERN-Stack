import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import NoteState from './Context/Notes/noteState';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Alert from './Components/Alert';
import AddNote from './Components/AddNote';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useState } from 'react';


window.onbeforeunload = () => {
  localStorage.removeItem('token');
}

function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }



  return (
    <>
    <NoteState>
    <Router>
       <Navbar showAlert={setAlert}/>
       <Alert alert={alert}/>
      <div className="container">
        <Switch>
          <Route exact path="/"><Home showAlert={showAlert}/></Route>
          {/* <Route exact path="/about"> <About/></Route> */}
          <Route exact path="/login"> <Login showAlert={showAlert}/></Route>
          <Route exact path="/signup"> <SignUp showAlert={showAlert}/></Route>
          <Route exact path="/addData"><AddNote showAlert={showAlert}/></Route>
        </Switch>
   </div>
    </Router>
      </NoteState>
</>
  );
}

export default App;
