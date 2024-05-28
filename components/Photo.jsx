"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div initial={{opacity:"0"}} animate={{opacity: 1, transition: {delay:2 , duration: 0.4, ease: "easeIn"}}}>
        <div className="w-[360px] h-[360px] xl:w-[400px] xl:h-[400px] mix-blend-lighten absolute xl:mt-10">
          <Image className="w-full h-full md:mr-5"
            src="/assets/myimage.jpg" 
            priority 
            quality={100} 
            fill 
            alt="portfolioImage" 
            className="object-contain"
          />
        </div>
      </motion.div>
      
      {/* Circle */}
      <motion.svg 
        className="w-[400px] h-[400px] xl:h-[506px]" 
        fill="transparent" 
        viewBox="0 0 540 540"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle 
          cx="253" 
          cy="253" 
          r="250" 
          stroke="#00ff99" 
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </motion.svg>
    </div>
  )
}

export default Photo
