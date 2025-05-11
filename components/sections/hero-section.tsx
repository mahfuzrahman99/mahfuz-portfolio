"use client"

import { useRef, memo } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"

// Memoize the component to prevent unnecessary re-renders
const HeroSection = memo(function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const words = [{ text: "MERN" }, { text: "Stack" }, { text: "Developer" }, { text: "." }]

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden py-12 px-4 sm:py-20"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-[10%] -right-[10%] h-[40%] w-[40%] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-[60%] -left-[5%] h-[30%] w-[30%] rounded-full bg-primary/20 blur-3xl" />
      </div>

      {/* Floating shapes - strategically placed for better visibility */}
      <motion.div
        className="absolute top-[15%] left-[8%] hidden h-12 w-12 rounded-lg border border-primary/30 bg-transparent sm:block"
        animate={{
          y: [0, 15, 0],
          rotate: [0, 50, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {/* Star shape using clip-path */}
      <motion.div
        className="absolute top-[20%] right-[15%] hidden h-16 w-16 border border-primary/30 bg-transparent sm:block"
        style={{
          clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
        }}        
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {/* Triangle shape */}
      <motion.div
        className="absolute bottom-[25%] left-[12%] hidden h-16 w-16 border border-primary/30 bg-transparent sm:block"
        style={{
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        }}
        animate={{
          rotate: [0, -30, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {/* Starburst/Asterisk shape */}
      <motion.div
        className="absolute top-[40%] right-[10%] hidden h-18 w-18 border border-primary/30 bg-transparent sm:block"
        style={{
          clipPath:
            "polygon(50% 0%, 45% 30%, 20% 20%, 30% 45%, 0% 50%, 30% 55%, 20% 80%, 45% 70%, 50% 100%, 55% 70%, 80% 80%, 70% 55%, 100% 50%, 70% 45%, 80% 20%, 55% 30%)",
        }}
        animate={{
          rotate: [0, 360, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {/* Hexagon shape */}
      <motion.div
        className="absolute top-[10%] left-[30%] hidden h-14 w-14 border border-primary/30 bg-transparent sm:block"
        style={{
          clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
        }}
        animate={{
          y: [0, 30, 0],
          rotate: [0, 60, 0],
        }}
        transition={{
          duration: 9,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {/* Diamond shape */}
      <motion.div
        className="absolute bottom-[15%] right-[25%] hidden h-16 w-16 border border-primary/100 bg-transparent sm:block"
        style={{
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 45, 0],
          scale: [2, 0.7, 1],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {/* Circle shape */}
      <motion.div
        className="absolute bottom-[30%] right-[8%] hidden h-20 w-20 rounded-full border border-primary/30 bg-transparent sm:block"
        animate={{
          y: [0, -200, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {/* Cross shape */}
      <motion.div
        className="absolute bottom-[20%] left-[25%] hidden h-16 w-16 sm:block"
        style={{
          background: "transparent",
          position: "relative",
        }}
        animate={{
          rotate: [0, 90, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <div className="absolute top-1/2 left-0 h-4 w-16 -translate-y-1/2 rounded-md border border-primary/30 bg-transparent"></div>
        <div className="absolute top-0 left-1/2 h-16 w-4 -translate-x-1/2 rounded-md border border-primary/30 bg-transparent"></div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex w-full max-w-4xl flex-col items-center text-center"
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-2 flex items-center gap-2"
        >
          <div className="h-[1px] w-5 bg-primary"></div>
          <span className="text-primary">Mahfuzur Rahman</span>
          <div className="h-[1px] w-5 bg-primary"></div>
        </motion.div>

        <motion.h1
          className="mb-4 text-3xl font-bold tracking-tight sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <TypewriterEffect words={words} />
        </motion.h1>

        <motion.p
          className="mb-6 max-w-[700px] text-sm text-muted-foreground sm:mb-8 sm:text-base md:text-lg lg:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Passionate about crafting clean, scalable web solutions with modern technologies. Turning complex problems
          into elegant, efficient code.
        </motion.p>

        <motion.div
          className="mb-8 flex w-full flex-col gap-3 px-4 sm:mb-12 sm:flex-row sm:justify-center sm:gap-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button asChild size="lg" className="w-full rounded-full sm:w-auto">
            <Link href="#contact">Get in touch</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full rounded-full sm:w-auto">
            <Link href="#projects">View my work</Link>
          </Button>
        </motion.div>

        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="https://github.com/mahfuzrahman99" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/mahfuzur-rahman-shabbir-0496752a4/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon" className="rounded-full">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <Link href="mailto:mahfuzurrahmanshabbir@gmail.com">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
        }}
      >
        <Button variant="ghost" size="icon" asChild className="rounded-full">
          <Link href="#about">
            <ArrowDown className="h-5 w-5" />
            <span className="sr-only">Scroll down</span>
          </Link>
        </Button>
      </motion.div>
    </section>
  )
})

export default HeroSection
