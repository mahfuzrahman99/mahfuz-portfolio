"use client"

import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkMobile()

    // Add resize listener
    window.addEventListener("resize", checkMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Scroll handler
  const handleScroll = useCallback(() => {
    // Show/hide based on scroll position
    setScrolled(window.scrollY > 100)

    // Find active section
    const sections = navItems.map((item) => item.href.substring(1))
    for (const section of sections.reverse()) {
      const element = document.getElementById(section)
      if (element && element.getBoundingClientRect().top <= 200) {
        setActiveSection(section)
        break
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return (
    <>
      {/* Mobile Navigation (Centered) */}
      {isMobile && (
        <div
          className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-50 transition-opacity duration-300 ${
            scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="bg-background/95 border border-border/40 rounded-full px-3 py-1.5 backdrop-blur flex items-center justify-center shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`px-1.5 py-1 text-[10px] font-medium ${
                  activeSection === item.href.substring(1) ? "text-foreground font-bold" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </a>
            ))}
            <div className="ml-1">
              <ModeToggle />
            </div>
          </div>
        </div>
      )}

      {/* Desktop Navigation (Right Side) */}
      {!isMobile && (
        <motion.div
          className={cn(
            "fixed right-6 bottom-24 z-50 rounded-full border border-border/40 bg-background/95 px-3 py-2 backdrop-blur transition-all",
            scrolled ? "opacity-100" : "opacity-0",
          )}
          initial={{ y: 100, opacity: 0 }}
          animate={{
            y: scrolled ? 0 : 100,
            opacity: scrolled ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-3 py-1.5 text-sm font-medium transition-colors ${
                  activeSection === item.href.substring(1)
                    ? "text-foreground font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-accent"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </a>
            ))}
            <div className="ml-1">
              <ModeToggle />
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}
