"use client"

import { useRef, memo, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import ComImage from "../../public/ts4ubootcamp_logo.jpeg"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Calendar, Building2, Code, Users, Laptop } from "lucide-react"

// Function to calculate duration from start date to present
const calculateDuration = (startDate: string) => {
  const start = new Date(startDate)
  const now = new Date()

  let years = now.getFullYear() - start.getFullYear()
  let months = now.getMonth() - start.getMonth()

  if (months < 0) {
    years--
    months += 12
  }

  if (years === 0) {
    return `${months} ${months === 1 ? "month" : "months"}`
  } else if (months === 0) {
    return `${years} ${years === 1 ? "year" : "years"}`
  } else {
    return `${years} ${years === 1 ? "year" : "years"}, ${months} ${months === 1 ? "month" : "months"}`
  }
}

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "Next.js",
  "React.js",
  "Redux",
  "Ant Design",
  "Mantine UI",
  "shadCN",
  "Tailwind CSS",
  "SASS",
  "MERN Stack",
]

const responsibilities = [
  "Developing and optimizing user interfaces",
  "Ensuring visually appealing and functional designs",
  "Implementing responsive design techniques",
  "Collaborating with designers and backend developers",
  "Contributing to team projects and company objectives",
]

// Memoize the component to prevent unnecessary re-renders
const ExperienceSection = memo(function ExperienceSection() {
  const [duration, setDuration] = useState("")
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100])

  // Calculate duration on component mount and update monthly
  useEffect(() => {
    const updateDuration = () => {
      setDuration(calculateDuration("2024-03-28"))
    }

    updateDuration()

    // Update duration every month
    const interval = setInterval(updateDuration, 30 * 24 * 60 * 60 * 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="experience" ref={ref} className="relative min-h-screen py-16 sm:py-20">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[20%] -right-[10%] h-[50%] w-[50%] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-[20%] -left-[10%] h-[40%] w-[40%] rounded-full bg-accent/20 blur-3xl" />
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
            <span className="text-primary">Professional Journey</span>
            <div className="h-[1px] w-5 bg-primary"></div>
          </motion.div>

          <motion.h2
            className="mb-8 text-2xl font-bold tracking-tight sm:mb-12 sm:text-3xl md:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Work Experience
          </motion.h2>
        </div>

        <motion.div className="mx-auto mt-8 max-w-4xl sm:mt-12" style={{ opacity, y }}>
          <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm">
            {/* Company Header */}
            <CardHeader className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-6 sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
                {/* Company Logo */}
                <motion.div
                  className="relative mx-auto h-20 w-20 overflow-hidden rounded-xl border-2 border-primary/20 bg-white p-2 sm:mx-0 sm:h-24 sm:w-24"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Image
                    src={ComImage}
                    alt="TS4U IT Engineering Bootcamp"
                    fill
                    sizes="(max-width: 640px) 80px, 96px"
                    className="object-contain"
                    priority
                  />
                </motion.div>

                {/* Job Details */}
                <div className="flex-1 text-center sm:text-left">
                  <CardTitle className="mb-2 text-xl sm:text-2xl">Frontend Developer</CardTitle>
                  <CardDescription className="mb-4 text-base font-medium text-foreground">
                    TS4U IT Engineering Bootcamp
                  </CardDescription>

                  {/* Job Info */}
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:gap-6">
                    <div className="flex items-center justify-center gap-2 sm:justify-start">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>Mar 2024 - Present · {duration}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 sm:justify-start">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>Uttara, Dhaka, Bangladesh</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 sm:justify-start">
                      <Building2 className="h-4 w-4 text-primary" />
                      <span>On-site</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6 sm:p-8">
              {/* Job Description */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 flex items-center gap-2">
                  <Laptop className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">Role Overview</h3>
                </div>
                <p className="leading-relaxed text-muted-foreground">
                  I am currently working as a Frontend Developer at TS4U IT Engineering Bootcamp, where I am responsible
                  for developing and optimizing user interfaces, ensuring they are both visually appealing and highly
                  functional. My experience in the MERN Stack has equipped me with the skills needed to contribute
                  effectively to my team's projects and meet the company's objectives.
                </p>
              </motion.div>

              {/* Key Responsibilities */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">Key Responsibilities</h3>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {responsibilities.map((responsibility, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      viewport={{ once: true }}
                    >
                      <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span className="text-sm text-muted-foreground">{responsibility}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Technologies Used */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">Technologies & Tools</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.05 * index }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
})

export default ExperienceSection
