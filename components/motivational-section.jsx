"use client"

import { Heart, Sparkles, Leaf } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function MotivationalSection({ isMobile }) {
  const motivationalRef = useRef(null)
  const isMotivationalInView = useInView(motivationalRef, { once: true, margin: "-100px", amount: 0.3 })

  return (
    <section
      className="py-6 sm:py-8 bg-muted/30 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/organic-ingredients.png')",
        backgroundBlendMode: "overlay",
      }}
      ref={motivationalRef}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container mx-auto px-3 sm:px-4 lg:px-8 max-w-4xl text-center relative z-10">
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light leading-relaxed sm:leading-tight text-white px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={isMobile || isMotivationalInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {"Refresh your skin".split(" ").map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-1 sm:mr-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isMobile || isMotivationalInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={
                !isMobile
                  ? {
                      scale: 1.1,
                      color: "var(--primary)",
                      textShadow: "0 0 20px rgba(var(--primary), 0.5)",
                    }
                  : {}
              }
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            className="inline-block mx-1 sm:mx-2"
            initial={{ opacity: 0, scale: 0 }}
            animate={isMobile || isMotivationalInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={!isMobile ? { scale: 1.3, rotate: 10 } : {}}
          >
            <Heart className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 inline text-primary" />
          </motion.span>
          {" Love yourself".split(" ").map((word, index) => (
            <motion.span
              key={index + 10}
              className="inline-block mr-1 sm:mr-2"
              initial={{ opacity: 0, x: -20 }}
              animate={isMobile || isMotivationalInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
              whileHover={
                !isMobile
                  ? {
                      scale: 1.1,
                      color: "var(--primary)",
                      textShadow: "0 0 20px rgba(var(--primary), 0.5)",
                    }
                  : {}
              }
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            className="inline-block mx-1 sm:mx-2"
            initial={{ opacity: 0, scale: 0 }}
            animate={isMobile || isMotivationalInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={!isMobile ? { scale: 1.3, rotate: -10 } : {}}
          >
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 inline text-primary" />
          </motion.span>
          <motion.span
            className="mt-1 sm:mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isMobile || isMotivationalInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {" Renew your glow".split(" ").map((word, index) => (
              <motion.span
                key={index + 20}
                className="inline-block mr-1 sm:mr-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isMobile || isMotivationalInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={
                  !isMobile
                    ? {
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                        color: "var(--primary)",
                      }
                    : {}
                }
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              className="inline-block ml-1 sm:ml-2"
              initial={{ opacity: 0, scale: 0 }}
              animate={isMobile || isMotivationalInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              whileHover={!isMobile ? { scale: 1.3, rotate: 15 } : {}}
            >
              <Leaf className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 inline text-primary" />
            </motion.span>
          </motion.span>
        </motion.h2>
      </div>
    </section>
  )
}
