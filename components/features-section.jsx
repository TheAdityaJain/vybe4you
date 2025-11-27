"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Droplets, Zap, Sparkles } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function FeaturesSection({ isMobile, containerVariants, itemVariants }) {
  const featuresRef = useRef(null)
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: "-100px", amount: 0.3 })

  const features = [
    {
      icon: Leaf,
      title: "Natural Ingredients",
      description: "Pure, plant-powered goodness straight from nature",
    },
    {
      icon: Droplets,
      title: "Waterless Formulations",
      description: "Potent blends with no dilution, just results",
    },
    {
      icon: Zap,
      title: "Minimalist & Effective",
      description: "Fuss-free blends that do what they promise",
    },
    {
      icon: Sparkles,
      title: "Everyday Glow",
      description: "Crafted for daily rituals that bring consistent, visible results",
    },
  ]

  return (
    <section className="py-6 sm:py-8 bg-background" ref={featuresRef}>
      <div className="container mx-auto px-3 sm:px-4 lg:px-8 max-w-6xl">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isMobile ? "visible" : isFeaturesInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={
                !isMobile
                  ? {
                      y: -10,
                      scale: 1.05,
                      rotateY: 5,
                      boxShadow: "0 25px 50px rgba(0,0,0,0.1)",
                    }
                  : {}
              }
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full bg-card border-border hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                <CardContent className="p-6 text-center space-y-4 relative z-10">
                  <motion.div
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto relative"
                    whileHover={
                      !isMobile
                        ? {
                            rotate: 360,
                            scale: 1.2,
                            boxShadow: "0 0 30px rgba(var(--primary), 0.3)",
                          }
                        : {}
                    }
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="w-6 h-6 text-primary" />
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-primary/20"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0, 1],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                  </motion.div>
                  <h3 className="font-semibold text-lg text-card-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
