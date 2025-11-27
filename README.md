# VYBE4you - Skincare Landing Page

A modern, animated skincare landing page built with Next.js, React, Framer Motion, and Tailwind CSS.

## Project Structure

├── app/
│   ├── globals.css                 # Global styles and Tailwind configuration
│   ├── layout.tsx                  # Root layout with metadata and theme wrapper
│   └── page.tsx                    # Main page entry point (renders CombinedPage)
│
├── components/
│   └── ui/
│       ├── combined-page.jsx       # Composes all UI sections into one page
│       ├── navbar.jsx              # Navigation bar with auto-hide on scroll
│       ├── hero-section.jsx        # Hero section with animated heading & CTA
│       ├── features-section.jsx    # Feature cards with icons and animations
│       ├── motivational-section.jsx# Motivational animated quote section
│       ├── products-section.jsx    # Product cards with "coming soon" overlays
│       ├── eco-friendly-section.jsx# Eco-friendly values & animated illustrations
│       ├── about-section.jsx       # Brand story and About Us section
│       ├── footer.jsx              # Footer with contact details and social links
│       ├── background-effects.jsx  # Mouse-follow floating background visuals
│       └── theme-provider.tsx      # Dark/light mode theme provider
│
├── public/
│   ├── favicon.ico                 # Brand favicon (VYBE logo)
│   └── images/                     # Product images, backgrounds, brand assets
│
├── styles/                         # Additional custom styles (if any)
│
└── README.md                       # Project documentation

---

## Components

### 1. Navbar (`components/navbar.jsx`)

**Description:** Responsive navigation bar with auto-hide functionality on scroll.

**Features:**
- Auto-hides when scrolling down, reappears when scrolling up
- Mobile hamburger menu with slide-out drawer
- Smooth scroll navigation (desktop) / instant navigation (mobile)
- Glassmorphism effect with backdrop blur

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `scrollToSection` | `function` | Function to handle navigation to sections |
| `isMobile` | `boolean` | Whether the device is mobile |

**Usage:**
\`\`\`jsx
<Navbar scrollToSection={scrollToSection} isMobile={isMobile} />
\`\`\`

---

### 2. HeroSection (`components/hero-section.jsx`)

**Description:** Main hero section with animated headline, product image, and CTA button.

**Features:**
- Word-by-word text animation on load
- Hover effects on individual words
- Responsive product image display
- "Shop Now" CTA button

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `scrollToSection` | `function` | Function to scroll to products section |

**Usage:**
\`\`\`jsx
<HeroSection scrollToSection={scrollToSection} />
\`\`\`

---

### 3. FeaturesSection (`components/features-section.jsx`)

**Description:** Grid of feature cards highlighting brand values.

**Features:**
- 4 feature cards: Natural Formula, Cruelty-Free, Expert Approved, Free Shipping
- Staggered fade-in animations
- Hover scale effects
- Responsive grid layout (1 col mobile, 2 col tablet, 4 col desktop)

**Props:** None

**Usage:**
\`\`\`jsx
<FeaturesSection />
\`\`\`

---

### 4. MotivationalSection (`components/motivational-section.jsx`)

**Description:** Animated quote section with background image overlay.

**Features:**
- Word-by-word text animation triggered on scroll
- Interactive hover effects with glow
- Organic ingredients background image
- Mobile-optimized (animations disabled)

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `isMobile` | `boolean` | Whether the device is mobile |

**Usage:**
\`\`\`jsx
<MotivationalSection isMobile={isMobile} />
\`\`\`

---

### 5. ProductsSection (`components/products-section.jsx`)

**Description:** Product showcase with cards and "Coming Soon" overlays.

**Features:**
- 3 product cards with images and descriptions
- "Coming Soon" blur overlay for unreleased products
- Hover animations and scaling effects
- Responsive grid layout

**Props:** None

**Product Data Structure:**
\`\`\`javascript
{
  name: "Product Name",
  description: "Product description",
  price: "₹XXX",
  image: "/images/product.png",
  comingSoon: false // or true for unreleased products
}
\`\`\`

**Usage:**
\`\`\`jsx
<ProductsSection />
\`\`\`

---

### 6. EcoFriendlySection (`components/eco-friendly-section.jsx`)

**Description:** Animated section highlighting eco-friendly and skin-friendly values.

**Features:**
- Word-by-word text animation
- Recycle and Heart icons
- Background image with dark overlay
- Mobile-optimized animations

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `isMobile` | `boolean` | Whether the device is mobile |

**Usage:**
\`\`\`jsx
<EcoFriendlySection isMobile={isMobile} />
\`\`\`

---

### 7. AboutSection (`components/about-section.jsx`)

**Description:** About Us section with brand story and image.

**Features:**
- Two-column layout (text + image)
- Fade-in animations on scroll
- Key benefits list with checkmarks
- Responsive stacking on mobile

**Props:** None

**Usage:**
\`\`\`jsx
<AboutSection />
\`\`\`

---

### 8. Footer (`components/footer.jsx`)

**Description:** Site footer with contact information and social links.

**Features:**
- Brand logo and tagline
- Quick navigation links
- Contact information (phone, email, location)
- Social media icons (Instagram, Facebook, Twitter)
- Copyright notice

**Props:** None

**Usage:**
\`\`\`jsx
<Footer />
\`\`\`

---

### 9. BackgroundEffects (`components/background-effects.jsx`)

**Description:** Decorative background elements that follow mouse movement.

**Features:**
- Mouse-tracking parallax effect
- Multiple floating gradient orbs
- Subtle movement animations
- Performance-optimized with transform

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `mousePosition` | `{ x: number, y: number }` | Current mouse coordinates |

**Usage:**
\`\`\`jsx
<BackgroundEffects mousePosition={mousePosition} />
\`\`\`

---

### 10. CombinedPage (`components/combined-page.jsx`)

**Description:** Main orchestrator component that composes all sections.

**Features:**
- Mobile detection using window width
- Mouse position tracking for background effects
- Scroll-to-section navigation handler
- Section refs management

**State:**
| State | Type | Description |
|-------|------|-------------|
| `mousePosition` | `{ x: number, y: number }` | Mouse coordinates |
| `isMobile` | `boolean` | Device type detection |

**Usage:**
\`\`\`jsx
<CombinedPage />
\`\`\`

---

## Styling

### Color Palette

| Color | CSS Variable | Usage |
|-------|--------------|-------|
| Primary | `--primary` | Buttons, accents |
| Background | `--background` | Page background |
| Foreground | `--foreground` | Text color |
| Muted | `--muted` | Secondary backgrounds |
| Accent | `--accent` | Hover states, highlights |

### Typography

- **Headings:** Playfair Display (serif)
- **Body:** System font stack (sans-serif)

### Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| `sm` | 640px | Small tablets |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |

---

## Animations

### Framer Motion Patterns

**Fade In Up:**
\`\`\`javascript
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
\`\`\`

**Staggered Children:**
\`\`\`javascript
variants={{
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}}
\`\`\`

**Hover Scale:**
\`\`\`javascript
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
\`\`\`

---

## Images

### Public Images

| Image | Path | Usage |
|-------|------|-------|
| Hero Product | `/images/product-deep-cleansing.png` | Hero section |
| Gentle Cleanser | `/images/product-gentle-cleanser.png` | Products |
| Face Exfoliator | `/face-exfoliator-tube-skincare-product.png` | Products (Coming Soon) |
| Face Scrub | `/face-scrub-box-packaging-skincare-product.png` | Products (Coming Soon) |
| Organic Ingredients | `/images/organic-ingredients.png` | Motivational section bg |
| About Natural | `/images/about-natural-ingredients.png` | Eco-friendly section bg |
| Skincare Routine | `/images/skincare-routine.png` | About section |

---

## Dependencies

\`\`\`json
{
  "framer-motion": "^10.x",
  "lucide-react": "^0.x",
  "next": "^14.x",
  "react": "^18.x",
  "tailwindcss": "^4.x"
}
\`\`\`

---

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)

---

## Contact

- **Instagram:** [@vybe4you](https://instagram.com/vybe4you)
- **Email:** vybe4you@gmail.com
- **Phone:** +91 9876543210

---

© 2025 VYBE4you. All rights reserved.
