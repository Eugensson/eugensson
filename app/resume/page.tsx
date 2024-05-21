"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaIdBadge,
  FaUniversity,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiCloudinary,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { motion } from "framer-motion";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

const about = {
  icon: <FaIdBadge />,
  title: "About me",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, adipisci ut maiores nesciunt dolor nemo.",
  info: [
    { fieldName: "Name", fieldValue: "Serhii" },
    { fieldName: "Phone", fieldValue: "(+380) 633 062 931" },
    { fieldName: "Email", fieldValue: "eugensson.25@gmail.com" },
    { fieldName: "Experience", fieldValue: "1+ Years" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "En, Pl, Ua, Ru" },
  ],
};

const experience = {
  icon: <FaIdBadge />,
  title: "My experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim illo minus magni distinctio a! Incidunt.",
  items: [
    {
      company: "Freelance",
      position: "Full Stack Developer",
      duration: "2023-Present",
    },
    {
      company: "Ukrecoproject ltd.",
      position: "Project Manager",
      duration: "2022-2009",
    },
  ],
};

const education = {
  icon: <FaUniversity />,
  title: "My education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim illo minus magni distinctio a! Incidunt.",
  items: [
    {
      institution: "Online Course Platform GOIT",
      degree: "Certified Full Stack Web Developer",
      duration: "09/2022-08/2023",
    },
    {
      institution: "Cherkasy State Technological University",
      degree: "Diploma in Engineering specialty",
      duration: "1996-2001",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim illo minus magni distinctio a! Incidunt.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaJs />,
      name: "javascrypt",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiExpress />,
      name: "express",
    },
    {
      icon: <SiMongodb />,
      name: "mongoDB",
    },
    {
      icon: <FaGitAlt />,
      name: "git",
    },
    {
      icon: <SiCloudinary />,
      name: "cloudinary",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

export default function Resume() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <Tabs
        defaultValue="experience"
        className="w-full flex flex-col xl:flex-row gap-[60px]"
      >
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About me</TabsTrigger>
        </TabsList>
        <div className="min-h-[70vh] w-full">
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {experience.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid lg:grid-cols-2 gap-[30px]">
                  {experience.items.map(
                    ({ company, position, duration }, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{company}</p>
                        </div>
                      </li>
                    )
                  )}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {education.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid lg:grid-cols-2 gap-[30px]">
                  {education.items.map(
                    ({ institution, degree, duration }, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{institution}</p>
                        </div>
                      </li>
                    )
                  )}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          <TabsContent value="skills" className="w-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
              </div>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map(({ icon, name }) => (
                    <li key={name}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          <TabsContent
            value="about"
            className="w-full text-center xl:text-left"
          >
            <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {about.description}
              </p>
              <ul className="grid xl:grid-cols-2 gap-8 max-w-[620px] mx-auto xl:mx-0">
                {about.info.map(({ fieldName, fieldValue }, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-center xl:justify-start gap-2"
                  >
                    <span className="text-white/60">{fieldName}</span>
                    <span className="text-lg">{fieldValue}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </motion.section>
  );
}
