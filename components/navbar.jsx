"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar({ scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 10) {
        setIsNavbarVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavbarVisible(false)
      } else if (currentScrollY < lastScrollY) {
        setIsNavbarVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const navItems = ["Home", "Products", "About", "Contact"]

  return (
    <header
      className={`fixed top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-500 ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex h-14 sm:h-16 lg:h-20 items-center justify-between">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <motion.img
              src="/images/favicon.png"
              alt="VYBE Logo"
              className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 mr-2"
              animate={
                isHovering
                  ? {
                      scale: 1.1,
                      filter: "drop-shadow(0 0 10px rgba(var(--primary), 0.5))",
                    }
                  : {}
              }
            />
            <motion.div
              className="font-bold text-lg sm:text-xl lg:text-2xl text-primary tracking-tight"
              animate={
                isHovering
                  ? {
                      textShadow: "0 0 20px rgba(var(--primary), 0.5)",
                      scale: 1.05,
                    }
                  : {}
              }
            >
              VYBE
            </motion.div>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                onClick={() => {
                  const sectionId = item.toLowerCase() === "home" ? "hero" : item.toLowerCase()
                  const element = document.getElementById(sectionId)
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                }}
                className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group text-sm lg:text-base"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => {
                  const element = document.getElementById("contact")
                  if (element) {
                    element.scrollIntoView({ behavior: "instant", block: "start" })
                  }
                }}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-3 lg:px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg text-xs lg:text-base"
              >
                Get In Touch
              </Button>
            </motion.div>
          </div>

          <motion.button
            className="md:hidden p-3 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
            whileHover={{ rotate: 5 }}
          >
            <motion.div animate={{ rotate: isMenuOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.div>
          </motion.button>
        </div>

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-background/95 backdrop-blur border-b border-border"
        >
          <nav className="flex flex-col space-y-1 p-3">
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  const sectionId = item.toLowerCase() === "home" ? "hero" : item.toLowerCase()
                  const element = document.getElementById(sectionId)
                  if (element) {
                    element.scrollIntoView({ behavior: "instant", block: "start" })
                  }
                  setIsMenuOpen(false)
                }}
                className="text-foreground hover:text-primary transition-all duration-300 text-left py-4 px-4 rounded-lg hover:bg-muted/50 w-full font-medium text-base"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: isMenuOpen ? 0 : -20, opacity: isMenuOpen ? 1 : 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                style={{
                  minHeight: "48px",
                  touchAction: "manipulation",
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                {item}
              </motion.button>
            ))}
            <motion.div
              className="pt-2 px-2"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: isMenuOpen ? 0 : -20, opacity: isMenuOpen ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <Button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  const element = document.getElementById("contact")
                  if (element) {
                    element.scrollIntoView({ behavior: "instant", block: "start" })
                  }
                  setIsMenuOpen(false)
                }}
                className="w-full py-4 text-base font-medium"
                style={{
                  minHeight: "48px",
                  touchAction: "manipulation",
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                Get In Touch
              </Button>
            </motion.div>
          </nav>
        </motion.div>
      </div>
    </header>
  )
}
