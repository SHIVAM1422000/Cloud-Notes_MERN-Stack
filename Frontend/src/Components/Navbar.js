import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
        useLocation
      } from "react-router-dom";

   
      
function Navbar(props) {
    
let location = useLocation();
let history=useHistory();

const handleLogOut=(e)=>{
  // props.showAlert("Logged Out Successfully","success");
  console.log("Logout Clicked");
  localStorage.clear();
  history.push('/login');
  
}


        return (

            <div>
                
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand text-warning" to="/"><i className="fab fa-accusoft"></i> Data Collector</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">View Data</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/about"?"active":""}`}  to="/addData">Add New Data</Link>
        </li>
      </ul>
      {!localStorage.getItem('token') ?

      <form className="d-flex"> 
                    <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                    <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
        </form> 

        :
              
        <form className="d-flex"> 
        <button className="btn btn-primary mx-2" onClick={handleLogOut}  role="button">Logout</button>
</form> 
       

        }

    </div>
  </div>
</nav>


            </div>
        )
 
}

export default Navbar
