"use client"

import { useState, useRef, memo, useCallback } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  liveLink: string
  githubLink: string
  category: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product management, cart, and checkout functionality.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["React", "Node.js", "MongoDB", "Redux", "Express"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/mahfuzur/ecommerce",
    category: "fullstack",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A Kanban-style task management application with drag-and-drop functionality.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["React", "TypeScript", "Redux", "Tailwind"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/mahfuzur/task-manager",
    category: "frontend",
  },
  {
    id: 3,
    title: "Blog API",
    description: "RESTful API for a blog platform with authentication, posts, and comments.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/mahfuzur/blog-api",
    category: "backend",
  },
  {
    id: 4,
    title: "Real-time Chat Application",
    description: "A real-time chat application with private and group messaging.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/mahfuzur/chat-app",
    category: "fullstack",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A responsive portfolio website built with Next.js and Tailwind CSS.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/mahfuzur/portfolio",
    category: "frontend",
  },
  {
    id: 6,
    title: "Authentication Service",
    description: "A microservice for user authentication and authorization.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Node.js", "Express", "JWT", "MongoDB"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/mahfuzur/auth-service",
    category: "backend",
  },
]

const categories = [
  { id: "all", label: "All Projects" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "fullstack", label: "Full Stack" },
]

// Memoize the component to prevent unnecessary re-renders
const ProjectsSection = memo(function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100])

  // Memoize the filter function to prevent unnecessary re-renders
  const filteredProjects = useCallback(
    () => (activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)),
    [activeCategory],
  )()

  return (
    <section id="projects" ref={ref} className="relative min-h-screen py-16 sm:py-20">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[30%] -right-[10%] h-[40%] w-[40%] rounded-full bg-accent/30 blur-3xl dark:bg-accent/10" />
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
            <span className="text-primary">My Work</span>
            <div className="h-[1px] w-5 bg-primary"></div>
          </motion.div>

          <motion.h2
            className="mb-8 text-2xl font-bold tracking-tight sm:mb-12 sm:text-3xl md:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mb-8 flex flex-wrap justify-center gap-2 sm:mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="rounded-full text-xs sm:text-sm"
                size="sm"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8" style={{ opacity, y }}>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
})

const ProjectCard = memo(function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] hover:shadow-primary/20"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-all duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="p-4 sm:p-6">
        <h3 className="mb-2 text-lg font-bold sm:text-xl">{project.title}</h3>
        <p className="mb-4 text-xs text-muted-foreground sm:text-sm">{project.description}</p>

        <div className="mb-4 flex flex-wrap gap-1.5 sm:mb-6 sm:gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="default"
              className="rounded-full bg-primary/10 text-primary hover:bg-primary/20 text-[10px] px-2 py-0 sm:text-xs"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3 sm:gap-4">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10 text-xs h-8 sm:text-sm"
          >
            <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="mr-1.5 h-3.5 w-3.5 sm:mr-2 sm:h-4 sm:w-4" /> Code
            </Link>
          </Button>
          <Button asChild size="sm" className="rounded-full bg-primary/80 hover:bg-primary text-xs h-8 sm:text-sm">
            <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-1.5 h-3.5 w-3.5 sm:mr-2 sm:h-4 sm:w-4" /> Live Demo
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  )
})

export default ProjectsSection
