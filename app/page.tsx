import { Suspense } from "react"
import dynamic from "next/dynamic"
import { Skeleton } from "@/components/ui/skeleton"

// Static imports for critical components
import HeroSection from "@/components/sections/hero-section"
import FloatingNav from "@/components/ui/floating-nav"
import Footer from "@/components/layout/footer"
import ExperienceSection from "@/components/sections/experience-section"

// Dynamic imports for non-critical components
const AboutSection = dynamic(() => import("@/components/sections/about-section"), {
  loading: () => <SectionSkeleton />,
})
const SkillsSection = dynamic(() => import("@/components/sections/skills-section"), {
  loading: () => <SectionSkeleton />,
})
const ProjectsSection = dynamic(() => import("@/components/sections/projects-section"), {
  loading: () => <SectionSkeleton />,
})
const TestimonialsSection = dynamic(() => import("@/components/sections/testimonials-section"), {
  loading: () => <SectionSkeleton />,
})
const ContactSection = dynamic(() => import("@/components/sections/contact-section"), {
  loading: () => <SectionSkeleton />,
})

function SectionSkeleton() {
  return (
    <div className="container py-20">
      <div className="flex flex-col items-center space-y-4">
        <Skeleton className="h-8 w-40" />
        <Skeleton className="h-24 w-full max-w-3xl" />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="relative">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
      <FloatingNav />
      <HeroSection />
      <Suspense fallback={<SectionSkeleton />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <SkillsSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <ProjectsSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <ExperienceSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <ContactSection />
      </Suspense>
      <Footer />
    </main>
  )
}
