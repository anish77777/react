
import { use, useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch(
  )

  useEffect(() => {
    authService.getCurrentUser()
    .then()
  }, [third])
  
  
  return (
    <>
      <h1>Starting a blog app with app write</h1>
    </>
  )
}

export default App
