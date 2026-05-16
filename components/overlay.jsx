"use client";

import { motion, useTransform } from "framer-motion";

export default function Overlay({ scrollYProgress, scrollToSection }) {
  // Section 1: 0% to 20%
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.25], [1, 1, 0, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  // Section 2: 25% to 50%
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.5], [50, 0, 0, -50]);

  // Section 3: 50% to 75%
  const opacity3 = useTransform(scrollYProgress, [0.45, 0.55, 0.7, 0.75], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.45, 0.55, 0.7, 0.75], [50, 0, 0, -50]);

  // Section 4: 75% to 100%
  const opacity4 = useTransform(scrollYProgress, [0.7, 0.85, 1], [0, 1, 1]);
  const y4 = useTransform(scrollYProgress, [0.7, 0.85, 1], [50, 0, 0]);

  return (
    <div className="absolute inset-0 pointer-events-none z-20">
      
      {/* Seamless Frosted Fade Panel */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-full md:w-3/4 lg:w-2/3 h-full backdrop-blur-2xl bg-gradient-to-r from-background/90 via-background/50 to-transparent pointer-events-none"
        style={{ 
          WebkitMaskImage: 'linear-gradient(to right, black 40%, transparent 100%)', 
          maskImage: 'linear-gradient(to right, black 40%, transparent 100%)' 
        }}
      />

      {/* SECTION 1 */}
      <motion.div 
        style={{ opacity: opacity1, y: y1 }}
        className="absolute left-0 top-0 w-full md:w-1/2 h-full flex flex-col items-start justify-center px-8 md:px-16 lg:px-24"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl md:text-7xl font-light tracking-widest text-primary mb-4"
        >
          VYBE
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4 text-foreground"
        >
          Everyday Glow-Getter
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-lg md:text-2xl text-foreground/70 font-light mb-8"
        >
          Luxury Powder Facewash
        </motion.p>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-sm uppercase tracking-[0.2em] text-foreground/50 border-t border-foreground/20 pt-4 w-full"
        >
          Designed for all skin.
        </motion.div>
      </motion.div>

      {/* SECTION 2 */}
      <motion.div 
        style={{ opacity: opacity2, y: y2 }}
        className="absolute left-0 top-0 w-full md:w-1/2 h-full flex flex-col items-start justify-center px-8 md:px-16 lg:px-24"
      >
        <h3 className="text-3xl md:text-5xl font-light mb-6 leading-tight text-foreground">
          Gentle <br/><span className="text-primary font-normal">Daily Cleanse</span>
        </h3>
        <p className="text-lg text-foreground/80 mb-4 font-light">
          Brightens & Evens Tone
        </p>
        <div className="h-px w-12 bg-primary mb-4" />
        <p className="text-sm uppercase tracking-widest text-foreground/60">
          100% Preservative Free
        </p>
      </motion.div>

      {/* SECTION 3 */}
      <motion.div 
        style={{ opacity: opacity3, y: y3 }}
        className="absolute left-0 top-0 w-full md:w-1/2 h-full flex flex-col items-start justify-center px-8 md:px-16 lg:px-24"
      >
        <h3 className="text-3xl md:text-5xl font-light mb-6 leading-tight text-foreground">
          Minimal ingredients. <br/><span className="text-primary font-normal">Maximum glow.</span>
        </h3>
        <p className="text-lg text-foreground/80 font-light border-l border-primary pl-4">
          Modern skincare reimagined for the conscious consumer.
        </p>
      </motion.div>

      {/* SECTION 4 */}
      <motion.div 
        style={{ opacity: opacity4, y: y4 }}
        className="absolute left-0 top-0 w-full md:w-1/2 h-full flex flex-col items-start justify-center px-8 md:px-16 lg:px-24"
      >
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-[0.1em] mb-12 text-foreground leading-tight">
          VALUE YOUR <br /><span className="text-primary font-medium">BEAUTY</span> <br />EVERYDAY
        </h2>
        
        <button 
          onClick={() => scrollToSection("products")}
          className="pointer-events-auto px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-500 tracking-widest text-sm uppercase rounded-full"
        >
          Explore Product
        </button>
      </motion.div>

    </div>
  );
}
