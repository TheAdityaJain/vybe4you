"use client"

import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"

export default function HeroSection({ isMobile, mousePosition, letterVariants, floatingVariants, scrollToSection }) {
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : -100])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, isMobile ? 1 : 0.7])

  return (
    <section
      id="hero"
      className="relative pt-14 sm:pt-16 lg:pt-20 pb-8 sm:pb-12 lg:pb-16 bg-background overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90">
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('/images/hero-skincare.png')`,
            backgroundBlendMode: "overlay",
          }}
          animate={
            !isMobile
              ? {
                  scale: [1, 1.05, 1],
                  x: mousePosition.x * 10,
                  y: mousePosition.y * 10,
                }
              : {}
          }
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
      </div>

      <motion.div
        className="container mx-auto px-3 sm:px-4 lg:px-8 max-w-6xl relative z-10"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-6rem)] sm:min-h-[calc(100vh-8rem)]">
          <motion.div
            className="space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: isMobile ? 0.5 : 0.8, ease: "easeOut" }}
          >
            <div className="overflow-hidden">
              <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight text-foreground">
                {"Value Your".split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * (isMobile ? 0.05 : 0.1) }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
                <motion.span
                  className="block italic text-muted-foreground font-light"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: isMobile ? 0.5 : 0.8, delay: isMobile ? 0.3 : 0.8 }}
                >
                  {"Beauty Everyday".split("").map((letter, index) => (
                    <motion.span
                      key={index}
                      variants={letterVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: (isMobile ? 0.5 : 1) + index * (isMobile ? 0.05 : 0.1) }}
                      className="inline-block"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.span>
              </motion.h1>
            </div>

            <motion.p
              className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-sm sm:max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              Start your day with gentle care and nourishing ingredients designed to awaken your skin naturally.
            </motion.p>

            <motion.div
              className="pt-2 sm:pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  y: -5,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  size="lg"
                  className="bg-foreground hover:bg-foreground/90 text-background px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium rounded-full relative overflow-hidden group w-full sm:w-auto"
                  onClick={() => scrollToSection("products")}
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10">Explore</span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: isMobile ? 0.5 : 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <motion.img
                src="/images/powder-facewash.jpg"
                alt="Natural Skincare"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl"
                whileHover={
                  !isMobile
                    ? {
                        scale: 1.02,
                        rotateY: 5,
                        rotateX: 5,
                      }
                    : {}
                }
                transition={{ duration: 0.3 }}
                animate={
                  !isMobile
                    ? {
                        rotateY: mousePosition.x * 5,
                        rotateX: mousePosition.y * -5,
                      }
                    : {}
                }
              />
              <motion.div
                className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-background/95 backdrop-blur-sm rounded-lg p-2 sm:p-3 shadow-lg border border-border"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: isMobile ? 0.5 : 1 }}
                whileHover={
                  !isMobile
                    ? {
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                        boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                      }
                    : {}
                }
                variants={floatingVariants}
              >
                <div className="flex items-center gap-2">
                  <motion.img
                    src="/images/product-gentle-cleanser.png"
                    alt="Hydra Drops"
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div>
                    <p className="text-xs font-medium">Hydra Drops</p>
                    <p className="text-xs text-muted-foreground">$45.00</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
