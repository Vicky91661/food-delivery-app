import React from 'react'
import chickenSoup from "../../assets/chickenSoup.jpeg"
import { FaCirclePlus ,FaCircleMinus} from "react-icons/fa6";
function OneProduct() {
  return (
    <div className='text-white gap-10 xl:gap-0 flex flex-col xl:flex xl:flex-row items-center xl:items-stretch py-10 justify-around'>

      <div className='image w-[90vw] xl:w-[40vw] rounded-md overflow-hidden bg-black p-4 shadow-2xl'>
        <img src={chickenSoup} alt="" />
      </div>

      <div className='about flex flex-col gap-5 w-[90vw] xl:w-[40vw]  rounded-md  bg-black p-4 shadow-2xl'>
          <h1 className='text-[6vw] md:text-[6vw] xl:text-[3vw] font-bold'>Title : Chicken Soup</h1>
          <h4 className='text-[3vw] md:text-[3vw]  xl:text-[1vw] opacity-60'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam iste, officia cupiditate
             ea quasi ex amet vero accusamus nam eveniet, incidunt, quia error ipsam nisi animi! Hic atque placeat magni?</h4>
          <div className='flex items-center justify-between'>
            <button className='bg-white text-[4vw] md:text-[3vw] xl:text-[1vw] text-red-700 font-semibold p-[2px] px-[3vw] py-[1vw] md:px-[5vw] md:py-[1.5vw] xl:px-[2vw] xl:py-[0.5vw] rounded-md'>Add to cart</button>
            <div className=' flex gap-4 text-[6vw] md:gap-6 xl:gap-10  md:text-[5vw] xl:text-[2vw]  bg-red-700 rounded-full'>
                <FaCirclePlus/>
                <FaCircleMinus />
            </div>
          </div>
      </div>
    
    </div>
  )
}

export default OneProduct