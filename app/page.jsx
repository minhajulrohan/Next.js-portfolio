import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Link from 'next/link'
// Componets
import Social from "@/components/Social";
import State from "@/components/State";
import Photo from "@/components/Photo";
import Servi from "@/components/Servi";
import Resume from "@/components/Rusume";
import Work from "@/components/Work";
import Contact from "@/components/Contact";



const page = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">

        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text Area */}
          <div className="text-center xl:text-left order-2 xl:order-none ">
            <span className="text-xl">Software Devloper</span>
            <h1 className="h1 mb-6">Hello I'm <br /> <span className="text-accent">Minhajul Islam Ruhan</span> </h1>
            <p className="mx-w-[300px] mb-9 text-white/80 ">
              I’m Ruhan , a creative Product Design I’ve been helping Businesses to solve their problems with my design for 2 years Exprience and I'm Front-end Web Developer who is Interested in Creating error-free Websites with 100% Client Satisfaction. I'm working as a Junior Developer.
            </p>
          
          {/* Button and Social */}
          <div className="flex flex-col xl:flex-row items-center gap-2 m-5">
            <Link href="https://drive.google.com/file/d/1V5H0WCmwYdNzRAtl_fdgBV_f_ItfURsS/view?usp=drive_link">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
              <span className="">Download CV</span>
              <FiDownload className="text-xl" />
          </Button>
          </Link>
          <div className="mb-8 xl:mb-0">
          <Social containerStyles="flex gap-6"  iconStyle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:trasition-all duration-500" /> 
        </div>
              
         </div>

          </div>
          {/* photo area */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0 xl:mr-35">
            <Photo />
          </div>

        </div>
        {/* State */}
        <State />
        <div className="mt-10">
          <Servi />
        </div>
        <Resume />
        <Work />
        <Contact />
      </div>
    </section>
  )
}

export default page
