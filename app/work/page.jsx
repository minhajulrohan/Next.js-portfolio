"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from 'next/image'
import WorksliderBTN from "@/components/WorksliderBTN";

const projects = [
  {
    num: "01",
    category: "Front-end",
    title: "Project 1",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
    image: "/assets/work/project1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Full Stack",
    title: "Project 2",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
    image: "/assets/work/project2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Front-end",
    title: "Project 3",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you",
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "React.js" },
      { name: "Next.js" },
    ],
    image: "/assets/work/project3.jpg",
    live: "",
    github: "",
  },
];

const WorkPage = () => {
  const [currentProject, setCurrentProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndesx = swiper.activeIndex;

    setCurrentProject(projects[currentIndesx]);

  }
  return (
    <motion.section className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
            {/* Outline project number */}
            <div className="text-6xl leading-none font-extrabold text-transparent text-outline">
              {currentProject.num}
            </div>
            {/* Project category name */}
            <h2 className="text-[35px] leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
              {currentProject.category} Project
            </h2>
            {/* Project description */}
            <p className="text-white/60">{currentProject.description}</p>
            {/* Project stack */}
            <ul className="flex gap-6">
              {currentProject.stack.map((item, index) => (
                <li className="text-xl text-accent" key={index}>
                  {item.name}
                  {index !== currentProject.stack.length - 1 && ","}
                </li>
              ))}
            </ul>
            {/* Border */}
            <div className="border border-white/20"></div>
            <div className="flex items-center gap-4">
              
            {/* Live Projects Button */}
            <Link href={currentProject.live}>
              <TooltipProvider delayDuration={100 }>
                <Tooltip>
                  <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center  group">
                    <BsArrowUpRight className="text-white text-xl" />
                  </TooltipTrigger>
                  <TooltipContent>Live Projects</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
            {/* Live Projects Button */}
              <Link href={currentProject.github}>
              <TooltipProvider delayDuration={100 }>
                <Tooltip>
                  <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center  group">
                    <BsGithub className="text-white text-xl" />
                  </TooltipTrigger>
                  <TooltipContent>Github Repository</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
            </div>
              
            </div>
            
          </div>
         <div className="w-full xl:w-[50%]">
          <Swiper spaceBetween={30} slidesPreView={1} onSlideChange={handleSlideChange} className="xl:h-[520px] mb-12">
            {projects.map((project, index) => {
              return (
                <SwiperSlide key={index} className="w-full">
                 <div className="h-[460px] relative group flex justify-center bg-pink-50/20">
                  {/* overlay */}
                  <div className="absolute top-0 bottom-0 w-full bg-black/10 z-10 "></div>
                  {/* image */}
                  <div className="relative w-full">
                    <Image src={project.image} className="object-cover" fill alt="slideIamge"/>
                  </div>
                 </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
         </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WorkPage;
