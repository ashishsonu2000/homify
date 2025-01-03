import React from 'react'

function test() {
  return (
    <div>
        <div className="w-full flex items-center justify-center lg:w-1/2 rounded-xl">      
        <Form />
      </div>
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200 ">
        <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce" />
          
          <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg"/>
          
        
      </div>


    </div>
  )
}

export default test