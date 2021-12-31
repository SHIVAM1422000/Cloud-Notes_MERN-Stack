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
      'auth-token':' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzk5OTljOTBiZTg3ODYwNGU2MzY5MyIsImlhdCI6MTY0MDYwMjcyMX0.MyUJHmvHbUiWlhyZPnfLch5wcR3SVjJ14KXeSpF3uU4'
    },
    // body: JSON.stringify(data) 
  });

  let json=await response.json(); 

  //function for frontend:
  //  console.log(json);
   setNotes(json);

  }


 


//adds new Note 
// ==========================
 
const addNote = async (title,description,tag) => {

  //Add Api Call:
  const response = await fetch(`${host}/api/notes/addnotes`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'auth-token':' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzk5OTljOTBiZTg3ODYwNGU2MzY5MyIsImlhdCI6MTY0MDYwMjcyMX0.MyUJHmvHbUiWlhyZPnfLch5wcR3SVjJ14KXeSpF3uU4'
    },
    body: JSON.stringify({title,description,tag})
  });

  let json=await response.json(); 


  //Frontedn Part
   let note={
    "_id": "1w1",
    "user": "61c9999c90be878604e63693",
    "title": title,
    "description": description,
    "tag": tag,
    "date": "1640688943651",
    "__v": 0
  }


  setNotes(notes.concat(note));

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
        'auth-token':' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzk5OTljOTBiZTg3ODYwNGU2MzY5MyIsImlhdCI6MTY0MDYwMjcyMX0.MyUJHmvHbUiWlhyZPnfLch5wcR3SVjJ14KXeSpF3uU4'
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
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzk5OTljOTBiZTg3ODYwNGU2MzY5MyIsImlhdCI6MTY0MDYwMjcyMX0.MyUJHmvHbUiWlhyZPnfLch5wcR3SVjJ14KXeSpF3uU4'
      },
      body: JSON.stringify({title,description,tag}) 
    });
  
    let json=await response.json(); 

  //logic for frontend 
   for(let index=0;index<notes.length;index++){
     const note=notes[index];
     if(note._id==id){
       note.title=title;
       note.description=description;
       note.tag=tag;
     }
   }
}
    
   return (
    <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNote}}>
      {props.children}
    </NoteContext.Provider>
  ); 

} 




  export default NoteState;