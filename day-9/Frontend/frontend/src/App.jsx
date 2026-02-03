import React, { useEffect, useState } from 'react'

import axios from 'axios'

const App = () => {

  const [note, setnote] = useState([])

  function fetchnode() {
    axios.get('http://localhost:3000/node')
      .then((res) => {
        setnote(res.data.node);
      })
  }

  useEffect(() => {
    fetchnode()
  }, [])

  function submitHandler(e){
    e.preventDefault()

    const {title, description} = e.target.elements
    
    axios.post('http://localhost:3000/node', {
      title: title.value,
      description: description.value
    })
    .then((res)=>{
      fetchnode()
    })
  }

  function handleDelete(noteId){
    axios.delete('http://localhost:3000/node/'+noteId)
    .then((res)=>{
      fetchnode()
    })
  }


  return (
    <div className='container'>
      <div className="box1">
        <form onSubmit={submitHandler}>
          <input name='title' type="text" placeholder='enter title' />
          <input name='description' type="text" placeholder='enter description' />
          <button>create node</button>
        </form>
      </div>



      {
        note.map((note) => {
          return <div className="box">
            <h2>{note.title}</h2>
            <h3>{note.description}</h3>
            <button onClick={()=>{handleDelete(note._id)}}>Delete</button>
          </div>
        })
      }
    </div>
  )
}

export default App