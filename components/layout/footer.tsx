"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Heart, Linkedin, Mail, Phone, MapPin, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear())
  const [isVisible, setIsVisible] = useState(false)

  // Update year if needed
  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  // Handle scroll to top visibility
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="relative overflow-hidden border-t border-border/40 py-12">
      {/* Unique wave background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 h-full w-full">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-primary/10"
            ></path>
          </svg>
        </div>
        <div className="absolute -bottom-[10%] -right-[10%] h-[40%] w-[40%] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -top-[10%] -left-[10%] h-[30%] w-[30%] rounded-full bg-primary/5 blur-3xl" />
      </div>

      {/* Scroll to top button */}
      <motion.div
        className="fixed bottom-4 right-4 z-40 sm:bottom-8 sm:right-8"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
        transition={{ duration: 0.3 }}
      >
        <Button
          onClick={scrollToTop}
          size="icon"
          className="h-10 w-10 rounded-full bg-primary shadow-lg shadow-primary/20 hover:bg-primary/90 sm:h-12 sm:w-12"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
      </motion.div>

      <div className="container px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          {/* Main footer content with unique design */}
          <div className="mb-8 grid grid-cols-1 gap-8 sm:mb-12 md:grid-cols-12 md:gap-12">
            {/* Column 1 - Logo and description */}
            <motion.div
              className="md:col-span-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -left-4 -top-4 h-8 w-8 rounded-full bg-primary/20 sm:-left-6 sm:-top-6 sm:h-12 sm:w-12"></div>
                <Link href="/" className="mb-3 inline-block text-xl font-bold sm:mb-4 sm:text-2xl">
                  Mahfuzur Rahman
                </Link>
              </div>
              <p className="mb-4 max-w-md text-xs text-muted-foreground sm:mb-6 sm:text-sm">
                Passionate MERN Stack Developer delivering clean, scalable solutions. Turning complex problems into
                elegant, efficient code.
              </p>
              <div className="flex gap-3 sm:gap-4">
                <Link
                  href="https://github.com/mahfuzrahman99"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-full border-primary/20 bg-background/80 backdrop-blur-sm hover:border-primary hover:bg-primary/10 sm:h-10 sm:w-10"
                  >
                    <Github className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/mahfuzur-rahman-shabbir-0496752a4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-full border-primary/20 bg-background/80 backdrop-blur-sm hover:border-primary hover:bg-primary/10 sm:h-10 sm:w-10"
                  >
                    <Linkedin className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                  </Button>
                </Link>
                <Link href="mailto:mahfuzurrahmanshabbir@gmail.com" aria-label="Email">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-full border-primary/20 bg-background/80 backdrop-blur-sm hover:border-primary hover:bg-primary/10 sm:h-10 sm:w-10"
                  >
                    <Mail className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Column 2 - Quick Links */}
            <motion.div
              className="md:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -left-2 -top-2 h-6 w-6 rounded-full bg-primary/10 sm:h-8 sm:w-8"></div>
                <h3 className="mb-4 text-base font-bold sm:mb-6 sm:text-lg">Quick Links</h3>
              </div>
              <ul className="space-y-2 sm:space-y-3">
                {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                  <li key={item} className="transform transition-transform hover:translate-x-2">
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="flex items-center text-xs text-muted-foreground hover:text-primary sm:text-sm"
                    >
                      <span className="mr-2 h-1 w-2 bg-primary/50 sm:w-3"></span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3 - Contact Info */}
            <motion.div
              className="md:col-span-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -left-2 -top-2 h-6 w-6 rounded-full bg-primary/10 sm:h-8 sm:w-8"></div>
                <h3 className="mb-4 text-base font-bold sm:mb-6 sm:text-lg">Contact</h3>
              </div>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start gap-2 sm:gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-primary sm:h-5 sm:w-5" />
                  <div>
                    <span className="block text-xs text-muted-foreground sm:text-sm">Email:</span>
                    <Link
                      href="mailto:mahfuzurrahmanshabbir@gmail.com"
                      className="text-xs hover:text-primary transition-colors sm:text-sm"
                    >
                      mahfuzurrahmanshabbir@gmail.com
                    </Link>
                  </div>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-primary sm:h-5 sm:w-5" />
                  <div>
                    <span className="block text-xs text-muted-foreground sm:text-sm">Phone (WhatsApp):</span>
                    <Link href="tel:+8801888677322" className="text-xs hover:text-primary transition-colors sm:text-sm">
                      +880 1888 677322
                    </Link>
                  </div>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-primary sm:h-5 sm:w-5" />
                  <div>
                    <span className="block text-xs text-muted-foreground sm:text-sm">Location:</span>
                    <span className="text-xs sm:text-sm">Remote, Worldwide</span>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Divider with unique design */}
          <div className="relative my-6 sm:my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border/40"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-background px-4 text-xs text-muted-foreground sm:text-sm">
                <Heart className="inline-block h-3 w-3 text-red-500 sm:h-4 sm:w-4" />
              </span>
            </div>
          </div>

          {/* Copyright section with animation */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-xs text-muted-foreground sm:text-sm">
              &copy; {year} Mahfuzur Rahman. All rights reserved.
            </p>
            <p className="mt-1 text-xs text-muted-foreground sm:mt-2 sm:text-sm">
              Made with <Heart className="inline-block h-2.5 w-2.5 text-red-500 sm:h-3 sm:w-3" /> and modern web
              technologies
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
