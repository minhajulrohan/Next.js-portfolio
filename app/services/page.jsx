"use client";

import { FiArrowDownRight } from "react-icons/fi";
import Link from "next/link"


const service = [
  {
    id: 1,
    name: "Web Developer",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet deserunt ipsam laborum. Facere, soluta nemo. Et eius accusamus reiciendis sapiente?",
    href: "",
  },
  {
    id: 2,
    name: "UI/UX Designer",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet deserunt ipsam laborum. Facere, soluta nemo. Et eius accusamus reiciendis sapiente?",
    href: "",
  },
  {
    id: 3,
    name: "Digital Marketing",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet deserunt ipsam laborum. Facere, soluta nemo. Et eius accusamus reiciendis sapiente?",
    href: "",
  },
  {
    id: 4,
    name: "SEO",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet deserunt ipsam laborum. Facere, soluta nemo. Et eius accusamus reiciendis sapiente?",
    href: "",
  }
];
import { motion } from "framer-motion";


const services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
       <motion.div 
       initial={{opacity:0 }} 
       animate={{
        opacity: 1, 
        transition: {delay: 2.4, duration:0.4, ease: "easeIn"},
        }} 
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
        {
          service.map((servi, id) => {
            return (
              // toop 
              <div key={id} className="flex-1 flex flex-col justify-center gap-6 group ">
                {/* titile */}
                <div className="w-full flex justify-between items-centermarker:">
                  <h2 className="text-[36px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 cursor-pointer">{servi.name}</h2>
                <Link href={servi.href} className="w-[50px] h-[50px] rounded-full  bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45">
                  <FiArrowDownRight className="text-primary text-3xl" />
                </Link>
                </div>
                {/* description */}
                <p className="text-white/60">{servi.desc}</p>
                <div className="border border-white/20 w-full"></div>
              </div>
            )
          })
        }
        </motion.div> 
      </div>
    </section>
  )
}

export default services
