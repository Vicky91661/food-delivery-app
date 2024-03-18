import React from 'react'
import logo from '../../assets/logo.png'
function Navbar() {
  return (
    <div className=' text-white flex bg-black items-center justify-between px-[4vw] py-[1vh]'>
      <div>
        <img className=' w-[70px] h-[70px] object-cover object-center' src={logo} alt="" />
      </div>
      <div className='flex gap-[10vw] text-lg'>
        <div>
          <button className=' bg-red-700 px-4 py-1 rounded-md text-center'>Login</button>
        </div>
        <div>
          <button className=' bg-red-700 px-4 py-1 rounded-md text-center'>Logout</button>
        </div>
        <div>
          profile
        </div>
      </div>
    </div>
  )
}

export default Navbar