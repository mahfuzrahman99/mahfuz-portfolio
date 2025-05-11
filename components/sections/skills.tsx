"use client"

import { motion } from "framer-motion"
import { Code, Database, FileJson, Figma, GitBranch, Globe, Server, Smartphone } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const frontendSkills = [
  { name: "React", icon: <FileJson className="h-8 w-8" />, level: 90 },
  { name: "Next.js", icon: <Globe className="h-8 w-8" />, level: 85 },
  { name: "TypeScript", icon: <Code className="h-8 w-8" />, level: 80 },
  { name: "Tailwind CSS", icon: <Figma className="h-8 w-8" />, level: 90 },
  { name: "Redux", icon: <FileJson className="h-8 w-8" />, level: 85 },
]

const backendSkills = [
  { name: "Node.js", icon: <Server className="h-8 w-8" />, level: 85 },
  { name: "Express.js", icon: <Server className="h-8 w-8" />, level: 90 },
  { name: "MongoDB", icon: <Database className="h-8 w-8" />, level: 85 },
  { name: "REST API", icon: <Globe className="h-8 w-8" />, level: 90 },
  { name: "GraphQL", icon: <FileJson className="h-8 w-8" />, level: 75 },
]

const toolsSkills = [
  { name: "Git", icon: <GitBranch className="h-8 w-8" />, level: 90 },
  { name: "Docker", icon: <Database className="h-8 w-8" />, level: 70 },
  { name: "Jest", icon: <Code className="h-8 w-8" />, level: 75 },
  { name: "Figma", icon: <Figma className="h-8 w-8" />, level: 80 },
  { name: "Responsive Design", icon: <Smartphone className="h-8 w-8" />, level: 95 },
]

export default function Skills() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Expertise</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              My technical skills and proficiency levels across different technologies.
            </p>
          </motion.div>
        </div>

        <div className="mt-12 space-y-12">
          <SkillCategory title="Frontend Development" skills={frontendSkills} />
          <SkillCategory title="Backend Development" skills={backendSkills} />
          <SkillCategory title="Tools & Others" skills={toolsSkills} />
        </div>
      </div>
    </section>
  )
}

function SkillCategory({ title, skills }: { title: string; skills: any[] }) {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div
                  className="flex flex-col items-center p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="mb-2">{skill.icon}</div>
                  <h4 className="font-medium">{skill.name}</h4>
                  <div className="w-full bg-background rounded-full h-2 mt-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{skill.level}% proficiency</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </motion.div>
  )
}
