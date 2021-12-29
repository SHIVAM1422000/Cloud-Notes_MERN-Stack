import React ,{useContext} from 'react';
import NoteContext from '../Context/Notes/noteContext';
import NoteItem from './NoteItem';
function Home(props) {

 const context = useContext(NoteContext);
 const {notes,setNotes} = context;
 console.log(notes);

    return (
        <div>
           <h1 className='mt-3'>Add Your Notes</h1>
           <div className="container">
           <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
               </div> 
           <h1 className='mt-2'>Your Notes</h1> 
          <div className="row  mt-2">
                 {notes.map((my_note)=>{
           return <NoteItem note={my_note}/>
     })}
              </div> 
  

        </div>
    );
}

export default Home;