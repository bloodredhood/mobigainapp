import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { api } from './api/api'

function App() {
  const [state, setState] = useState([])
  useEffect(() => {
    const loadData = async () => {
      if (state.length !== 0) {
        const data = await axios.get(api)
          console.log("hui")
          console.log(data)
          setState(data)
  
      }
    }
    loadData()
  },[state])
  return (
    <>
      {state.map((el,idx) => {
        <div>{idx}{el.title}{el.number}</div>
      })}
    </>
  )
}

export default App
