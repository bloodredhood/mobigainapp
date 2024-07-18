import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { api } from './api/api'

interface Friend {
  title: string,
  number: string
}

function App() {
  const [state, setState] = useState<Array<Friend>>([])
  useEffect(() => {
    const loadData = async () => {
      if (state.length === 0) {
        console.log(api)
        const response = await axios.get(api)
          setState(response.data)
  
      }
    }
    loadData()
    console.log(state)
  },[state])
  return (
    <>
      {state.map((el,idx) => 
        <div>{idx + 1}{el.title}{el.number}</div>
        
      )}
    </>
  )
}

export default App
