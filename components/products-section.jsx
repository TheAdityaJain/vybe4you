"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function ProductsSection({ isMobile, containerVariants, itemVariants }) {
  const productRef = useRef(null)
  const isProductInView = useInView(productRef, { once: true, margin: "-100px", amount: 0.3 })

  const products = [
    {
      id: 1,
      name: "Everyday Glow Getter",
      image: "/images/powder-facewash.jpg",
      description: "Powder Facewash",
      price: "₹299",
      rating: 4.8,
      color: "from-blue-400/20 to-cyan-400/20",
    },
    {
      id: 2,
      name: "Face Exfoliator",
      image: "/face-exfoliator-tube-skincare-product.png",
      description: "Coming Soon",
      price: "-",
      rating: 4.9,
      color: "from-green-400/20 to-emerald-400/20",
      comingSoon: true,
    },
    {
      id: 3,
      name: "Face Mask",
      image: "/face-scrub-box-packaging-skincare-product.png",
      description: "Coming Soon",
      price: "-",
      rating: 4.7,
      color: "from-purple-400/20 to-pink-400/20",
      comingSoon: true,
    },
  ]

  return (
    <section id="products" className="py-6 sm:py-8 bg-background" ref={productRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isMobile ? { opacity: 1, y: 0 } : isProductInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: isMobile ? 0.5 : 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-4">Our Products</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isMobile ? "visible" : isProductInView ? "visible" : "hidden"}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={
                !isMobile
                  ? {
                      y: -12,
                      scale: 1.02,
                      rotateY: 5,
                      boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
                    }
                  : {}
              }
              transition={{ duration: 0.3 }}
              className="group w-full"
            >
              <Card className="hover:shadow-xl transition-all duration-500 bg-card border-border h-full overflow-hidden relative w-full">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100`}
                  transition={{ duration: 0.3 }}
                />
                <CardContent className="p-0 relative z-10">
                  <div className="aspect-square bg-muted/50 relative overflow-hidden w-full">
                    <motion.img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className={`w-full h-full object-cover object-center ${product.comingSoon ? "blur-sm" : ""}`}
                      whileHover={!isMobile ? { scale: 1.1, rotate: [0, -2, 2, 0] } : {}}
                      transition={{ duration: 0.5 }}
                    />
                    {product.comingSoon && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <motion.div
                          className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <span className="text-foreground font-semibold text-sm sm:text-base">Coming Soon</span>
                        </motion.div>
                      </div>
                    )}
                  </div>
                  <motion.div
                    className="p-4 sm:p-6 text-center space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  >
                    <h3 className="font-semibold text-lg text-card-foreground group-hover:text-primary transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">{product.description}</p>
                    <motion.p
                      className="text-xl font-semibold text-foreground"
                      whileHover={
                        !isMobile
                          ? {
                              scale: 1.1,
                              color: "var(--primary)",
                              textShadow: "0 0 10px rgba(var(--primary), 0.3)",
                            }
                          : {}
                      }
                    >
                      {product.price}
                    </motion.p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
