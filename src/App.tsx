import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { apiFriends, apiEarn } from './api/api'
import { Footer } from './components/Footer'
import { Route, Routes } from "react-router-dom"
import { Friends } from './pages/Friends'
import { Earn } from './pages/Earn'

export interface Data {
  title: string,
  number: string
}

function App() {
  const [friends, setFriends] = useState<Array<Data>>([])
  const [earn, setEarn] = useState<Array<Data>>([])
  useEffect(() => {
    const loadData = async () => {
      if (friends.length === 0) {
        const response = await axios.get(apiFriends)
        setFriends(response.data)
  
      }
      if (earn.length === 0) {
        const response = await axios.get(apiEarn)
        setEarn(response.data)
  
      }
    }
    loadData()
  },[friends])


  return (
    <>
    <div className={`h-screen flex flex-col items-center`}>
      <div className='flex-1 overflow-y-scroll relative content-wrapper'>
        <Routes>
          <Route path='/' element={<Friends friends={friends}/>} />
          <Route path='/earn' element={<Earn earn={earn}/>} />
        </Routes>
      </div>
      <Footer />
    </div>
    </>
  )
}

export default App
