import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap", // Optimize font loading
})

export const metadata: Metadata = {
  title: "Mahfuzur Rahman | MERN Stack Developer",
  description: "Passionate MERN Stack Developer delivering clean, scalable solutions for web applications.",
  keywords: [
    "MERN",
    "developer",
    "React",
    "Node.js",
    "MongoDB",
    "Express",
    "JavaScript",
    "TypeScript",
    "web development",
  ],
  authors: [{ name: "Mahfuzur Rahman" }],
  creator: "Mahfuzur Rahman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mahfuzurrahman.pro",
    title: "Mahfuzur Rahman | MERN Stack Developer",
    description: "Passionate MERN Stack Developer delivering clean, scalable solutions for web applications.",
    siteName: "Mahfuzur Rahman Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahfuzur Rahman | MERN Stack Developer",
    description: "Passionate MERN Stack Developer delivering clean, scalable solutions for web applications.",
    creator: "@mahfuzur",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen font-sans antialiased", spaceGrotesk.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          storageKey="mahfuzur-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
