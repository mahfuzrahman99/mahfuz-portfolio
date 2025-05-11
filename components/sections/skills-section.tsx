"use client"

import type React from "react"

import { useRef, memo } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGraphql,
  SiDocker,
  SiGit,
  SiJest,
  SiFigma,
} from "react-icons/si"
import { cn } from "@/lib/utils"

type Skill = {
  name: string
  icon: React.ReactNode
  color: string
}

const frontendSkills: Skill[] = [
  { name: "React", icon: <SiReact className="h-6 w-6 sm:h-8 sm:w-8" />, color: "text-[#61DAFB]" },
  { name: "Next.js", icon: <SiNextdotjs className="h-6 w-6 sm:h-8 sm:w-8" />, color: "text-foreground" },
  { name: "TypeScript", icon: <SiTypescript className="h-6 w-6 sm:h-8 sm:w-8" />, color: "text-[#3178C6]" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="h-6 w-6 sm:h-8 sm:w-8" />, color: "text-[#06B6D4]" },
  { name: "Redux", icon: <SiRedux className="h-6 w-6 sm:h-8 sm:w-8" />, color: "text-[#764ABC]" },
]

const backendSkills: Skill[] = [
  { name: "Node.js", icon: <SiNodedotjs className="h-6 w-6 sm:h-8 sm:w-8" />, color: "text-[#339933]" },
  { name: "Express", icon: <SiExpress className="h-6 w-6 sm:h-8 sm:w-8" />, color: "text-foreground" },
  { name: "MongoDB", icon: <SiMongodb className="h-6 w-6 sm:h-8 sm:w-8" />, color: "text-[#47A248]" },
  { name: "GraphQL", icon: <SiGraphql className="h-6 w-6 sm:h-8 sm:w-8" />, color: "text-[#E10098]" },
]

const toolsSkills: Skill[] = [
  { name: "Git", icon: <SiGit className="h-6 w-6 sm:h-8 sm:w-8" />, color: "text-[#F05032]" },
  { name: "Docker", icon: <SiDocker className="h-6 w-6 sm:h-8 sm:w-8" />, color: "text-[#2496ED]" },
  { name: "Jest", icon: <SiJest className="h-6 w-6 sm:h-8 sm:w-8" />, color: "text-[#C21325]" },
  { name: "Figma", icon: <SiFigma className="h-6 w-6 sm:h-8 sm:w-8" />, color: "text-[#F24E1E]" },
]

// Memoize the component to prevent unnecessary re-renders
const SkillsSection = memo(function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  return (
    <section id="skills" ref={ref} className="relative min-h-screen py-16 sm:py-20">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -bottom-[10%] -right-[10%] h-[40%] w-[40%] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-2 flex items-center gap-2"
          >
            <div className="h-[1px] w-5 bg-primary"></div>
            <span className="text-primary">My Skills</span>
            <div className="h-[1px] w-5 bg-primary"></div>
          </motion.div>

          <motion.h2
            className="mb-8 text-2xl font-bold tracking-tight sm:mb-12 sm:text-3xl md:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Technical Expertise
          </motion.h2>
        </div>

        <motion.div className="mt-8 space-y-12 sm:mt-12 sm:space-y-16" style={{ opacity, scale }}>
          <SkillCategory title="Frontend Development" skills={frontendSkills} />
          <SkillCategory title="Backend Development" skills={backendSkills} />
          <SkillCategory title="Tools & Others" skills={toolsSkills} />
        </motion.div>
      </div>
    </section>
  )
})

const SkillCategory = memo(function SkillCategory({ title, skills }: { title: string; skills: Skill[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="space-y-6 sm:space-y-8"
    >
      <h3 className="text-xl font-bold sm:text-2xl">{title}</h3>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  )
})

const SkillCard = memo(function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group flex flex-col items-center rounded-xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 vibrate-hover sm:p-6"
    >
      <div className={cn("mb-3 transition-colors group-hover:text-primary", skill.color)}>{skill.icon}</div>
      <h4 className="text-sm font-medium sm:text-base">{skill.name}</h4>
    </motion.div>
  )
})

export default SkillsSection
