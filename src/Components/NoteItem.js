import React from 'react'

function NoteItem(props) {


    return (
      
       <>
      <div className="col-md-4 mt-4">  
        <div className="card" style={{width: "20rem"}}>
           <div className="card-body">
               <div className="d-flex align-items-centre">
                     <h5 className="card-title">{props.note.title}</h5>
                     <i className="far fa-trash-alt ms-auto"></i>
                     <i className="fas fa-edit ms-2"></i>
               </div>
              <p className="card-text">{props.note.description}</p>
              
           </div>
        </div>
     </div>
     </>

    )
}

export default NoteItem
