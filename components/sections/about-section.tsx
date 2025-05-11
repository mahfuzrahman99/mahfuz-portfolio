"use client"

import { useRef, memo } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Download } from "lucide-react"

// Memoize the component to prevent unnecessary re-renders
const AboutSection = memo(function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section id="about" ref={ref} className="relative min-h-screen py-16 sm:py-20">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[30%] -left-[10%] h-[40%] w-[40%] rounded-full bg-accent/30 blur-3xl dark:bg-accent/10" />
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
            <span className="text-primary">About Me</span>
            <div className="h-[1px] w-5 bg-primary"></div>
          </motion.div>

          <motion.h2
            className="mb-8 text-2xl font-bold tracking-tight sm:mb-12 sm:text-3xl md:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            My Journey
          </motion.h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-0 sm:mt-12 lg:grid-cols-2 lg:gap-12">
          <motion.div
            className="relative mx-auto max-w-md lg:mx-0 w-full"
            style={{ y: y1, opacity }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mahfuz.png-3Cfo0qp3sur7LjZzTOKQ3aBr8Qra2g.jpeg"
                alt="Mahfuzur Rahman"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-2xl border-8 border-background bg-primary/20 backdrop-blur-lg sm:h-32 sm:w-32">
              <div className="flex h-full flex-col items-center justify-center">
                <span className="text-2xl font-bold sm:text-3xl">5+</span>
                <span className="text-xs sm:text-sm">Years Exp.</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center"
            style={{ y: y2, opacity }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-xl font-bold sm:text-2xl">Passionate MERN Stack Developer</h3>

            <div className="space-y-4">
              <p className="text-sm sm:text-base">
                I'm a passionate MERN Stack Developer with expertise in building modern web applications. With a strong
                foundation in JavaScript and TypeScript, I create clean, scalable, and maintainable code that delivers
                exceptional user experiences.
              </p>

              <p className="text-sm sm:text-base">
                My journey in web development started 5 years ago, and I've since worked on various projects ranging
                from e-commerce platforms to content management systems. I'm constantly learning and adapting to new
                technologies to stay at the forefront of web development.
              </p>

              <div className="grid grid-cols-2 gap-4 py-4 sm:gap-6 sm:py-6">
                <div className="rounded-xl border border-border/50 bg-card/50 p-3 backdrop-blur-sm sm:p-4">
                  <div className="text-xl font-bold text-primary sm:text-3xl">20+</div>
                  <div className="text-xs text-muted-foreground sm:text-sm">Projects Completed</div>
                </div>

                <div className="rounded-xl border border-border/50 bg-card/50 p-3 backdrop-blur-sm sm:p-4">
                  <div className="text-xl font-bold text-primary sm:text-3xl">15+</div>
                  <div className="text-xs text-muted-foreground sm:text-sm">Happy Clients</div>
                </div>
              </div>

              <Button asChild variant="outline" className="mt-2 w-fit rounded-full sm:mt-4">
                <Link href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
})

export default AboutSection
