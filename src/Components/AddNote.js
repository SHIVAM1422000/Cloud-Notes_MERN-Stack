import React,{useContext,useState} from 'react'
import NoteContext from '../Context/Notes/noteContext';
import NoteItem from './NoteItem';

function AddNote() {

    const context = useContext(NoteContext);
    const {addNote} = context;

     const [note, setnote] = useState({title:"",description:"",tag:""});

     //when submit button is clicked
    const handleClick = (event) =>{
        event.preventDefault();
        addNote(note.title,note.description,note.tag);
    }
   

    //when changes are done in input field
    const handleChange = (event) =>{
        setnote({...note,[event.target.name]:event.target.value});
    }


    return (
        <div>
             <h1 className='mt-3'> Add Your Notes</h1>
           <div className="container">
           <form>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={handleChange}/>
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="description" name="description" onChange={handleChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="tag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="tag" name="tag" onChange={handleChange}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
</form>
               </div> 
        </div>
    )
}

export default AddNote
