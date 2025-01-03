import React from 'react'

function LoginCard() {
  return (
    <div className=" w-11/12 max-w-[700px] px-10 py-20 bg-white border-s-8 border-gray-100 rounded-full mt-2">
        <div className='flex flex-col items-center opacity-1'>
            <div className='text-xl text-blue-950 mb-5 shadow-black shadow-inner'>
                <h1 className='text-7xl font-semibold items-center font-serif mr-5 mt-5 mb-5 ml-5'>Homify</h1>
            </div>
            <div className='overflow-hidden rounded-full shadow-black shadow-2xl animate-pulse' >
                <img  src="https://images.pexels.com/photos/18078870/pexels-photo-18078870/free-photo-of-alexandra-road-estate-in-grayscale-london-united-kingdom.jpeg?auto=compress&cs=tinysrgb&w=600&h=350"/>
            </div>
        </div>

    </div>
  )
}

export default LoginCard