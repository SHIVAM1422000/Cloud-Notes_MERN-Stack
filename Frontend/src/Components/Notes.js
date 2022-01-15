import React ,{useContext,useEffect} from 'react';
import NoteContext from '../Context/Notes/noteContext';
import NoteItem from './NoteItem';
import { useHistory } from 'react-router-dom';


// Field 1 - username (Validation: No spaces | Only alphanumeric characters)
// Filed 2 - Mobile Number (Validation: Only 10 digit number)
// Field 3 - Email (Validation: Normal email validation)
// Field 4 - Address

function Note(props) {
    const context = useContext(NoteContext);
    const {notes,getNote} = context;
     let history=useHistory();
      // Similar to componentDidMount and componentDidUpdate:
    useEffect(()=>{
        if(localStorage.getItem('token') && localStorage.getItem('token')!=="undefined"){
            //fetches all the notes from the data base using the use context 
            getNote()
        }else{
          history.push("/login");
        }
        
    },[]);

    // const [note, setNote] = useState({id: "", etitle: "", edescription: "", etag: ""})
    // const ref=useRef(null);
    // const refClose = useRef(null)

   
    // const updateNote=(currentNote)=>{
    //     ref.current.click();
    //     setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag:currentNote.tag}) ;   

    // }

    
    // const handleClick = (e)=>{
    //     editNote(note.id,note.etitle, note.edescription, note.etag);
    //      refClose.current.click();
    //      props.showAlert("Note Updated Successfully","success");
    //   }

    // const onChange = (e)=>{
    //     setNote({...note, [e.target.name]: e.target.value})
    // }



/**
  

<button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button> 
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                                </div>
 
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>

 
 */

   
          
    return (
        <>
{/* //DAta Fetching  */}

        <div className='container'>
             <h1 className='mt-2'>Your Data</h1> 


             <table class="table">
  <thead>
    <tr>
      <th scope="col">User Name</th>
      <th scope="col">Mobile Number</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
    </tr>
  </thead>
  <tbody>
 
    {notes.length===0 && "No Data To Display"}
          
          {notes.map((my_note)=>{
    return <NoteItem key={my_note._id} note={my_note} showAlert={props.showAlert}/>
    
})}
    
  </tbody>
</table>

  
        </div>
     </>   
    )
}

export default Note

