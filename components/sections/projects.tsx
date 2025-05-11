"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github } from "lucide-react"

const projects = [
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

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              A showcase of my recent work and projects.
            </p>
          </div>
        </motion.div>

        <Tabs defaultValue="all" className="mt-12" onValueChange={setActiveTab}>
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value={activeTab} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden">
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button asChild variant="outline" size="sm">
            <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> Code
            </Link>
          </Button>
          <Button asChild size="sm">
            <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
