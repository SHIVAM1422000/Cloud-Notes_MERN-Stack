import NoteContext from './noteContext';
import { useState } from 'react';


const NoteState = (props) =>{

  const initial_notes=[
    {
      "_id": "61cab007dc029d43cd399e07",
      "user": "61c9999c90be878604e63693",
      "title": "Mero Vrindavan Nyarra",
      "description": "Sabse Pyara",
      "tag": "Important",
      "date": "1640673287329",
      "__v": 0
    },
    {
      "_id": "61caeb29c6d504e7091e1214",
      "user": "61c9999c90be878604e63693",
      "title": "Meri LAdli Ju",
      "description": "Sabse Pyari hai",
      "tag": "Important",
      "date": "1640688425346",
      "__v": 0
    },
    {
      "_id": "61caec0aa01adafa42a5654f",
      "user": "61c9999c90be878604e63693",
      "title": "Meri LAdli Ju",
      "description": "Sabse Pyaris hai",
      "tag": "Important",
      "date": "1640688650744",
      "__v": 0
    },
    {
      "_id": "61caed2f540ca1c3b06dd425",
      "user": "61c9999c90be878604e63693",
      "title": "Meri LAdli Ju",
      "description": "Sabseq Pyaris hai",
      "tag": "Important",
      "date": "1640688943651",
      "__v": 0
    }
  ]

const [notes,setNotes] = useState(initial_notes);
    
   return (
    <NoteContext.Provider value={{notes,setNotes}}>
      {props.children}
    </NoteContext.Provider>
  ); 

} 




  export default NoteState;