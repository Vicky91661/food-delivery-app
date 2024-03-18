import hero from "./../../../assets/hero.jpeg"
import React, { useEffect, useRef, useState } from "react";
import {useAnimation , motion ,animate} from "framer-motion";
import { cn } from "../../../utils/cn";

function Herosection() {
  return (
    <div className="relative h-[70vh] md:h-screen  bg-black flex justify-center overflow-hidden">
      <BackgroundCellCore />
      <div className="bg-cover bg-center w-[100vw] md:h-[90vh] relative text-white flex justify-center items-center z-10" style={{ backgroundImage: `url(${hero})` }}>
        <div className='w-[100vw] h-[40vh] bg-gradient-to-b  z-40 from-[rgba(0,0,0,1)] to-rgba(17,17,17,0.8458158263305322) absolute top-0'></div>
        <div className='w-[100vw] h-[60vh] bg-gradient-to-t  z-40 from-[rgba(0,0,0,1)] to-rgba(17,17,17,0.6) absolute bottom-0'></div>
        <div className='w-full h-full absolute z-30' style={{
                    background: 'radial-gradient(circle, rgba(0,0,0,0.46234243697479) 36%, rgba(17,17,17,0.01) 100%)'}}></div>
        <div className='leading-[15vw] md:leading-[6.5vw] text-center flex flex-col gap-1 z-[100]'>
            <motion.h1 initial={{ opacity: 0, scale: 1.2 }}
                    animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 , type: "spring", stiffness: 30 }} className=' font-medium text-[20vw] md:text-[8vw]  text- uppercase'>The</motion.h1>
            <motion.h1 initial={{ opacity: 0, scale: 1.2 }}
                    animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, type: "spring", stiffness: 30  }} className=' font-medium text-[20vw] md:text-[8vw] uppercase'>Hungry</motion.h1>
            <motion.h1 initial={{ opacity: 0, scale: 1.2 }}
                    animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 , type: "spring", stiffness: 30 }} className=' font-medium text-[20vw] uppercase md:text-[8vw]'>Palette</motion.h1>
            <motion.h1 initial={{ opacity: 0, y: "100%" }}
                    animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 , type: "spring", stiffness: 30 }}className=' text-red-700 font-medium text-[] md:text-[1vw] uppercase after:'>Elevating Dining to a Whole New Level!</motion.h1>
        </div>
    </div>

    </div>
  );
};

const BackgroundCellCore = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleMouseMove = (event) => {
    const rect = ref.current && ref.current.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const size = 300;

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="h-[60vh] absolute inset-0  z-20"
    >
      <div className="absolute h-[40vh] cursor-pointer inset-y-0  overflow-hidden">
        <div className="absolute h-full w-full pointer-events-none -bottom-2 z-[110]" style={{ maskImage: 'linear-gradient(to bottom, transparent, black)' }}></div>
        <div
          className="absolute inset-0 z-20 bg-transparent"
          style={{
            maskImage: `radial-gradient(
              ${size / 4}px circle at center,
             white, transparent
            )`,
            WebkitMaskImage: `radial-gradient(
              ${size / 4}px circle at center,
              white, transparent
            )`,
            WebkitMaskPosition: `${mousePosition.x - size / 2}px ${
              mousePosition.y - size / 2
            }px`,
            WebkitMaskSize: `${size}px`,
            maskSize: `${size}px`,
            pointerEvents: "none",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        >
          <Pattern cellClassName="border-red-600 relative z-30" />
        </div>
        <Pattern className="opacity-[0.5]" cellClassName="border-neutral-700" />
      </div>
    </div>
  );
};

const Pattern = ({
  className,
  cellClassName,
}) => {
  const x = new Array(47).fill(0);
  const y = new Array(30).fill(0);
  const matrix = x.map((_, i) => y.map((_, j) => [i, j]));
  const [clickedCell, setClickedCell] = useState(null);

  return (
    <div className={cn("flex flex-row  relative z-100", className)}>
      {matrix.map((row, rowIdx) => (
        <div
          key={`matrix-row-${rowIdx}`}
          className="flex flex-col  relative z-20 border-b"
        >
          {row.map((column, colIdx) => {
            const controls = useAnimation();

            useEffect(() => {
              if (clickedCell) {
                const distance = Math.sqrt(
                  Math.pow(clickedCell[0] - rowIdx, 2) +
                    Math.pow(clickedCell[1] - colIdx, 2)
                );
                controls.start({
                  opacity: [0, 1 - distance * 0.1, 0],
                  transition: { duration: distance * 0.2 },
                });
              }
            }, [clickedCell]);

            return (
              <div
                key={`matrix-col-${colIdx}`}
                className={cn(
                  "bg-transparent border-l border-b border-neutral-200",
                  cellClassName
                )}
                onClick={() => setClickedCell([rowIdx, colIdx])}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  whileHover={{
                    opacity: [0, 1, 0.5],
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "backOut",
                  }}
                  animate={controls}
                  className="bg-[rgba(3,3,3,0.82)] h-12 w-12" //  rgba(14, 165, 233, 0.15) for a more subtle effect
                ></motion.div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Herosection