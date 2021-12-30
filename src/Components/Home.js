import React ,{useContext} from 'react';
import NoteContext from '../Context/Notes/noteContext';
import AddNote from './AddNote';
import Note from './Notes';
function Home(props) {

 const context = useContext(NoteContext);
 const {notes} = context;
 console.log(notes);

    return (
        <div>
          <AddNote/>
          <Note/>

        </div>
    );
}

export default Home;