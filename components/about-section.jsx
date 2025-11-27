"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function AboutSection({ isMobile, containerVariants }) {
  const aboutRef = useRef(null)
  const isAboutInView = useInView(aboutRef, { once: true, margin: "-100px", amount: 0.3 })

  return (
    <section className="py-6 sm:py-8 bg-background" id="about" ref={aboutRef}>
      <div className="container mx-auto px-3 sm:px-4 lg:px-8 max-w-6xl">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isMobile ? { opacity: 1, y: 0 } : isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: isMobile ? 0.5 : 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-3 sm:mb-4">About Us</h2>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isMobile ? "visible" : isAboutInView ? "visible" : "hidden"}
        >
          <motion.div
            className="space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isMobile ? { opacity: 1, x: 0 } : isAboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: isMobile ? 0.5 : 0.8 }}
          >
            <div className="space-y-3 sm:space-y-4">
              <motion.h2
                className="font-geist text-xl sm:text-2xl lg:text-3xl font-bold text-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={isMobile ? { opacity: 1, y: 0 } : isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: isMobile ? 0.6 : 0.6, delay: 0.2 }}
              >
                Gentle on your skin,
                <motion.span
                  className="block text-secondary"
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isMobile ? { opacity: 1, x: 0 } : isAboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: isMobile ? 0.6 : 0.6, delay: 0.4 }}
                >
                  effective on cleansing.
                </motion.span>
              </motion.h2>
              <motion.p
                className="font-manrope text-sm sm:text-base text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isMobile ? { opacity: 1, y: 0 } : isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: isMobile ? 0.6 : 0.6, delay: 0.3 }}
              >
                We believe organic skincare is a beautiful, luxurious way to care for your skin. Our organic products
                are designed to be gentle yet effective, providing you with the confidence that comes from natural
                beauty.
              </motion.p>
              <motion.p
                className="font-manrope text-xs sm:text-sm text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isMobile ? { opacity: 1, y: 0 } : isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: isMobile ? 0.6 : 0.6, delay: 0.5 }}
              >
                Founded in 2025, VYBE represents a new generation of skincare products that prioritize both your health
                and the environment. Every product is carefully crafted with sustainably sourced organic ingredients.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isMobile ? { opacity: 1, x: 0 } : isAboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: isMobile ? 0.8 : 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <motion.img
                src="/images/skincare-routine.png"
                alt="Natural Beauty Products"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl"
                whileHover={!isMobile ? { scale: 1.02 } : {}}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
