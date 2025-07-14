import React, { useContext, useState, FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContex } from '../../context/AuthContex'
import { instance } from '../../api/instance'

const Login: React.FC = () => {
  const { loginFn } = useContext(AuthContex)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const navigate = useNavigate()

  const login = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const data = { email, password }
      const response = await instance.post('/auth/login', data)
      loginFn(response.data.access_token)
      navigate('/dashboard')
    } catch (error: any) {
      alert(error?.response?.data?.message || error.message || 'Login failed')
    }
  }

  return (
    <div className='h-[100vh] flex justify-center items-center flex-col'>
      <p className='font-bold text-[40px] leading-[100%]'>Login</p>
      <p className='font-bold text-lg leading-[100%] mt-3'>Please enter your Login and your Password</p>
      <form onSubmit={login} className='mt-[30px] flex-col gap-[22px]'>
        <div className='flex gap-2 relative items-center mb-[22px]'>
          <svg className='absolute left-[10px]' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 21 21">
            <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(2 2)">
              <circle cx="8.5" cy="8.5" r="8" />
              <path d="M14.5 13.5c-.662-2.274-3.2-3.025-6-3.025c-2.727 0-5.27.869-6 3.025" />
              <path d="M8.5 2.5a3 3 0 0 1 3 3v2a3 3 0 0 1-6 0v-2a3 3 0 0 1 3-3" />
            </g>
          </svg>
          <input
            onChange={({ target }) => setEmail(target.value)}
            className='border pt-[13px] pr-[152px] pl-[55px] pb-[12px] rounded-2xl'
            type="email"
            placeholder='Username or Email'
            required
          />
        </div>
        <div className='flex gap-2 relative items-center'>
          <svg className='absolute left-[10px]' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
            <path fill="currentColor" fillRule="evenodd" d="M256 42.667c70.49 0 128 57.695 128 128V256h42.666v213.334H85.333V256H128v-85.333c0-70.305 57.51-128 128-128m0 42.667c-47.331 0-85.334 38.996-85.334 85.333V256h170.667v-85.333c0-46.337-38.003-85.333-85.333-85.333" />
          </svg>
          <input
            onChange={({ target }) => setPassword(target.value)}
            className='border pt-[13px] pr-[152px] pl-[55px] pb-[12px] rounded-2xl'
            type="password"
            placeholder='Password'
            required
          />
        </div>
        <button
          type='submit'
          className='w-[389px] h-[50px] mt-[40px] cursor-pointer border rounded-2xl border-[#36981D] text-[#36981D]'
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
