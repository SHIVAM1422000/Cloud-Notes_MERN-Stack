import React from 'react'

function NoteItem(props) {


    return (
      
       <>
      <div className="col-md-4 mt-4">  
        <div class="card" style={{width: "18rem"}}>
           <div class="card-body">
              <h5 class="card-title">{props.note.title}</h5>
              <p class="card-text">{props.note.description}  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum numquam labore facere corrupti, quidem fugiat deserunt recusandae molestiae suscipit, veritatis reiciendis. 
              Assumenda, eveniet. Porro aliquam accusamus adipisci 
              assumenda iusto distinctio animi necessitatibus deserunt debitis?</p>
           </div>
        </div>
     </div>
     </>

    )
}

export default NoteItem
