"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import emailjs from "emailjs-com"
import { motion } from "framer-motion"
import { Mail, MessageSquare, Phone, Send } from "lucide-react"
import type React from "react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatusMessage(null)


    try {
      // 1️⃣ Send main email to you
      const mainEmail = await emailjs.send(
        // "service_bj3b4ul",   // Service ID
        "service_fsiuqse",   // Service ID
        "template_k2ek7hd",  // Main template ID
        {
          to_name: "Mahfuzur Rahman",       // Your name
          user_name: formData.name,
          user_email: formData.email,
          user_phone: formData.phone || "N/A",
          subject: formData.subject,
          message: formData.message,
        },
        "Jt6ao0Fbi7ZpYFZOw"  // Public Key
      )

      // 2️⃣ Send auto-reply to user
      const autoReply = await emailjs.send(
        "service_fsiuqse",
        "auto_reply_template_id", // Your auto-reply template ID
        {
          user_name: formData.name,
          user_email: formData.email,
        },
        "Jt6ao0Fbi7ZpYFZOw"
      )

      if (mainEmail.status === 200 && autoReply.status === 200) {
        setStatusMessage({
          type: "success",
          text: "✅ Message sent successfully! Check your email for confirmation.",
        })
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      } else {
        setStatusMessage({
          type: "error",
          text: "❌ Failed to send. Please try again later.",
        })
      }
    } catch (error: any) {
      console.error(error)
      setStatusMessage({
        type: "error",
        text: "❌ Something went wrong. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!
            </p>
          </div>
        </motion.div>

        <div className="mx-auto max-w-5xl mt-12 grid gap-8 md:grid-cols-2">
          {/* Left Side Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 mt-1 text-primary" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-muted-foreground">mahfuzur@example.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 mt-1 text-primary" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-muted-foreground">+880 1234-567890</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MessageSquare className="h-6 w-6 mt-1 text-primary" />
              <div>
                <h3 className="font-medium">Social Media</h3>
                <p className="text-muted-foreground">Connect with me on LinkedIn or GitHub</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <Input
                id="phone"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
              />

              <Input
                id="subject"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <Textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="min-h-[150px]"
                required
              />

              {/* Status message */}
              {statusMessage && (
                <p
                  className={`text-sm ${statusMessage.type === "success" ? "text-green-600" : "text-red-600"}`}
                >
                  {statusMessage.text}
                </p>
              )}

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>Processing...</>
                ) : (
                  <>
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
