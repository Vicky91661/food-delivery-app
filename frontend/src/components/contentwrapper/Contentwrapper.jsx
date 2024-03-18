import React from 'react'

function Contentwrapper({children}) {
  return (
    <div className=' w-[100vw] bg-red-500 overflow-hidden'>
        {children}
    </div>
  )
}

export default Contentwrapper