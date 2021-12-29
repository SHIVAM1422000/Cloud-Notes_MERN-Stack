import React from 'react'

function NoteItem(props) {
    return (
        <div>
            <div>
                <h1 className='text-success'>{props.title}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default NoteItem
