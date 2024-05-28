"use client";

import { FiArrowDownRight } from "react-icons/fi";
import Link from "next/link"


const service = [
  {
    id: 1,
    name: "Web Developer",
    desc: "I am a professional web developer with extensive knowledge and experience in various aspects of website design and development. HTML, CSS, JavaScript, and various frameworks (eg: React.js, Next.js) and backend technologies (Node.js, Laravel). work with I am skilled in custom web application development, responsive design, and user-friendly interface design. Proficient in database management (MySQL, MongoDB) and API integration. We give utmost importance to the client's needs and goals in every project, and are committed to providing the best solutions through accurate and timely delivery. I am dedicated to my work, always try to stay updated about new technologies and tools. Choose me for your web development needs, I will provide you with the highest quality service.",
    href: "",
  },
  {
    id: 2,
    name: "UI/UX Designer",
    desc: "I am an experienced UI/UX designer, specializing in user experience and interface design. Over the past five years, I have worked on a variety of projects to create designs tailored to the needs and demands of users. My goal is to make design simple, beautiful and functional for the user. My Skills:User Research: Prototyping by understanding user needs and usage patterns.Interface Design: Responsive and Interactive UI Design.Tools: Sketch, Adobe XD, Figma, Invision, Photoshop and Illustrator.Prototyping and Testing: Creating interactive prototypes and testing with the user.Collaboration: Working together with developers and stakeholders.Experience:E-commerce sites: Responsive design that improves the user's purchasing experience.Mobile App: User-friendly mobile app design with easy and precise navigation.Web Applications: Clean and functional UI design for complex data and workflows.  I believe, every design can solve user's problem and bring benefits to their life. I am always ready to take on new challenges and create optimal design solutions.",
    href: "",
  },
  // {
  //   id: 3,
  //   name: "Digital Marketing",
  //   desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet deserunt ipsam laborum. Facere, soluta nemo. Et eius accusamus reiciendis sapiente?",
  //   href: "",
  // },
  // {
  //   id: 4,
  //   name: "SEO",
  //   desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet deserunt ipsam laborum. Facere, soluta nemo. Et eius accusamus reiciendis sapiente?",
  //   href: "",
  // }
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
                <p className="text-white/60 w-full h-20">{servi.desc}</p>
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
