import React,{useState} from "react";
import { useHistory } from "react-router-dom";



function SignUp(props) {

    
    const [credentials, setCredentials] = useState({email: "", password: ""}) 

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
  

    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/create_user", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email,password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            console.log('User  Created');
            console.log(json);
            localStorage.setItem('token', json.token); 
            history.push("/");
            props.showAlert("Signed Up Successfully","success");

        }
        else{
            props.showAlert("Invalid credentials","danger");

            alert("Invalid credentials");
        }
    }


    return (
        <div className="container">

             <h1>Create an account on Cloud Notes</h1>


            <form onSubmit={handleSubmit}>

                {/* <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Name 
                    </label>
                    <input
                        onChange={onChange}
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        aria-describedby="emailHelp"
                    />
                </div> */}

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        onChange={onChange}
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        aria-describedby="emailHelp"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        onChange={onChange}
                        minLength={5}
                        required
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        aria-describedby="emailHelp"
                    />
                </div>

                {/* <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">
                        Confirm Password
                    </label>
                    <input
                        onChange={onChange}
                        minLength={5}
                        required
                        type="password"
                        className="form-control"
                        name="cpassword"
                        id="cpassword"
                    />
                </div> */}
               
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default SignUp;
