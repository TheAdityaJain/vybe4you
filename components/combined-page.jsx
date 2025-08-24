"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Menu, X, Leaf, Shield, Award, Truck } from "lucide-react"
import { motion, useInView, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion"

export default function CombinedPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const productRef = useRef(null)
  const aboutRef = useRef(null)
  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const motivationalRef = useRef(null)
  const isProductInView = useInView(productRef, { once: true, margin: "-100px" })
  const isAboutInView = useInView(aboutRef, { once: true, margin: "-100px" })
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: "-100px" })
  const isMotivationalInView = useInView(motivationalRef, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7])

  const springConfig = { damping: 25, stiffness: 700 }
  const mouseX = useSpring(useMotionValue(0), springConfig)
  const mouseY = useSpring(useMotionValue(0), springConfig)

  useEffect(() => {
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
  }, [mouseX, mouseY])

  useEffect(() => {
    const controlNavbar = () => {
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

    window.addEventListener("scroll", controlNavbar)
    return () => window.removeEventListener("scroll", controlNavbar)
  }, [lastScrollY])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const products = [
    {
      id: 1,
      name: "Hydra Drops",
      image: "/images/product-gentle-cleanser.png",
      description: "Intensive hydrating serum",
      price: "$45.00",
      rating: 4.8,
      color: "from-blue-400/20 to-cyan-400/20",
    },
    {
      id: 2,
      name: "Gentle Wash",
      image: "/images/product-sensitive-skin.png",
      description: "Daily cleansing foam",
      price: "$32.00",
      rating: 4.9,
      color: "from-green-400/20 to-emerald-400/20",
    },
    {
      id: 3,
      name: "Calm Cream",
      image: "/images/product-deep-cleansing.png",
      description: "Soothing night moisturizer",
      price: "$38.00",
      rating: 4.7,
      color: "from-purple-400/20 to-pink-400/20",
    },
  ]

  const features = [
    {
      icon: Leaf,
      title: "Natural Formula",
      description: "Crafted with pure skin-loving ingredients for optimal results",
    },
    {
      icon: Shield,
      title: "Cruelty-Free",
      description: "Our products are never tested on animals and ethically sourced",
    },
    {
      icon: Award,
      title: "Expert Approved",
      description: "Carefully tested to ensure quality and effectiveness",
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Delivered to your doorstep within 2-3 business days",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const floatingVariants = {
    animate: {
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
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-background relative">
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
                VYBE4you
              </motion.div>
            </motion.div>

            <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
              {["Home", "Products", "About", "Contact"].map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase() === "home" ? "hero" : item.toLowerCase())}
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

            <div className="hidden md:flex items-center">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => scrollToSection("contact")}
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
              {["Home", "Products", "Features", "About", "Motivational", "Contact"].map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase() === "home" ? "hero" : item.toLowerCase())}
                  className="text-foreground hover:text-primary transition-all duration-300 text-left py-3 px-2 rounded-lg hover:bg-muted/50"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: isMenuOpen ? 0 : -20, opacity: isMenuOpen ? 1 : 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
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
                <Button onClick={() => scrollToSection("contact")} className="w-full py-3">
                  Get In Touch
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        </div>
      </header>

      <section
        id="hero"
        className="relative pt-14 sm:pt-16 lg:pt-20 pb-8 sm:pb-12 lg:pb-16 bg-background overflow-hidden"
        ref={heroRef}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90">
          <motion.div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{
              backgroundImage: `url('/images/hero-skincare.png')`,
              backgroundBlendMode: "overlay",
            }}
            animate={{
              scale: [1, 1.05, 1],
              x: mousePosition.x * 10,
              y: mousePosition.y * 10,
            }}
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
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="overflow-hidden">
                <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight text-foreground">
                  {"Value Your".split("").map((letter, index) => (
                    <motion.span
                      key={index}
                      variants={letterVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: index * 0.1 }}
                      className="inline-block"
                    >
                      {letter}
                    </motion.span>
                  ))}
                  <motion.span
                    className="block italic text-muted-foreground font-light"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    {"Beauty Everyday".split("").map((letter, index) => (
                      <motion.span
                        key={index}
                        variants={letterVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1 + index * 0.1 }}
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
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                <motion.img
                  src="/images/product-sensitive-skin.png"
                  alt="Natural Skincare"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl"
                  whileHover={{
                    scale: 1.02,
                    rotateY: 5,
                    rotateX: 5,
                  }}
                  transition={{ duration: 0.3 }}
                  animate={{
                    rotateY: mousePosition.x * 5,
                    rotateX: mousePosition.y * -5,
                  }}
                />
                <motion.div
                  className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-background/95 backdrop-blur-sm rounded-lg p-2 sm:p-3 shadow-lg border border-border"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  }}
                  variants={floatingVariants}
                  animate="animate"
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

      <section className="py-12 sm:py-16 bg-background" ref={featuresRef}>
        <div className="container mx-auto px-3 sm:px-4 lg:px-8 max-w-6xl">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isFeaturesInView ? "visible" : "hidden"}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.1)",
                }}
                transition={{ duration: 0.3 }}
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  const centerX = rect.left + rect.width / 2
                  const centerY = rect.top + rect.height / 2
                  e.currentTarget.style.transform = `translate(${(e.clientX - centerX) * 0.1}px, ${(e.clientY - centerY) * 0.1}px)`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translate(0px, 0px)"
                }}
              >
                <Card className="h-full bg-card border-border hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  <CardContent className="p-6 text-center space-y-4 relative z-10">
                    <motion.div
                      className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto relative"
                      whileHover={{
                        rotate: 360,
                        scale: 1.2,
                        boxShadow: "0 0 30px rgba(var(--primary), 0.3)",
                      }}
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

      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30" ref={motivationalRef}>
        <div className="container mx-auto px-3 sm:px-4 lg:px-8 max-w-4xl text-center">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-foreground px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={isMotivationalInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            {"Refresh your skin, 🤎 love yourself, 🪞".split(" ").map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isMotivationalInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.1,
                  color: "var(--primary)",
                  textShadow: "0 0 20px rgba(var(--primary), 0.5)",
                }}
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              className="block mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isMotivationalInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {"renew your glow. 🌿".split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block mr-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isMotivationalInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    color: "var(--primary)",
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.span>
          </motion.h2>
        </div>
      </section>

      <section id="products" className="py-12 sm:py-16 bg-background" ref={productRef}>
        <div className="container mx-auto px-3 sm:px-4 lg:px-8 max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isProductInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          ></motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={isProductInView ? "visible" : "hidden"}
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  rotateY: 5,
                  boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
                }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <Card className="hover:shadow-xl transition-all duration-500 bg-card border-border h-full overflow-hidden relative">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100`}
                    transition={{ duration: 0.3 }}
                  />
                  <CardContent className="p-0 relative z-10">
                    <div className="aspect-square bg-muted/50 relative overflow-hidden">
                      <motion.img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        whileHover={{
                          scale: 1.1,
                          rotate: [0, -2, 2, 0],
                        }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <motion.div
                      className="p-6 text-center space-y-3"
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
                        whileHover={{
                          scale: 1.1,
                          color: "var(--primary)",
                          textShadow: "0 0 10px rgba(var(--primary), 0.3)",
                        }}
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

      <section className="py-12 sm:py-16 lg:py-20 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/95 to-foreground">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: `url('/images/about-natural-ingredients.png')`,
              backgroundBlendMode: "overlay",
            }}
          />
        </div>
        <div className="container mx-auto px-3 sm:px-4 lg:px-8 max-w-4xl relative z-10">
          <motion.div
            className="text-center space-y-4 sm:space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
              Eco-Friendly,
              <span className="block italic text-background/80">Skin-Friendly</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-background/80 max-w-2xl mx-auto leading-relaxed px-2">
              Our commitment to sustainability means every product is crafted with respect for both your skin and our
              planet.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="about" className="py-12 sm:py-16 bg-background" ref={aboutRef}>
        <div className="container mx-auto px-3 sm:px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              className="space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={isAboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-3 sm:space-y-4">
                <motion.h2
                  className="font-geist text-xl sm:text-2xl lg:text-3xl font-bold text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Gentle on your skin,
                  <motion.span
                    className="block text-secondary"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isAboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    effective on cleansing.
                  </motion.span>
                </motion.h2>
                <motion.p
                  className="font-manrope text-sm sm:text-base text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  We believe organic skincare is a beautiful, luxurious way to care for your face. Our organic facewash
                  formulations are designed to be gentle yet effective, providing you with the confidence that comes
                  from natural beauty.
                </motion.p>
                <motion.p
                  className="font-manrope text-xs sm:text-sm text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Founded in 2025, VYBE4You represents a new generation of beauty products that prioritize both your
                  health and the environment. Every facewash is carefully crafted with sustainably sourced organic
                  ingredients.
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              className="relative order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              animate={isAboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <motion.img
                  src="/images/skincare-routine.png"
                  alt="Natural Beauty Products"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.footer
        id="contact"
        className="bg-foreground text-background py-8 sm:py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-3 sm:px-4 lg:px-8">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "VYBE4you",
                content: "Value Your Beauty Everyday with our all-natural organic skincare products. Since 2025.",
              },
              {
                title: "Quick Links",
                links: [
                  { name: "Home", section: "hero" },
                  { name: "Products", section: "products" },
                  { name: "About", section: "about" },
                  { name: "Contact", section: "contact" },
                ],
              },
              {
                title: "Contact Us",
                content: "📧 hello@vybeforyou.com\n📞 +1 (555) 123-4567\n📍 123 Beauty Lane, Skincare City",
                showSocial: true,
              },
            ].map((section, index) => (
              <motion.div key={index} className="space-y-3 text-center sm:text-left" variants={itemVariants}>
                <h3 className="font-geist font-semibold text-base sm:text-lg">{section.title}</h3>
                {section.content && (
                  <p className="font-manrope text-xs sm:text-sm text-background/80 whitespace-pre-line leading-relaxed">
                    {section.content}
                  </p>
                )}
                {section.links && (
                  <ul className="space-y-2 font-manrope text-xs sm:text-sm">
                    {section.links.map((link, linkIndex) => (
                      <motion.li key={linkIndex} whileHover={{ x: 5 }}>
                        <button
                          onClick={() => scrollToSection(link.section)}
                          className="text-background/80 hover:text-background transition-colors text-left py-1"
                        >
                          {link.name}
                        </button>
                      </motion.li>
                    ))}
                  </ul>
                )}
                {section.showSocial && (
                  <motion.div
                    className="flex space-x-4 pt-2 justify-center sm:justify-start"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    {["📘", "📷", "🐦"].map((emoji, emojiIndex) => (
                      <motion.a
                        key={emojiIndex}
                        href="#"
                        className="hover:text-background transition-colors text-lg p-2"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {emoji}
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="border-t border-background/20 mt-6 sm:mt-8 pt-4 sm:pt-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="font-manrope text-xs sm:text-sm text-background/60">
              © 2025 VYBE4You. All rights reserved.
            </p>
          </motion.div>
        </div>
      </motion.footer>
    </main>
  )
}
