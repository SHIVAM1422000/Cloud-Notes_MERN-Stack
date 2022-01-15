import NoteContext from './noteContext';
import { useState } from 'react';


const NoteState = (props) =>{
  
  const host = "http://localhost:5000"

  const initial_notes=[];

const [notes,setNotes] = useState(initial_notes);






//fetch all notes
// ==========================

const getNote =async () => {

  //Add Api Call:
  const response = await fetch(`${host}/api/notes/fetchnotes`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'auth-token': localStorage.getItem('token'),
    },
    // body: JSON.stringify(data) 
  });

  let json=await response.json(); 

  //function for frontend:
  //  console.log(json);
   setNotes(json);

  }


 
  // Field 1 - username (Validation: No spaces | Only alphanumeric characters)
  // Filed 2 - Mobile Number (Validation: Only 10 digit number)
  // Field 3 - Email (Validation: Normal email validation)
  // Field 4 - Address

//adds new Note 
// ==========================
 
const addNote = async (userName,mobileNumber,email,address) => {

  //Add Api Call:
  // ************************
  const response = await fetch(`${host}/api/notes/addnotes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'auth-token': localStorage.getItem('token')
    },
    body: JSON.stringify({userName,mobileNumber,email,address})
  });

  let json=await response.json(); 


  //Frontedn Part:
  // ***************************
  setNotes(notes.concat(json));

 }


 

 //delete a note
 // ==========================

 const deleteNote = async (id) => {

     //Add Api Call:
     // **********************

     const response = await fetch(`${host}/api/notes/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      // body: JSON.stringify(data) 
    });
  
    let json=await response.json(); 
    console.log(json);

// Frontend PArt:
// **********************
  let newNote=notes.filter((note)=>(note._id!==id));
  setNotes(newNote);
   
}



//edit a note
// ==========================

const editNote = async (id,title,description,tag) => {


    //Add Api Call:
    const response = await fetch(`${host}/api/notes/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({title,description,tag}) 
    });
  
    let json=await response.json();
    console.log(json); 

    let newNotes = JSON.parse(JSON.stringify(notes));
  //logic for frontend 
   for(let index=0;index<newNotes.length;index++){
     if(newNotes[index]._id===id){
      newNotes[index].title=title;
      newNotes[index].description=description;
      newNotes[index].tag=tag;
      break;
     }
   }
   
   
   setNotes(newNotes);

}


    
   return (
    <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNote}}>
      {props.children}
    </NoteContext.Provider>
  ); 

} 




  export default NoteState;