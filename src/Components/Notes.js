import React ,{useContext,useEffect,useRef,useState} from 'react';
import NoteContext from '../Context/Notes/noteContext';
import AddNote from './AddNote';
import NoteItem from './NoteItem';

function Note(props) {
    const context = useContext(NoteContext);
    const {notes,getNote} = context;

      // Similar to componentDidMount and componentDidUpdate:
    useEffect(()=>{
        getNote();
    },[]);

    const [note, setNote] = useState({etitle: "", edescription: "", etag: ""})

    const ref=useRef(null);

    const updateNote=(currentNote)=>{
        ref.current.click();
        setNote({etitle: currentNote.title, edescription: currentNote.description, etag:currentNote.tag})
    }

    
    const handleClick = (e)=>{
        console.log("Updating the note...", note)
        e.preventDefault(); 
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }

   
          
    return (
        <>

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
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>

          {/* //notes fetching  */}
        <div>
             <h1 className='mt-2'>Your Notes</h1> 
          <div className="row  mt-2">
                 {notes.map((my_note)=>{
           return <NoteItem key={my_note._id} note={my_note} updateNote={updateNote}/>
           
     })}
              </div> 
  
        </div>
     </>   
    )
}

export default Note
