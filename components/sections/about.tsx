"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src="/placeholder.svg?height=400&width=400"
              width={400}
              height={400}
              alt="Mahfuzur Rahman"
              className="rounded-lg object-cover mx-auto md:mx-0"
            />
          </motion.div>
          <motion.div
            className="flex-1 space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="text-muted-foreground">
              I'm a passionate MERN Stack Developer with expertise in building modern web applications. With a strong
              foundation in JavaScript and TypeScript, I create clean, scalable, and maintainable code that delivers
              exceptional user experiences.
            </p>
            <p className="text-muted-foreground">
              My journey in web development started 5 years ago, and I've since worked on various projects ranging from
              e-commerce platforms to content management systems. I'm constantly learning and adapting to new
              technologies to stay at the forefront of web development.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h3 className="font-medium">Experience</h3>
                <p className="text-muted-foreground">5+ Years</p>
              </div>
              <div>
                <h3 className="font-medium">Projects</h3>
                <p className="text-muted-foreground">20+ Completed</p>
              </div>
              <div>
                <h3 className="font-medium">Specialization</h3>
                <p className="text-muted-foreground">MERN Stack</p>
              </div>
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-muted-foreground">Remote</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
