"use client"

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaFigma,
  FaReact,
  FaNodeJs,
} from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about Data
const aboutData = [
  {
    title: "About Me",
    description:"I am Minhajul Islam Ruhan. I provide a premium website designing service that includes all 2024 standard design elements and offers clients unique and innovative responsive web solutions that will completely transform the way they do business.I prefer to do business in a friendly, open-minded manner. If you think along the same lines, we will work together! Feel free to drop me a message! Note: This gig can offer landing page design and any other UX UI related project and if you don't have any idea then tell me about your business and I can help you with design. Thank you and see you again.",
    info: [
      { fielName: "Name", fielValue: "Minhajul Islam Ruhan" },
      { fielName: "Phone", fielValue: "+88 01580361156" },
      { fielName: "Experience", fielValue: "2 years" },
      { fielName: "Skype", fielValue: "ruhan.12" },
      { fielName: "Nationality", fielValue: "Bangladeshi" },
      { fielName: "JavaScript Developer", fielValue: "Minhajul Islam Ruhan" },
      { fielName: "Language", fielValue: "Bengali, English" },
    ]
  }
]

// Experience
const experienceData = [
  {
    title: "My Experience",
    description: "I am Minhajul Islam Ruhan. I provide a premium website designing service that includes all 2024 standard design elements and offers clients unique and innovative responsive web solutions that will completely transform the way they do business.",
    items: [
      {
        companyName:"Freelancer at Upwork, Fiver, ",
        position: "Junior Developer",
        duration: "2023 - Present",
      },
      // {
      //   companyName: "Software Firm in Finland",
      //   position: "Junior Developer",
      //   duration: "2023- Present",
      // },
      // {
      //   companyName: "Software Firm in Finland",
      //   position: "Junior Developer",
      //   duration: "2023- Present",
      // },
      // {
      //   companyName: "Software Firm in Finland",
      //   position: "Junior Developer",
      //   duration: "2023- Present",
      // },
    ]
  }
]

const educationData = [
  {
    title: "My Education",
    description: "I am Minhajul Islam Ruhan. I provide a premium website designing service that includes all 2024 standard design elements and offers clients unique and innovative responsive web solutions that will completely transform the way they do business.",
    items: [
      {
        institute: "LWS Learn With Sumit",
        degree: "Full Stack Web Development",
        duration: "2022 - 2023",
      },
      {
        institute: "Anisul Islam",
        degree: "Front-end Track",
        duration: "2022",
      },
    ]
  }
]

const skillData = [
  {
    title: "My Skills",
    description:`HTML5: Creates my and structural web pages using the latest version of HTML.
    CSS3: Timing and responsive design using advanced CSS techniques and features.
    Tailwind CSS: Fast and efficient styling using a utility-first CSS framework.JavaScript: In JavaScript content for dynamic web content.
    React.js: Interactive user interface and computer-based architecture using the React library.
    Next.js: React-based framework with server-side rendering and client site generation.By combining these technologies, I can create effective and media-friendly websites and web apps.`,
    skillList: [
      { icon: <FaHtml5 />, name: "HTML 5" },
      { icon: <FaCss3 />, name: "CSS 3" },
      { icon: <SiTailwindcss />, name: "Tailwindcss" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <FaReact />, name: "React.js" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <FaFigma />, name: "Template Design" },
    ]
  }
]

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col xl:flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          {/* Content */}
          <div className="min-h-[70vh] w-full ">
            <TabsContent value="experience">
           <div className="flex flex-col gap-[30px] text-center xl:text-left">
             {experienceData.map((exp, index) => (
             <div key={index}>
             <h2 className="text-2xl font-bold">{exp.title}</h2>
              <p className="text-white/60 text-md mb-5 mt-5">{exp.description}</p>
        <ScrollArea className="h-[400px]">
          <ul className="">
            {exp.items.map((expItem, index) => { // Corrected this line
              return (
                <li key={index} className="bg-accent text-primary h-[184px] py-2 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "> {/* Added key prop here */}
                  <p className="text-xl font-semibold">{expItem.companyName}</p>
                  <p className="text-md font-semibold">{expItem.position}</p>
                  <p className="text-md font-semibold">{expItem.duration}</p>
                </li>
              )
            })}
          </ul>
        </ScrollArea>
      </div>
    ))}
  </div>
</TabsContent>

            <TabsContent value="education">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                {educationData.map((edu, index) => (
                  <div key={index}>
                    <h2 className="text-2xl font-bold">{edu.title}</h2>
                    <p className="text-md text-white/60">{edu.description}</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mt-5">
                    {edu.items.map((item, idx) => (
                      <div key={idx} className="bg-accent text-primary py-5 px-10 rounded-xl">
                        <h3 className="text-xl font-bold">{item.institute}</h3>
                        <p className="text-md font-semibold">{item.degree}</p>
                        <p className="text-md font-semibold">{item.duration}</p>
                      </div>
                    ))}
                    </div>
                </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="skills">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                {skillData.map((skill, index) => (
                  <div key={index}>
                    <h2 className="text-4xl font-semibold">{skill.title}</h2>
                    <p className="text-white/60 text-md mt-5">{skill.description}</p>
                    <div className="flex flex-wrap justify-center xl:justify-start gap-4 mt-4">
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl-gap-[30px]">
                      {skill.skillList.map((skillItem, idx) => (
                        <li key={idx} className="m-5 p-5">
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                            <TooltipTrigger className="w-[150px] h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group-hover:text-accent">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skillItem.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              {skillItem.name}
                            </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="about">
              <div className="flex flex-col gap-[30px] text-center xl:text-left m-5">
                {aboutData.map((about, index) => (
                  <div key={index}>
                    <h2 className="text-4xl font-semibold">{about.title}</h2>
                    <p className="text-white/60 text-md mt-5">{about.description}</p>
                    <div className="mt-4">
                      {about.info.map((infoItem, idx) => (
                        <div key={idx} className="flex justify-between border-b border-white/40 mt-5">
                          <span className="text-xl font-bold mr-6 text-accent">{infoItem.fielName}:</span>
                          <span className="text-md text-white/80 justify-left">{infoItem.fielValue}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
