"use client"

import { useState, useRef, useEffect, memo } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

type Testimonial = {
  id: number
  name: string
  role: string
  image: string
  quote: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Asif Mahbub",
    role: "CEO, TechStart",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Mahfuzur delivered an exceptional e-commerce platform for our business. His attention to detail and technical expertise were impressive.",
    rating: 5,
  },
  {
    id: 2,
    name: "Altaf Hossain",
    role: "Product Manager, DevCorp",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Working with Mahfuzur was a pleasure. He understood our requirements perfectly and delivered a high-quality solution on time.",
    rating: 5,
  },
  {
    id: 3,
    name: "Mohammad Alam",
    role: "Founder, CreativeMinds",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Mahfuzur's technical skills and problem-solving abilities are outstanding. He helped us build a complex web application with ease.",
    rating: 4,
  },
  {
    id: 4,
    name: "Sarah Islam",
    role: "CTO, InnovateTech",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "I've worked with many developers, but Mahfuzur stands out for his professionalism and dedication to delivering high-quality code.",
    rating: 5,
  },
]

// Memoize the component to prevent unnecessary re-renders
const TestimonialsSection = memo(function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  // New state to track if viewport is desktop (>=768px)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    // Check window width on mount and on resize
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768)
    }

    handleResize() // Initial check

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Get current testimonials to display (2 at a time on larger screens, 1 on mobile)
  const firstIndex = activeIndex
  const secondIndex = (activeIndex + 1) % testimonials.length

  return (
    <section id="testimonials" ref={ref} className="relative min-h-screen py-16 sm:py-20">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -bottom-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-primary/10 blur-3xl" />
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
            <span className="text-primary">Testimonials</span>
            <div className="h-[1px] w-5 bg-primary"></div>
          </motion.div>

          <motion.h2
            className="mb-8 text-2xl font-bold tracking-tight sm:mb-12 sm:text-3xl md:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Client Feedback
          </motion.h2>
        </div>

        <motion.div className="relative mx-auto mt-8 max-w-6xl sm:mt-12" style={{ opacity, scale }}>
          {/* Redesigned testimonials section */}
          <div className="relative">
            <div className="absolute -left-4 -top-4 text-primary/20 dark:text-primary/10 sm:-left-8 sm:-top-8">
              <Quote size={40} className="sm:h-20 sm:w-20" />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              {/* First testimonial - always visible */}
              <div className="relative rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm sm:p-8 md:p-10">
                <div className="h-full">
                  <p className="mb-6 text-sm italic leading-relaxed sm:text-base md:text-lg">
                    "{testimonials[firstIndex].quote}"
                  </p>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-primary/20 sm:h-12 sm:w-12 md:h-14 md:w-14">
                      <Image
                        src={testimonials[firstIndex].image || "/placeholder.svg"}
                        alt={testimonials[firstIndex].name}
                        fill
                        sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, 56px"
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold sm:text-base">{testimonials[firstIndex].name}</h3>
                      <p className="text-xs text-muted-foreground sm:text-sm">{testimonials[firstIndex].role}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second testimonial - hidden on mobile */}
              <div className="relative hidden rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm md:block md:p-10">
                <div className="h-full">
                  <p className="mb-6 text-lg italic leading-relaxed">"{testimonials[secondIndex].quote}"</p>

                  <div className="flex items-center gap-4">
                    <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-primary/20">
                      <Image
                        src={testimonials[secondIndex].image || "/placeholder.svg"}
                        alt={testimonials[secondIndex].name}
                        fill
                        sizes="56px"
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">{testimonials[secondIndex].name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonials[secondIndex].role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation controls */}
            <div className="mt-6 flex justify-center gap-4 sm:mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm sm:h-10 sm:w-10"
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">Previous</span>
              </Button>

              <div className="flex items-center gap-1.5 sm:gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-1.5 w-6 rounded-full transition-colors sm:h-2 sm:w-8 ${
                      index === activeIndex ||
                      (index === (activeIndex + 1) % testimonials.length && isDesktop)
                        ? "bg-primary"
                        : "bg-muted"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm sm:h-10 sm:w-10"
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">Next</span>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
})

export default TestimonialsSection
