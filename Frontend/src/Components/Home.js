import React from 'react';
import Note from './Notes';

function Home(props) {

//   let history=useHistory();
//  const context = useContext(NoteContext);
//  const {notes} = context;


const {showAlert}=props;
    return (
        <div>
          <Note showAlert={showAlert}/>
        </div>

    );
}

export default Home;