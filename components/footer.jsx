"use client"

import { Instagram, Facebook, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer({ containerVariants, itemVariants, scrollToSection }) {
  const footerSections = [
    {
      title: "VYBE",
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
      content: "📧 vybe4you@gmail.com\n📞 +91 96946 06000\n📍 Kota, Rajasthan",
      showSocial: true,
    },
  ]

  return (
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
          {footerSections.map((section, index) => (
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
                  <motion.a
                    href="https://instagram.com/vybeforyou_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/80 hover:text-background transition-colors p-2 hover:bg-background/10 rounded-lg"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Instagram className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://facebook.com/vybe4you"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/80 hover:text-background transition-colors p-2 hover:bg-background/10 rounded-lg"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Facebook className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="mailto:vybe4you@gmail.com"
                    className="text-background/80 hover:text-background transition-colors p-2 hover:bg-background/10 rounded-lg"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Mail className="w-5 h-5" />
                  </motion.a>
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
          <p className="font-manrope text-xs sm:text-sm text-background/60">© 2025 VYBE4You. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
