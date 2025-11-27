"use client"

import { motion } from "framer-motion"

export default function BackgroundEffects({ mousePosition }) {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"
        animate={{
          x: mousePosition.x * 30,
          y: mousePosition.y * 30,
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute top-1/3 right-20 w-24 h-24 bg-secondary/5 rounded-full blur-xl"
        animate={{
          x: mousePosition.x * -20,
          y: mousePosition.y * -20,
          scale: [1.2, 1, 1.2],
        }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-accent/5 rounded-full blur-xl"
        animate={{
          x: mousePosition.x * 15,
          y: mousePosition.y * 15,
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
      />
    </div>
  )
}
