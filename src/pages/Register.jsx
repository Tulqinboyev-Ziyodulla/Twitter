import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from "../assets/images/logo.svg"
import LoginInput from '../components/Input'
import Button from '../components/Button'
import loading from "../assets/images/loading.png"
import toast, { Toaster } from 'react-hot-toast'
import { Context } from '../context/Index'

function Register() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const { setRegister } = useContext(Context)

  function handleRegisterSubmit(e) {
    e.preventDefault()
    const data = {
      login: e.target.name.value.trim(),
      password: e.target.tel.value.trim()
    }
    setIsLoading(true)
    toast.success(`Successfully registered "${data.login.toUpperCase()}"`)
    setTimeout(() => {
      setRegister(data)
      navigate(-1)
    }, 800)
  }

  return (
    <form onSubmit={handleRegisterSubmit} className='w-[670px] mx-auto mt-16 pb-5' autoComplete='off'>
      <Toaster position="top-right" reverseOrder={false} />
      <Link to={"/"}>
        <img className='mx-auto' src={Logo} alt="logo img" width={40} height={33} />
      </Link>
      <h2 className='font-bold text-2xl leading-[39px] mt-11 mb-9'>Create an account</h2>
      <LoginInput extraStyle="mb-6" placeholder="Name" name="name" type="text" />
      <LoginInput placeholder="Phone number" name="tel" type="tel" />
      <Link to={"/"} className='mt-7 block text-[#1DA1F2] text-sm leading-6'>Use email</Link>
      
      <div className="mt-10">
        <div className="flex space-x-2">
          <select className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Month</option>
          </select>
          <select className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Day</option>
          </select>
          <select className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Year</option>
          </select>
        </div>
      </div>

      <Button extraStyle="mt-16 h-[59px] hover:bg-transparent border-2 hover:border-[#1DA1F2] hover:text-[#1DA1F2] duration-300" type="submit">
        {isLoading ? <img className='scale-150 mx-auto' src={loading} alt="loading img" width={22} /> : "Next"}
      </Button>
    </form>
  )
}

export default Register
