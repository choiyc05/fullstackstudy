import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const App = () => {
  const [c, setC] = useState({"name":"","desc":""})     // const로 사용
  const event = (e) => {
    console.log(e.target)
    console.log(e.target.name)
    console.log(e.target.value)
    setC({...c, [e.target.name] : e.target.value })
  }
  

  return (
    <>
      <input type='text' value={c.name} name="name" onChange={event} />
      <input type='text' value={c.desc} name="desc" onChange={event} />
      </>
  )
}

export default App
