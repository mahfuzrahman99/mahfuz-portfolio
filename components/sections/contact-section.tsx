"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import Link from "next/link"

export default function ContactSection() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  return (
    <section id="contact" ref={ref} className="relative min-h-screen py-16 sm:py-20">
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
            <span className="text-primary">Contact</span>
            <div className="h-[1px] w-5 bg-primary"></div>
          </motion.div>

          <motion.h2
            className="mb-8 text-2xl font-bold tracking-tight sm:mb-12 sm:text-3xl md:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
        </div>

        <motion.div className="mx-auto mt-8 max-w-6xl sm:mt-12" style={{ opacity, y }}>
          {/* Redesigned contact section with unique layout */}
          <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm sm:rounded-3xl">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
            <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>

            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Left side - Contact info */}
              <div className="bg-primary/5 p-6 lg:col-span-2 sm:p-8 lg:p-12">
                <h3 className="mb-6 text-xl font-bold sm:mb-8 sm:text-2xl">Let's Connect</h3>

                <div className="space-y-6 sm:space-y-8">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 sm:h-12 sm:w-12">
                      <Mail className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium sm:text-base">Email</h4>
                      <p className="text-xs text-muted-foreground sm:text-sm">mahfuzurrahmanshabbir@gmail.com</p>
                      <Link
                        href="mailto:mahfuzurrahmanshabbir@gmail.com"
                        className="mt-1 inline-block text-xs text-primary hover:underline sm:text-sm"
                      >
                        Send an email
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 sm:h-12 sm:w-12">
                      <Phone className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium sm:text-base">Phone (WhatsApp)</h4>
                      <p className="text-xs text-muted-foreground sm:text-sm">+880 1888 677322</p>
                      <Link
                        href="tel:+8801888677322"
                        className="mt-1 inline-block text-xs text-primary hover:underline sm:text-sm"
                      >
                        Call me
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 sm:h-12 sm:w-12">
                      <MapPin className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium sm:text-base">Location</h4>
                      <p className="text-xs text-muted-foreground sm:text-sm">Remote, Worldwide</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 sm:mt-12">
                  <h4 className="mb-3 text-sm font-medium sm:mb-4 sm:text-base">Follow me</h4>
                  <div className="flex gap-3 sm:gap-4">
                    <Link href="https://github.com/mahfuzrahman99" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="h-8 w-8 rounded-xl sm:h-10 sm:w-10">
                        <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/mahfuzur-rahman-shabbir-0496752a4/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="icon" className="h-8 w-8 rounded-xl sm:h-10 sm:w-10">
                        <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </Link>
                    <Link href="mailto:mahfuzurrahmanshabbir@gmail.com">
                      <Button variant="outline" size="icon" className="h-8 w-8 rounded-xl sm:h-10 sm:w-10">
                        <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                        <span className="sr-only">Email</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right side - Contact form */}
              <div className="p-6 lg:col-span-3 sm:p-8 lg:p-12">
                <h3 className="mb-6 text-xl font-bold sm:mb-8 sm:text-2xl">Send a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div className="space-y-1 sm:space-y-2">
                      <label htmlFor="name" className="text-xs font-medium sm:text-sm">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-9 rounded-xl border-border/50 bg-background/50 text-xs backdrop-blur-sm sm:h-10 sm:text-sm"
                      />
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <label htmlFor="email" className="text-xs font-medium sm:text-sm">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-9 rounded-xl border-border/50 bg-background/50 text-xs backdrop-blur-sm sm:h-10 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label htmlFor="subject" className="text-xs font-medium sm:text-sm">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="h-9 rounded-xl border-border/50 bg-background/50 text-xs backdrop-blur-sm sm:h-10 sm:text-sm"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label htmlFor="message" className="text-xs font-medium sm:text-sm">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="min-h-[120px] rounded-xl border-border/50 bg-background/50 text-xs backdrop-blur-sm sm:min-h-[150px] sm:text-sm"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="h-9 w-full rounded-xl text-xs sm:h-10 sm:text-sm"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <Send className="ml-1.5 h-3.5 w-3.5 sm:ml-2 sm:h-4 sm:w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
