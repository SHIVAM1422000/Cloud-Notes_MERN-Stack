import React,{useContext,useState} from 'react'
import NoteContext from '../Context/Notes/noteContext';

function AddNote(props) {

    const context = useContext(NoteContext);
    const {addNote} = context;

     const [note, setnote] = useState({userName:"",mobileNumber:"",email:"",address:""});
     
     //alpha numeric check on user input
     const isAlphaNumeric = (str) => {
      var code, i, len ,c ;
    
      for (i = 0, len = str.length; i < len; i++) {
        code = str.charCodeAt(i);
        c=str.charAt(i);
        if(c===' ') return false;
        if (!(code > 47 && code < 58) && // numeric (0-9)
            !(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123)// lower alpha (a-z)
            ) { 
          return false;
        }
      }
      return true;
    };

    //valid email check
    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };



     //when submit button is clicked
    const handleClick = (event) =>{

      event.preventDefault();
           
         if(note.mobileNumber.toString().length===0 || note.userName.length===0 || note.email.length===0|| note.address.length===0){
          props.showAlert("All The Details Must Be Filled","danger");
         }else if(note.mobileNumber.toString().length!==10){
          props.showAlert("Mobile Number Must Be 10 Digits Long","danger");
       }else if(!isAlphaNumeric(note.userName)){
         props.showAlert("User Name Must Contain Alpha Numeric Chars Without Any Spaces","danger");
       }else if(!validateEmail(note.email)){
        props.showAlert("Please enter an valid email","danger");
       }else{
        addNote(note.userName,note.mobileNumber,note.email,note.address);
        props.showAlert("Data Added Successfully","success");
        setnote({userName:"",mobileNumber:"",email:"",address:""});
       }

    }
   

    //when changes are done in input field
    const handleChange = (event) =>{
        setnote({...note,[event.target.name]:event.target.value});
    }


// Field 1 - username (Validation: No spaces | Only alphanumeric characters)
// Filed 2 - Mobile Number (Validation: Only 10 digit number)
// Field 3 - Email (Validation: Normal email validation)
// Field 4 - Address

    return (
        <div>
             <h1 className='mt-3'> Add Your details</h1>
           <div className="container mt-3">
           <form>
  <div className="mb-3">
    <label htmlFor="userName" className="form-label">User Name</label>
    <input type="text" className="form-control" id="userName" name="userName" aria-describedby="emailHelp" value={note.userName} onChange={handleChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
    <input type="text" className="form-control" id="mobileNumber" minlength="10" name="mobileNumber" aria-describedby="emailHelp" value={note.mobileNumber} onChange={handleChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" className="form-control" id="email" name="email" value={note.email} onChange={handleChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="address" className="form-label">Address</label>
    <input type="text" className="form-control" id="address" name="address" value={note.address} onChange={handleChange}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
</form>
               </div> 
        </div>
    )
}

export default AddNote
