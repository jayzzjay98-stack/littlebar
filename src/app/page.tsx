"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Masonry from "@/components/Masonry";
import {
  Search,
  MapPin,
  Clock,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Music,
  GlassWater,
  Users,
  Menu,
  X,
} from "lucide-react";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

// TopBar removed

// ========== NAVBAR ==========
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = ["HOME", "MENU", "GALLERY", "CONTACT US"];

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-40 bg-transparent">
        <div
          className="flex items-center justify-center"
          style={{ marginTop: '30px' }}
        >

          {/* Center Links - Desktop */}
          <div className="hidden lg:flex items-center gap-12">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className="text-sm tracking-[0.2em] text-white hover:text-[#D4AF37] transition-colors"
                style={{ fontFamily: "var(--font-lato)" }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center">
            {/* Hamburger Menu - Mobile Only */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full border border-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] group transition-colors"
            >
              {isMenuOpen ? (
                <X
                  size={18}
                  className="text-[#D4AF37] group-hover:text-black transition-colors"
                />
              ) : (
                <Menu
                  size={18}
                  className="text-[#D4AF37] group-hover:text-black transition-colors"
                />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {
          isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-black/95 lg:hidden"
            >
              <div className="flex flex-col items-center justify-center h-full">
                {/* Close Button */}
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-6 right-4 w-10 h-10 rounded-full border border-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] group transition-colors"
                >
                  <X
                    size={18}
                    className="text-[#D4AF37] group-hover:text-black transition-colors"
                  />
                </button>

                {/* Logo */}
                <div className="text-center mb-12">
                  <h2
                    className="text-3xl text-[#D4AF37] tracking-[0.2em]"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    THE BAR
                  </h2>
                  <span
                    className="text-[10px] tracking-[0.3em] text-white/60"
                    style={{ fontFamily: "var(--font-lato)" }}
                  >
                    EST. NISEKO 2016
                  </span>
                </div>

                {/* Menu Links */}
                <nav className="flex flex-col items-center gap-8">
                  {links.map((link, index) => (
                    <motion.a
                      key={link}
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      onClick={() => setIsMenuOpen(false)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-lg tracking-[0.3em] text-white hover:text-[#D4AF37] transition-colors"
                      style={{ fontFamily: "var(--font-lato)" }}
                    >
                      {link}
                    </motion.a>
                  ))}
                </nav>

                {/* Open Hours */}
                <div className="mt-12 text-center">
                  <p className="text-[#A1A1AA] text-sm" style={{ fontFamily: "var(--font-lato)" }}>
                    Open at 6 PM to 2:00 AM
                  </p>
                </div>
              </div>
            </motion.div>
          )
        }
      </AnimatePresence >
    </>
  );
}

// ========== HERO SECTION ==========
function HeroSection() {
  return (
    <section id="home" className="relative h-[85dvh] md:h-screen w-full overflow-hidden">
      {/* 1. Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Background */}
        <img
          src="/bg-mobile.jpg"
          alt="Little Lao Mobile Background"
          className="md:hidden w-full h-full object-cover"
        />
        {/* Desktop Background */}
        <img
          src="/bg-main.webp"
          alt="Little Lao Shop Sign"
          className="hidden md:block w-full h-full object-cover object-center"
        />
        {/* 2. Magic Filters: Dark Luxury Theme */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* 3. Content - Flexbox Centered */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4">
        <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Small Tagline */}
          <motion.p
            variants={fadeUp}
            className="text-gray-300 tracking-[0.3em] text-xs md:text-sm uppercase"
            style={{ fontFamily: "var(--font-lato)", marginBottom: '20px' }}
          >
            Original Taste of Luang Prabang
          </motion.p>

          {/* Main Title - LITTLE LAO */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] drop-shadow-2xl"
            style={{ fontFamily: "var(--font-cinzel)", marginBottom: '10px' }}
          >
            LITTLE LAO
          </motion.h1>



          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-white text-3xl md:text-5xl tracking-wide"
            style={{ fontFamily: "'Caveat'" }}
          >
            Bar and Culture
          </motion.p>
        </motion.div>
      </div>

      {/* 4. Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span
          className="text-[#A1A1AA] text-xs uppercase tracking-[0.3em]"
          style={{ fontFamily: "var(--font-lato)" }}
        >
          Scroll
        </span>
        <motion.div
          className="w-6 h-10 border-2 border-[#D4AF37]/60 rounded-full flex justify-center pt-2"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-1.5 h-3 bg-[#D4AF37] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ========== ABOUT SECTION ==========
function AboutSection() {
  return (
    <section id="about" className="flex flex-col lg:flex-row min-h-[80vh]">
      {/* Left - Text */}
      <motion.div
        className="lg:w-1/2 bg-black/40 flex items-center justify-center px-8 md:px-16 py-20"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-md">
          <h3
            className="text-4xl md:text-5xl text-[#D4AF37] mb-6"
            style={{ fontFamily: "var(--font-great-vibes)" }}
          >
            About Niseko Bar
          </h3>

          <p
            className="text-[#A1A1AA] leading-relaxed mb-6"
            style={{ fontFamily: "var(--font-lato)" }}
          >
            Nestled in the heart of Niseko, THE BAR has been a sanctuary for
            discerning spirits since 2016. Our intimate speakeasy atmosphere
            offers an escape from the ordinary, where every moment becomes
            memorable.
          </p>

          <p
            className="text-[#A1A1AA] leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-lato)" }}
          >
            We take pride in our curated selection of rare Japanese whiskies and
            artisanal cocktails, each crafted with precision and passion by our
            master bartenders.
          </p>

          <button className="px-8 py-3 border border-[#D4AF37] text-white tracking-wider uppercase text-sm hover:bg-[#D4AF37] hover:text-black transition-all">
            Learn More
          </button>
        </div>
      </motion.div>

      {/* Right - Image */}
      <motion.div
        className="lg:w-1/2 min-h-[400px] lg:min-h-full relative"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
      </motion.div>
    </section>
  );
}

// ========== EVENTS SECTION ==========
const events = [
  {
    icon: Music,
    title: "Live Jazz Night",
    day: "Every Friday",
    time: "8 PM - 11 PM",
    description: "Enjoy smooth jazz with a curated cocktail menu.",
  },
  {
    icon: GlassWater,
    title: "Whisky & Cocktail Masterclass",
    day: "First Saturday",
    time: "4 PM - 6 PM",
    description: "Learn the art of whisky tasting and cocktail making.",
  },
  {
    icon: Users,
    title: "Private Events",
    day: "By Reservation",
    time: "Flexible Hours",
    description: "Host your exclusive gatherings at THE BAR.",
  },
];

function EventsSection() {
  return (
    <section id="events" className="bg-black/40 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3
            className="text-5xl text-[#D4AF37] mb-4"
            style={{ fontFamily: "var(--font-great-vibes)" }}
          >
            Upcoming Events
          </h3>
          <p
            className="text-[#A1A1AA] text-sm"
            style={{ fontFamily: "var(--font-lato)" }}
          >
            Join us for exclusive experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              className="bg-[#080808] p-8 rounded-lg border border-white/10 text-center hover:border-[#D4AF37] transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <event.icon
                size={40}
                className="text-[#D4AF37] mx-auto mb-6"
                strokeWidth={1}
              />
              <h4
                className="text-xl text-white mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {event.title}
              </h4>
              <p className="text-[#D4AF37] text-sm mb-4">
                {event.day} | {event.time}
              </p>
              <p
                className="text-[#A1A1AA] text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-lato)" }}
              >
                {event.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-[#D4AF37] text-white tracking-wider uppercase text-sm hover:bg-[#D4AF37] hover:text-black transition-all">
            Reserve Now
          </button>
        </div>
      </div>
    </section>
  );
}

// ========== MENU SECTION ==========
const signatureDrinks = [
  {
    name: "Bar Bin",
    ingredients: "Burnt Coconut Whiskey / Coconut Juice / Paksong Coffee / Jackfruit Foam",
    image: "/cocktail-1.png",
  },
  {
    name: "Little Lao Eggnog",
    ingredients: "Hine VSOP Cognac / Coconut Cream / Heavy Cream / Mak Mart Peppercorn / Egg",
    image: "/cocktail-2.png",
  },
  {
    name: "Lao Mulled Wine",
    ingredients: "Côte du Rhône / Mak Mont Mulberry / Orange / Mak Toom Bale / Star Anise",
    image: "/cocktail-3.png",
  },
  {
    name: "Lemongrass Gin",
    ingredients: "London Dry Gin / Fresh Lemongrass / Lime / Honey Syrup / Soda Water",
    image: "/cocktail-4.png",
  },
  {
    name: "Mekong Sunset",
    ingredients: "Lao White Rum / Passion Fruit / Mango / Lime / Orgeat Syrup",
    image: "/cocktail-5.png",
  },
  {
    name: "Jasmine Royale",
    ingredients: "Premium Vodka / Jasmine Tea / Elderflower / Lemon / Champagne Float",
    image: "/cocktail-6.png",
  },
];

function MenuSection() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const isDragging = useRef(false);

  const handleDragStart = () => {
    isDragging.current = false;
  };

  const handleDrag = () => {
    isDragging.current = true;
  };

  const handleDragEnd = () => {
    // Reset after a short delay to allow click to be processed first
    setTimeout(() => {
      isDragging.current = false;
    }, 100);
  };

  const handleCardClick = (idx: number) => {
    // Only flip if not dragging
    if (!isDragging.current) {
      setSelectedCard(selectedCard === idx ? null : idx);
    }
  };

  return (
    <section
      id="menu"
      className="relative bg-black/60"
      style={{ paddingTop: '80px', paddingBottom: '40px' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center px-4"
          style={{ marginBottom: '40px' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 md:gap-4">
            <motion.div
              className="h-0.5 rounded-full w-8 md:w-20"
              style={{
                background: 'linear-gradient(90deg, transparent, #D4AF37, #FFD700)'
              }}
            />
            <motion.h2
              className="text-3xl md:text-5xl lg:text-6xl text-[#D4AF37] whitespace-nowrap"
              style={{ fontFamily: "'Caveat'" }}
            >
              Signature Drinks
            </motion.h2>
            <motion.div
              className="h-0.5 rounded-full w-8 md:w-20"
              style={{
                background: 'linear-gradient(90deg, #FFD700, #D4AF37, transparent)'
              }}
            />
          </div>
        </motion.div>

        {/* Mobile: Horizontal Scroll Snap Gallery */}
        <div className="lg:hidden overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide">
          <div className="flex gap-6 px-6" style={{ width: 'max-content' }}>
            {signatureDrinks.map((drink, idx) => {
              const isFlipped = selectedCard === idx;
              return (
                <div
                  key={idx}
                  className="snap-center w-[70vw] max-w-[280px] h-[400px] relative flex-shrink-0 group perspective-1000"
                  onClick={() => handleCardClick(idx)}
                >
                  <motion.div
                    className="relative w-full h-full"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Front Side */}
                    <div
                      className="absolute inset-0 rounded-[32px] overflow-hidden"
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <img
                        src={drink.image}
                        alt={drink.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                        <h3
                          className="text-2xl text-white mb-2"
                          style={{ fontFamily: "'Koblenz'" }}
                        >
                          {drink.name}
                        </h3>
                      </div>
                    </div>

                    {/* Back Side */}
                    <div
                      className="absolute inset-0 rounded-[32px] overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#D4AF37]/30 flex flex-col items-center justify-center p-6 text-center"
                      style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                      }}
                    >
                      <h3
                        className="text-xl text-[#D4AF37] mb-4"
                        style={{ fontFamily: "'Koblenz'" }}
                      >
                        {drink.name}
                      </h3>
                      <div
                        className="h-0.5 w-16 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-6"
                      />
                      <p
                        className="text-white/90 text-sm leading-loose"
                        style={{ fontFamily: "'Cause'" }}
                      >
                        {drink.ingredients.split(' / ').map((ingredient, i) => (
                          <span key={i} className="block mb-2">
                            {ingredient}
                          </span>
                        ))}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop: Drag to Scroll Carousel */}
        <div className="hidden lg:block w-full overflow-hidden" style={{ paddingLeft: '170px' }}>
          <motion.div
            className="flex gap-6 pb-4 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: -((signatureDrinks.length - 4) * 344), right: 0 }}
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
            onDragStart={handleDragStart}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
          >
            {signatureDrinks.map((drink, idx) => {
              const isFlipped = selectedCard === idx;
              return (
                <div
                  key={idx}
                  className="flex-shrink-0 cursor-pointer"
                  style={{
                    width: '320px',
                    height: '360px',
                    perspective: '1000px',
                  }}
                  onClick={() => handleCardClick(idx)}
                >
                  <motion.div
                    className="relative w-full h-full"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Front Side - Drink Image */}
                    <div
                      className="absolute inset-0 rounded-2xl overflow-hidden"
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <img
                        src={drink.image}
                        alt={drink.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-center">
                        <h3
                          className="text-xl text-white text-center"
                          style={{ fontFamily: "'Koblenz'" }}
                        >
                          {drink.name}
                        </h3>
                      </div>
                    </div>

                    {/* Back Side - Ingredients */}
                    <div
                      className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#D4AF37]/30"
                      style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                      }}
                    >
                      {/* Title - positioned at top */}
                      <div
                        className="absolute left-0 right-0 flex flex-col items-center px-6"
                        style={{ top: '50px' }}
                      >
                        <h3
                          className="text-2xl text-[#D4AF37] mb-3 text-center"
                          style={{ fontFamily: "'Koblenz'" }}
                        >
                          {drink.name}
                        </h3>
                        <div
                          className="h-0.5 rounded-full"
                          style={{
                            width: '150px',
                            background: 'linear-gradient(90deg, transparent, #D4AF37, #FFD700, #D4AF37, transparent)'
                          }}
                        />
                      </div>

                      {/* Ingredients - positioned in middle */}
                      <div
                        className="absolute left-0 right-0 text-center px-6"
                        style={{ top: '140px' }}
                      >
                        <p
                          className="text-white text-base leading-loose"
                          style={{ fontFamily: "'Cause'" }}
                        >
                          {drink.ingredients.split(' / ').map((ingredient, i) => (
                            <span key={i} className="block mb-2">
                              {ingredient}
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ========== FOOD MENU SECTION ==========
const foodItems = [
  {
    name: "Laap Ped",
    ingredients: (
      <>
        Minced Duck / Toasted Rice / Fresh Herbs / <br className="md:hidden" />
        Fish Sauce / Lime
      </>
    ),
  },
  {
    name: "Khao Piak Sen",
    ingredients: "Rice Noodles / Chicken Broth / Poached Chicken / Crispy Garlic / Spring Onion",
  },
  {
    name: "Or Lam",
    ingredients: (
      <>
        Buffalo Meat / Lao Eggplant / Sakaan Wood / <br className="md:hidden" />
        Chili Paste / Dill
      </>
    ),
  },
];

function FoodMenuSection() {
  return (
    <section
      id="food-menu"
      className="relative bg-black/50"
      style={{ paddingTop: '40px', paddingBottom: '40px' }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          className="text-center"
          style={{ marginBottom: '40px' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4">
            <motion.div
              className="h-0.5 rounded-full"
              style={{
                width: '80px',
                background: 'linear-gradient(90deg, transparent, #D4AF37, #FFD700)'
              }}
            />
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl text-[#D4AF37]"
              style={{ fontFamily: "'Caveat'" }}
            >
              Signature Dishes
            </motion.h2>
            <motion.div
              className="h-0.5 rounded-full"
              style={{
                width: '80px',
                background: 'linear-gradient(90deg, #FFD700, #D4AF37, transparent)'
              }}
            />
          </div>
        </motion.div>

        {/* Mobile Layout: Stacked with Highlight Image */}
        <div className="lg:hidden px-4">
          {/* Centering Container */}
          <div className="flex justify-center">
            {/* Highlight Image with Badge */}
            <motion.div
              className="relative rounded-[32px] overflow-hidden mb-10 w-[88%]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/food-menu.webp"
                alt="Signature dish"
                className="w-full h-[280px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </motion.div>
          </div>

          {/* Menu Items List */}
          <div className="space-y-16 mx-6">
            {foodItems.map((food, idx) => (
              <motion.div
                key={idx}
                className="group border-b border-[#A1A1AA]/20 pb-8 last:border-b-0 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="mb-4">
                  <h4
                    className="text-2xl text-white group-hover:text-[#D4AF37] transition-colors"
                    style={{ fontFamily: "'Koblenz'" }}
                  >
                    {food.name}
                  </h4>
                </div>
                <p
                  className="text-[#A1A1AA] text-base leading-relaxed"
                  style={{ fontFamily: "'Cause'" }}
                >
                  {food.ingredients}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop Layout: 2-Column Split - Menu Left, Image Right */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-24 items-center">
          {/* Left: Menu Items - Centered */}
          <motion.div
            className="flex flex-col items-center"

            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {foodItems.map((food, idx) => (
              <motion.div
                key={idx}
                className="group text-center w-full max-w-2xl"
                variants={fadeUp}
                style={{ marginBottom: '60px' }}
              >
                <h4
                  className="text-4xl text-white group-hover:text-[#D4AF37] transition-colors duration-300 mb-6"
                  style={{ fontFamily: "'Koblenz'" }}
                >
                  {food.name}
                </h4>
                <p
                  className="text-[#A1A1AA] text-lg leading-relaxed"
                  style={{ fontFamily: "'Cause'" }}
                >
                  {food.ingredients}
                </p>

              </motion.div>
            ))}
          </motion.div>

          {/* Right: Sticky Highlight Image */}
          <motion.div
            className="sticky top-32"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/food-menu.webp"
                alt="Signature dish"
                className="w-full h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Image Caption */}
              <div className="absolute bottom-6 left-6 right-6 text-center">
                <p
                  className="text-white/90 text-sm italic"
                  style={{ fontFamily: "var(--font-lato)" }}
                >
                  Authentic Lao cuisine, crafted with tradition
                </p>
              </div>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
}

// ========== GALLERY SECTION ==========
const galleryItems = [
  {
    id: "1",
    img: "/gallery-1.webp",
    url: "#",
    height: 500
  },
  {
    id: "2",
    img: "/gallery-2.webp",
    url: "#",
    height: 550
  },
  {
    id: "3",
    img: "/gallery-3.webp",
    url: "#",
    height: 600
  },
  {
    id: "4",
    img: "/gallery-4.webp",
    url: "#",
    height: 520
  },
  {
    id: "5",
    img: "/gallery-5.webp",
    url: "#",
    height: 450
  },
  {
    id: "6",
    img: "/gallery-6.webp",
    url: "#",
    height: 580
  },
  {
    id: "7",
    img: "/gallery-7.webp",
    url: "#",
    height: 380
  },
  {
    id: "8",
    img: "/gallery-8.webp",
    url: "#",
    height: 400
  },
];

function GallerySection() {
  return (
    <section
      id="gallery"
      className="w-full bg-black/40"
      style={{ paddingTop: '40px', paddingBottom: '60px' }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Title */}
        <motion.div
          className="text-center"
          style={{ marginBottom: '32px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 md:gap-4">
            <motion.div
              className="h-0.5 rounded-full w-6 md:w-[60px]"
              style={{
                background: 'linear-gradient(90deg, transparent, #D4AF37, #FFD700)'
              }}
            />
            <motion.h3
              className="text-2xl md:text-5xl text-[#D4AF37] text-center px-1"
              style={{ fontFamily: "'Caveat'" }}
            >
              Moments <br className="md:hidden" /> captured at LITTLE LAO
            </motion.h3>
            <motion.div
              className="h-0.5 rounded-full w-6 md:w-[60px]"
              style={{
                background: 'linear-gradient(90deg, #FFD700, #D4AF37, transparent)'
              }}
            />
          </div>
        </motion.div>

        {/* Mobile: Horizontal Snap Gallery */}
        <div className="lg:hidden w-full overflow-hidden pb-8">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 pb-4 scrollbar-hide">
            {galleryItems.map((item, idx) => (
              <motion.div
                key={item.id}
                className="snap-center flex-shrink-0 w-[80vw] max-w-[320px] aspect-[3/4] rounded-2xl overflow-hidden relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <img
                  src={item.img}
                  alt={`Gallery ${item.id}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop: 4-Column Grid Gallery - Full Size Images */}
        <div className="hidden lg:flex lg:justify-center">
          <div className="grid grid-cols-4 gap-3 auto-rows-auto" style={{ maxWidth: '900px', marginLeft: '200px' }}>
            {galleryItems.map((item, idx) => (
              <motion.div
                key={item.id}
                className="rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <img
                  src={item.img}
                  alt={`Gallery ${item.id}`}
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// ========== FOOTER ==========
function Footer() {
  return (
    <footer id="contact-us" className="bg-black/50 pt-12 md:pt-16 pb-6 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Logo */}
        <div className="text-center mb-10 md:mb-16">
          <h2
            className="text-2xl md:text-3xl text-[#D4AF37] tracking-[0.2em]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            THE BAR
          </h2>
          <p
            className="text-[10px] md:text-xs tracking-[0.3em] text-[#D4AF37]/70 mt-1"
            style={{ fontFamily: "var(--font-lato)" }}
          >
            EST. NISEKO 2016
          </p>
        </div>

        {/* Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-8 mb-10 md:mb-16">
          {/* Location */}
          <div className="text-center">
            <MapPin
              size={32}
              className="text-[#D4AF37] mx-auto mb-3 md:mb-4"
              strokeWidth={1}
            />
            <p
              className="text-white text-xs md:text-sm mb-1"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              123 Hirafu Street
            </p>
            <p
              className="text-[#A1A1AA] text-xs md:text-sm"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              Niseko, Hokkaido, Japan
            </p>
          </div>

          {/* Hours */}
          <div className="text-center">
            <Clock
              size={32}
              className="text-[#D4AF37] mx-auto mb-3 md:mb-4"
              strokeWidth={1}
            />
            <p
              className="text-[#A1A1AA] text-xs md:text-sm"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              Mon-Thurs: 6pm-1am
            </p>
            <p
              className="text-[#A1A1AA] text-xs md:text-sm"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              Fri: 6pm-2am
            </p>
            <p
              className="text-[#A1A1AA] text-xs md:text-sm"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              Sat: 3pm-2am
            </p>
          </div>

          {/* Contact */}
          <div className="text-center">
            <Phone
              size={32}
              className="text-[#D4AF37] mx-auto mb-3 md:mb-4"
              strokeWidth={1}
            />
            <p
              className="text-white text-xs md:text-sm mb-1"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              +81 136 22 1234
            </p>
            <p
              className="text-[#A1A1AA] text-xs md:text-sm break-all"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              info@thebar-niseko.jp
            </p>
          </div>

          {/* Social Icons */}
          <div className="text-center">
            <div className="flex justify-center gap-3">
              <a
                href="#"
                className="w-10 h-10 md:w-12 md:h-12 border border-[#D4AF37] rounded-full flex items-center justify-center hover:bg-[#D4AF37] group transition-colors"
              >
                <Facebook
                  size={18}
                  className="text-[#D4AF37] group-hover:text-black transition-colors"
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 md:w-12 md:h-12 border border-[#D4AF37] rounded-full flex items-center justify-center hover:bg-[#D4AF37] group transition-colors"
              >
                <Twitter
                  size={18}
                  className="text-[#D4AF37] group-hover:text-black transition-colors"
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 md:w-12 md:h-12 border border-[#D4AF37] rounded-full flex items-center justify-center hover:bg-[#D4AF37] group transition-colors"
              >
                <Instagram
                  size={18}
                  className="text-[#D4AF37] group-hover:text-black transition-colors"
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 md:w-12 md:h-12 border border-[#D4AF37] rounded-full flex items-center justify-center hover:bg-[#D4AF37] group transition-colors"
              >
                <Youtube
                  size={18}
                  className="text-[#D4AF37] group-hover:text-black transition-colors"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:col-span-2 lg:col-span-1">
            <nav className="flex flex-wrap justify-center gap-4 lg:flex-col lg:gap-2">
              {["Menu", "About", "Gallery", "Events", "Contact Us"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-[#A1A1AA] text-xs md:text-sm hover:text-[#D4AF37] transition-colors"
                    style={{ fontFamily: "var(--font-lato)" }}
                  >
                    {link}
                  </a>
                )
              )}
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-4 md:mb-6" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p
            className="text-[#A1A1AA] text-[10px] md:text-xs text-center"
            style={{ fontFamily: "var(--font-lato)" }}
          >
            Copyright 2020. All Rights Reserved
          </p>
          <div className="flex gap-3 md:gap-4">
            <a
              href="#"
              className="text-[#A1A1AA] text-[10px] md:text-xs hover:text-white transition-colors"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              Privacy Policy
            </a>
            <span className="text-[#A1A1AA] text-[10px] md:text-xs">|</span>
            <a
              href="#"
              className="text-[#A1A1AA] text-[10px] md:text-xs hover:text-white transition-colors"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ========== MAIN PAGE ==========
export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MenuSection />
      <FoodMenuSection />
      <GallerySection />
      {/* <Footer /> */}
    </main>
  );
}
