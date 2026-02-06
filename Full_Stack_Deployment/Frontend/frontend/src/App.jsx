import React from 'react'
import { useState } from 'react'
import axiose from 'axios'
import { useEffect } from 'react'

const App = () => {
  const [data, setdata] = useState([])

  function fetchData() {
    axiose.get('http://localhost:3000/api/node')
      .then((res) => {
        setdata(res.data.node)
      })
  }
  useEffect(() => {
    fetchData()
  }, [])

  function handleSubmit(e) {
    e.preventDefault()

    const { title, description } = e.target.elements

    axiose.post('http://localhost:3000/api/node', {
      title: title.value,
      description: description.value
    })
      .then((res) => {
        fetchData()
      })

      title.value = ''
      description.value = ''
  }

  function handleDelete(noteid) {
    axiose.delete('http://localhost:3000/api/node/' + noteid)
      .then((res) => {
        fetchData()
      })
  }

  function handleUpdate(noteid) {
    const updateTitle = prompt('enter title')
    const updateDescription = prompt('enter description..')

    axiose.put('http://localhost:3000/api/node/' + noteid, {
      title: updateTitle,
      description: updateDescription
    })
      .then((res) => {
        fetchData()
      })
  }

  return (
    <div className='container'>
      <div className="box1">
        <form onSubmit={handleSubmit}>
          <input name='title' type="text" placeholder='enter title' />
          <input name='description' type="text" placeholder='enter description' />
          <button>create node</button>
        </form>
        <h1>this is my first <br /> full_stack project</h1>
      </div>
      <div className="box2">
        {
          data.map((note) => {
            return < div className="box" >
              <h2>{note.title}</h2>
              <h3>{note.description}</h3>
              <div className="but">
                <button onClick={() => { handleDelete(note._id) }} className='del'>Delet</button>
                <button onClick={() => { handleUpdate(note._id) }} className='edit'>Edit</button>
              </div>
            </div>
          })
        }
      </div>
    </div >
  )
}

export default App
