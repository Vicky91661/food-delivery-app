import React from 'react'
import { FaCirclePlus ,FaCircleMinus} from "react-icons/fa6";
import burger from "../../assets/burger.jpeg"
function AllProducts() {

    const arr = [1,2,3,4,5,6,7,8,90,,34,4,5,34,42,32,3]
  return (
    <div className='text-white flex p-20 gap-10'>
        <div className='left w-[20vw] bg-red-600 rounded-md shadow-2xl p-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum odit unde accusantium iste sint deleniti neque consequuntur non fugiat necessitatibus explicabo voluptate quia
            , veniam id commodi quam totam aut quidem.
        </div >
        <div className='right w-[75vw] bg-orange-600 rounded-md shadow-2xl p-5 flex flex-wrap  gap-5'>
            {arr.map((it,i)=>{
                return (<div key={i} className=' bg-green-500 w-[10vw] p-2 rounded-xl shadow-2xl cursor-pointer'>
                <div className=' flex flex-col gap-2' >
                    <div className=' flex flex-col items-center'>
                        <img className=' rounded-xl  object-cover object-center' src={burger} alt="" />
                    </div>
                    <div className='flex justify-between'>
                            {/* <CircleRating rating={5}/> */}
                            <h1 className=' bg-red-700 p-1 text-sm md:text-base  xl:text-lg rounded-md'>non-veg</h1>
                    </div>
                    <div className='flex items-center justify-between'>
                        <h1  className='text-lg md:text-xl  xl:text-xl'>Butter Chicken</h1>
                        <h1  className='text-lg  md:text-xl xl:text-xl'>400</h1>
                    </div>
                    <div className='flex items-center justify-between'>
                        <button className='bg-white text-sm text-red-700 font-semibold p-[2px] md:p-1 md:px-2 rounded-md'>Add to cart</button>
                        <div className=' flex gap-4 text-lg xl:text-2xl  bg-red-700 rounded-full'>
                            <FaCirclePlus/>
                            <FaCircleMinus />
                        </div>

                    </div>
                </div>
            </div>)
            })}
                
        </div>
    </div>
  )
}

export default AllProducts