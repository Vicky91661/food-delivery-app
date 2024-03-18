import Contentwrapper from '../contentwrapper/Contentwrapper'
import React, { useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { FaCirclePlus ,FaCircleMinus} from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import CircleRating from '../circleRating/CircleRating';
import curry from "../../assets/curry.jpeg"

function Curousel() {

    const arr = [1,2,3,4,5,6,6,7,8,9,10]

    const carouselContainer = useRef()
    const navigate = useNavigate()

    const navigation = (dir)=>{
        const container = carouselContainer.current;
        const scrollAmount = dir === "left"?container.scrollLeft -(container.offsetWidth+20): container.scrollLeft + (container.offsetWidth+20)
        container.scrollTo({left:scrollAmount,behavior:"smooth"})
    }
  return (
    <div className='relative '>
        <div className=' flex text-white py-4 px-6 overflow-x-scroll gap-7'>
            <BsFillArrowLeftCircleFill 
                    className=" hidden md:flex absolute top-[50%] w-10 h-10 -left-[0px]"
                    onClick={() => navigation("left")}
            />
            <BsFillArrowRightCircleFill 
                className="hidden md:flex absolute  top-[50%] w-10 h-10 right-0"
                onClick={() => navigation("right")}
            />
            {arr.map((item,index)=>{
                return (<div key={index} className=' xl:min-w-[17vw] min-w-[45vw] md:min-w-[30vw] p-2 rounded-xl shadow-2xl cursor-pointer' ref={carouselContainer}>
                <div className=' flex flex-col gap-2' >
                    <div className=' flex flex-col items-center'>
                        <img className=' rounded-xl  object-cover object-center' src={curry} alt="" />
                    </div>
                    <div className='flex justify-between'>
                            <CircleRating rating={5}/>
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

export default Curousel