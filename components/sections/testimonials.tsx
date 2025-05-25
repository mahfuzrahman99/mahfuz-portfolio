"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
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

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(nextTestimonial, 5000)
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [autoplay])

  const handleManualNavigation = () => {
    setAutoplay(false)
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
    }
  }

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Testimonials</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              What my clients say about working with me.
            </p>
          </div>
        </motion.div>

        <div className="mt-12 relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="mx-auto max-w-2xl">
                    <CardHeader className="text-center">
                      <div className="flex justify-center mb-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={80}
                          height={80}
                          className="rounded-full"
                        />
                      </div>
                      <CardTitle>{testimonial.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <div className="flex justify-center mt-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-center italic">"{testimonial.quote}"</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full"
            onClick={() => {
              handleManualNavigation()
              prevTestimonial()
            }}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous testimonial</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full"
            onClick={() => {
              handleManualNavigation()
              nextTestimonial()
            }}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next testimonial</span>
          </Button>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-primary" : "bg-muted"}`}
                onClick={() => {
                  handleManualNavigation()
                  setCurrentIndex(index)
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
