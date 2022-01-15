import React  from 'react';
// import NoteContext from '../Context/Notes/noteContext';
// import AddNote from './AddNote';
// import NoteItem from './NoteItem';

function NoteItem(props) {
   
   // const context = useContext(NoteContext);
   // const {deleteNote} = context;

    return (

      
       <>

<tr className='table-light'>

<th scope="row">{props.note.userName}</th>
<td>{props.note.mobileNumber}</td>
<td>{props.note.email}</td>
<td>{props.note.address}</td>


</tr>
      
           
     
     </>

    )
}

export default NoteItem

/** 
<div className="col-md-4 mt-4">  
<div className="card">
   <div className="card-body">
       <div className="d-flex align-items-centre">
             <h5 className="card-title">{props.note.userName}</h5>
       </div>
      <p className="card-text">{props.note.mobileNumber}</p>
      
   </div>
</div>
</div>
*/