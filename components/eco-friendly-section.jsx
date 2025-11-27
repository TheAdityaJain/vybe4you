"use client"

import { Recycle, Heart } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function EcoFriendlySection({ isMobile }) {
  const ecoFriendlyRef = useRef(null)
  const isEcoFriendlyInView = useInView(ecoFriendlyRef, { once: true, margin: "0px", amount: 0.1 })

  return (
    <section
      className="py-6 sm:py-8 relative overflow-hidden"
      style={{
        backgroundImage: `url('/images/about-natural-ingredients.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      ref={ecoFriendlyRef}
    >
      <div className="absolute inset-0 bg-black/80"></div>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('/images/about-natural-ingredients.png')`,
          backgroundBlendMode: "overlay",
        }}
      />
      <div className="container mx-auto px-3 sm:px-4 lg:px-8 max-w-4xl relative z-10">
        <motion.div
          className="text-center space-y-4 sm:space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light leading-relaxed sm:leading-tight text-white px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={isMobile || isEcoFriendlyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            {"Eco-Friendly".split("-").map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-1 sm:mr-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isMobile || isEcoFriendlyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
                {index === 0 ? "-" : ""}
              </motion.span>
            ))}
            <motion.span
              className="inline-block ml-2"
              initial={{ opacity: 0, scale: 0 }}
              animate={isMobile || isEcoFriendlyInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={!isMobile ? { scale: 1.3, rotate: 10 } : {}}
            >
              <Recycle className="w-6 h-6 sm:w-8 sm:h-8 inline text-primary" />
            </motion.span>
            <motion.span
              className="inline-block ml-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isMobile || isEcoFriendlyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {" Skin-Friendly".split(" ").map((word, index) => (
                <motion.span
                  key={index + 10}
                  className="inline-block mr-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isMobile || isEcoFriendlyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
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
                className="inline-block ml-2"
                initial={{ opacity: 0, scale: 0 }}
                animate={isMobile || isEcoFriendlyInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={!isMobile ? { scale: 1.3, rotate: -10 } : {}}
              >
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 inline text-primary" />
              </motion.span>
            </motion.span>
          </motion.h2>
        </motion.div>
      </div>
    </section>
  )
}
