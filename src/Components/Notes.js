import React ,{useContext,useEffect} from 'react';
import NoteContext from '../Context/Notes/noteContext';
import NoteItem from './NoteItem';

function Note(props) {
    const context = useContext(NoteContext);
    const {notes,getNote} = context;

      // Similar to componentDidMount and componentDidUpdate:
    useEffect(()=>{
        getNote();
    },[]);


    return (
        <div>
             <h1 className='mt-2'>Your Notes</h1> 
          <div className="row  mt-2">
                 {notes.map((my_note)=>{
           return <NoteItem key={my_note._id} note={my_note}/>
           
     })}
              </div> 
  
        </div>
    )
}

export default Note
