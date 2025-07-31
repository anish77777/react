import React,{use, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'


function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")
    //not handleSubmit here
    //register is form hanling method
    const login = async (data) => {
        setError("")
        try {
            const session = await authService.login(data)
            // data as a object
            if (session) {
                const userData = await authService.getCurrentUser()
                //authLogin
                if (userData) dispatch(authLogin(userData))
                //store login
            }
        } catch (error) {
            setError(error.message)
        }
    }
  return (
    <div>
      
    </div>
  )
}
import { Form } from 'react-router-dom'

export default Login
