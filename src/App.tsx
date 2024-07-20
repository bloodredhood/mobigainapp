import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { api } from './api/api'
import { Footer } from './components/Footer'
import { Route, Routes } from "react-router-dom"
import { Friends } from './pages/Friends'
import { Earn } from './pages/Earn'

export interface Friend {
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
  },[state])


  return (
    <>
    <div className={`h-screen flex flex-col items-center`}>
      <div className='flex-1 overflow-y-scroll relative content-wrapper'>
        <Routes>
          <Route path='/' element={<Friends friends={state}/>} />
          <Route path='/earn' element={<Earn />} />
        </Routes>
      </div>
      <Footer />
    </div>
    </>
  )
}

export default App
