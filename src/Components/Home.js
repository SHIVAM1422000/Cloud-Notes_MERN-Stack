import React ,{useContext,useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import NoteContext from '../Context/Notes/noteContext';
import AddNote from './AddNote';
import Note from './Notes';

function Home(props) {

  let history=useHistory();
 const context = useContext(NoteContext);
 const {notes} = context;


//  console.log(notes);
const {showAlert}=props;
    return (
        <div>
          <AddNote showAlert={showAlert}/>
          <Note showAlert={showAlert}/>
        </div>

    );
}

export default Home;