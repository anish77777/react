import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
      <div className='bg-gray-300 text-amber-300 text-3xl p-4 flex justify-center'>
      User: {userid}
    </div>
  )
}
//userid is accessed in this component by using useParams
export default User
