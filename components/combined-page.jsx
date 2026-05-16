"use client"

import { useState, useEffect } from "react"
import { useMotionValue, useSpring } from "framer-motion"

import Navbar from "@/components/navbar"
import BackgroundEffects from "@/components/background-effects"
import ScrollyCanvas from "@/components/scrolly-canvas"
import FeaturesSection from "@/components/features-section"
import MotivationalSection from "@/components/motivational-section"
import ProductsSection from "@/components/products-section"
import EcoFriendlySection from "@/components/eco-friendly-section"
import AboutSection from "@/components/about-section"
import Footer from "@/components/footer"

export default function CombinedPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  const springConfig = { damping: 25, stiffness: 700 }
  const mouseX = useSpring(useMotionValue(0), springConfig)
  const mouseY = useSpring(useMotionValue(0), springConfig)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    if (window.innerWidth < 768) {
      setTimeout(() => setHasAnimated(true), 2000)
    }

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) return

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const x = (clientX / innerWidth - 0.5) * 2
      const y = (clientY / innerHeight - 0.5) * 2
      setMousePosition({ x, y })
      mouseX.set(x * 20)
      mouseY.set(y * 20)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY, isMobile])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = window.innerWidth >= 1024 ? 80 : window.innerWidth >= 640 ? 64 : 56
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.05 : 0.15,
        delayChildren: isMobile ? 0.05 : 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: isMobile ? 20 : 60, scale: isMobile ? 1 : 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: isMobile ? 0.4 : 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const floatingVariants = {
    animate: isMobile
      ? {}
      : {
          y: [-10, 10, -10],
          rotate: [-2, 2, -2],
          scale: [1, 1.02, 1],
          transition: {
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
        },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: isMobile ? 20 : 50, rotateX: isMobile ? 0 : -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: isMobile ? 0.4 : 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <main className="min-h-screen overflow-clip bg-background relative">
      {!isMobile && <BackgroundEffects mousePosition={mousePosition} />}

      <Navbar scrollToSection={scrollToSection} />

      <ScrollyCanvas scrollToSection={scrollToSection} />

      <FeaturesSection isMobile={isMobile} containerVariants={containerVariants} itemVariants={itemVariants} />

      <MotivationalSection isMobile={isMobile} />

      <ProductsSection isMobile={isMobile} containerVariants={containerVariants} itemVariants={itemVariants} />

      <EcoFriendlySection isMobile={isMobile} />

      <AboutSection isMobile={isMobile} containerVariants={containerVariants} />

      <Footer containerVariants={containerVariants} itemVariants={itemVariants} scrollToSection={scrollToSection} />
    </main>
  )
}
