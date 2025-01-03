import React from 'react'
import Form from './Form'
import LoginCard from './LoginCard'


function Login() {
  return (
    <div className='lg:flex h-screen w-full flex-col md:flex-row bg-slate-950'>
        <div className="lg:flex w-1/2 flex items-center justify-center lg:w-1/2 rounded-xl">      
            <Form/>
        </div>
        <div className=" hidden lg:flex w-1/2 items-center justify-center lg:w-1/2 rounded-xl">      
            <LoginCard/>
        </div> 

    </div>
  )
}

export default Login