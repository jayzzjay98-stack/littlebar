"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Masonry from "@/components/Masonry";
import Navbar from "@/components/Navbar";
import ReservationModal from "@/components/ReservationModal";
import {
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



// ========== HERO SECTION ==========
function HeroSection() {
  return (
    <section id="home" className="glp-section relative h-[85dvh] md:h-screen w-full overflow-hidden">
      {/* 1. Background Image */}
      {/* Mobile Background - no zoom */}
      <div className="md:hidden absolute inset-0 z-0">
        <Image
          src="/bg-main.webp"
          alt="Intimate atmosphere and warm lighting at LITTLE LAO bar"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 100vw"
          className="object-cover object-top"
        />
        {/* Dark overlay for mobile */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
      </div>

      {/* Desktop Background - with zoom animation */}
      <motion.div
        className="hidden md:block absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      >
        <div className="relative w-full h-full">
          <Image
            src="/bg-main.webp"
            alt="LITTLE LAO premium craftsmanship and speakeasy bar sign in Niseko"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover object-center"
          />
        </div>
        {/* 2. Magic Filters: Dark Luxury Theme */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </motion.div>

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
            className="glp-movable text-gray-300 tracking-[0.3em] text-xs md:text-sm uppercase"
            style={{ fontFamily: "var(--font-lato)", marginBottom: '20px', '--x-offset': '0px', '--y-offset': '0px' } as React.CSSProperties}
          >
            Original Taste of Luang Prabang
          </motion.p>

          {/* Main Title - LITTLE LAO */}
          <motion.h1
            variants={fadeUp}
            className="glp-movable text-5xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] drop-shadow-2xl"
            style={{ fontFamily: "var(--font-cinzel)", marginBottom: '10px', '--x-offset': '0px', '--y-offset': '0px' } as React.CSSProperties}
          >
            LITTLE LAO <span className="text-xs opacity-20">v2</span>
          </motion.h1>



          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="glp-movable text-white text-3xl md:text-5xl tracking-wide"
            style={{ fontFamily: "'Caveat'", '--x-offset': '0px', '--y-offset': '0px' } as React.CSSProperties}
          >
            Bar and Culture
          </motion.p>
        </motion.div>
      </div>

    </section>
  );
}

// ========== ABOUT SECTION ==========
function AboutSection() {
  return (
    <section id="about" className="glp-section flex flex-col lg:flex-row min-h-[80vh]">
      {/* Left - Text */}
      <motion.div
        className="lg:w-1/2 bg-black/40 flex items-center justify-center px-6 md:px-16 py-12 lg:py-20"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-lg text-center lg:text-left">
          <h2
            className="glp-movable text-4xl sm:text-5xl md:text-6xl text-[#D4AF37] mb-6 lg:mb-8"
            style={{ fontFamily: "var(--font-great-vibes)", '--x-offset': '0px', '--y-offset': '0px' } as React.CSSProperties}
          >
            About Little Lao
          </h2>

          <p
            className="text-base sm:text-lg md:text-xl text-[#A1A1AA] leading-relaxed mb-8 lg:mb-10"
            style={{ fontFamily: "var(--font-lato)" }}
          >
            We take pride in serving the 'Original Taste of Luang Prabang featuring authentic Lao cuisine crafted from time-honored recipes alongside our signature artisanal cocktails. From locally sourced botanicals to rare spirits, each creation is prepared with precision and passion by our master team to celebrate the vibrant spirit of Laos.
          </p>
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
        <Image
          src="/about-lao-bar.webp"
          alt="Authentic Lao bar atmosphere at LITTLE LAO"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
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
    description: "Host your exclusive gatherings at LITTLE LAO.",
  },
];

function EventsSection({ onReserveClick }: { onReserveClick?: () => void }) {
  return (
    <section id="events" className="glp-section bg-black/40 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="glp-movable text-5xl text-[#D4AF37] mb-4"
            style={{ fontFamily: "var(--font-great-vibes)", '--x-offset': '0px', '--y-offset': '0px' } as React.CSSProperties}
          >
            Upcoming Events
          </h2>
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
          <button
            onClick={onReserveClick}
            className="glp-movable px-8 py-3 border border-[#D4AF37] text-white tracking-wider uppercase text-sm hover:bg-[#D4AF37] hover:text-black transition-all"
            style={{ '--x-offset': '0px', '--y-offset': '0px' } as React.CSSProperties}
          >
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
    image: "/cocktail-1.webp",
  },
  {
    name: "Little Lao Eggnog",
    ingredients: "Hine VSOP Cognac / Coconut Cream / Heavy Cream / Mak Mart Peppercorn / Egg",
    image: "/cocktail-2.webp",
  },
  {
    name: "Lao Mulled Wine",
    ingredients: "Côte du Rhône / Mak Mont Mulberry / Orange / Mak Toom Bale / Star Anise",
    image: "/cocktail-3.webp",
  },
  {
    name: "Lemongrass Gin",
    ingredients: "London Dry Gin / Fresh Lemongrass / Lime / Honey Syrup / Soda Water",
    image: "/cocktail-4.webp",
  },
  {
    name: "Mekong Sunset",
    ingredients: "Lao White Rum / Passion Fruit / Mango / Lime / Orgeat Syrup",
    image: "/cocktail-5.webp",
  },
  {
    name: "Jasmine Royale",
    ingredients: "Premium Vodka / Jasmine Tea / Elderflower / Lemon / Champagne Float",
    image: "/cocktail-6.webp",
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
      className="glp-section relative bg-black/60 overflow-hidden"
      style={{ paddingTop: '60px', paddingBottom: '80px' }}
    >

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center px-4"
          style={{ marginBottom: '40px' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 md:gap-4 lg:translate-x-[104px]">
            <motion.div
              className="h-0.5 rounded-full w-8 md:w-20"
              style={{
                background: 'linear-gradient(90deg, transparent, #D4AF37, #FFD700)'
              }}
            />
            <motion.h2
              className="glp-movable text-3xl md:text-5xl lg:text-6xl text-[#D4AF37] whitespace-nowrap"
              style={{ fontFamily: "'Caveat'", '--x-offset': '0px', '--y-offset': '0px' } as React.CSSProperties}
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
        <div className="lg:hidden overflow-x-auto scroll-smooth pb-8 scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
          <div className="flex gap-6 px-6" style={{ width: 'max-content' }}>
            {signatureDrinks.map((drink, idx) => {
              const isFlipped = selectedCard === idx;
              return (
                <div
                  key={idx}
                  className="w-[70vw] max-w-[280px] h-[400px] relative flex-shrink-0 group perspective-1000"
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
                      <div className="absolute inset-0">
                        <Image
                          src={drink.image}
                          alt={`${drink.name} signature cocktail crafted at LITTLE LAO`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 768px) 70vw, 280px"
                        />
                      </div>
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
                      className="absolute inset-0 rounded-[32px] overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#D4AF37]/30 flex flex-col items-center justify-start px-6 text-center"
                      style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                        paddingTop: '100px', // Adjusted from 180px
                        paddingBottom: '24px'
                      }}
                    >
                      <div className="inline-block relative" style={{ marginBottom: '32px' }}>
                        <h3
                          className="text-xl text-[#D4AF37] mb-4"
                          style={{ fontFamily: "'Koblenz'" }}
                        >
                          {drink.name}
                        </h3>
                        <div
                          className="h-0.5 w-full rounded-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
                        />
                      </div>
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
                      <Image
                        src={drink.image}
                        alt={`${drink.name} signature cocktail at LITTLE LAO`}
                        fill
                        className="object-cover"
                        sizes="320px"
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
                      <div
                        className="flex flex-col items-center justify-start h-full px-6"
                        style={{ paddingTop: '100px', paddingBottom: '32px' }}
                      >
                        {/* Title Section */}
                        <div className="text-center" style={{ marginBottom: '40px' }}>
                          <div className="inline-block relative">
                            <h3
                              className="text-2xl md:text-3xl text-[#D4AF37] mb-3 text-center"
                              style={{ fontFamily: "'Koblenz'" }}
                            >
                              {drink.name}
                            </h3>
                            <div
                              className="h-0.5 rounded-full w-full"
                              style={{
                                background: 'linear-gradient(90deg, transparent, #D4AF37, #FFD700, #D4AF37, transparent)'
                              }}
                            />
                          </div>
                        </div>

                        {/* Ingredients Section */}
                        <div className="text-center">
                          <p
                            className="text-white/90 text-sm leading-relaxed"
                            style={{ fontFamily: "'Cause'" }}
                          >
                            {drink.ingredients.split(' / ').map((ingredient, i) => (
                              <span key={i} className="block mb-1.5">
                                {ingredient}
                              </span>
                            ))}
                          </p>
                        </div>
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
    image: "/laap-ped.png",
    ingredients: (
      <>
        Minced Duck / Toasted Rice / Fresh Herbs / <br className="md:hidden" />
        Fish Sauce / Lime
      </>
    ),
  },
  {
    name: "Khao Piak Sen",
    image: "/khao-piak-sen.png",
    ingredients: "Rice Noodles / Chicken Broth / Poached Chicken / Crispy Garlic / Spring Onion",
  },
  {
    name: "Or Lam",
    image: "/or-lam.png",
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
      className="glp-section relative bg-black/50 overflow-hidden"
      style={{ paddingTop: '60px', paddingBottom: '80px' }}
    >

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center"
          style={{ marginBottom: '40px' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 lg:translate-x-[104px]">
            <motion.div
              className="h-0.5 rounded-full"
              style={{
                width: '80px',
                background: 'linear-gradient(90deg, transparent, #D4AF37, #FFD700)'
              }}
            />
            <motion.h2
              className="glp-movable text-4xl md:text-5xl lg:text-6xl text-[#D4AF37]"
              style={{ fontFamily: "'Caveat'", '--x-offset': '0px', '--y-offset': '0px' } as React.CSSProperties}
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
              className="relative rounded-[32px] overflow-hidden mb-10 w-[88%] h-[280px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/food-menu.webp"
                alt="Signature Lao dish prepared with authentic ingredients at LITTLE LAO"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 88vw, 0px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </motion.div>
          </div>

          {/* Menu Items List */}
          <div className="space-y-16 mx-6 pl-[20px]">
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
                  <h3
                    className="text-2xl text-white group-hover:text-[#D4AF37] transition-colors"
                    style={{ fontFamily: "'Koblenz'" }}
                  >
                    {food.name}
                  </h3>
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
          {/* Left: Menu Items - Aligned to right side of left column */}
          <motion.div
            className="flex flex-col items-center lg:max-w-[600px] mx-auto lg:translate-x-[104px]"

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
                style={{ marginBottom: '20px' }}
              >
                <h3
                  className="text-4xl text-white group-hover:text-[#D4AF37] transition-colors duration-300 mb-6"
                  style={{ fontFamily: "'Koblenz'" }}
                >
                  {food.name}
                </h3>
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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[550px]">
              <Image
                src="/food-menu.webp"
                alt="Authentic Lao culinary masterpiece at LITTLE LAO"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 0px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
}

// ========== GALLERY SECTION ==========
const galleryItems = [
  { id: "1", img: "/gallery-1.webp", url: "#", height: 500 },
  { id: "2", img: "/gallery-2.webp", url: "#", height: 550 },
  { id: "3", img: "/gallery-3.webp", url: "#", height: 600 },
  { id: "4", img: "/gallery-4.webp", url: "#", height: 520 },
  { id: "5", img: "/gallery-5.webp", url: "#", height: 450 },
  { id: "6", img: "/gallery-6.webp", url: "#", height: 580 },
  { id: "7", img: "/gallery-7.webp", url: "#", height: 380 },
  { id: "8", img: "/gallery-8.webp", url: "#", height: 400 },
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
          <div className="flex items-center justify-center gap-2 md:gap-4 lg:translate-x-[104px]">
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
          <div className="flex gap-4 overflow-x-auto scroll-smooth px-6 pb-4 scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
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

        {/* Desktop: 4-Column Grid Gallery */}
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
    <footer id="contact-us" className="bg-gradient-to-b from-black/40 to-black/80 flex flex-col" style={{ minHeight: '600px', paddingTop: '40px' }}>

      <div className="w-full px-6 md:px-8" style={{ paddingBottom: '40px' }}>

        {/* Divider Line - Moved Inside */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" style={{ marginTop: '100px', marginBottom: '0px' }} />

        {/* Logo - Centered */}
        <div className="text-center" style={{ marginBottom: '10px' }}>
          <img
            src="/logo-final.webp"
            alt="Little Lao"
            style={{ height: '320px', margin: '0 auto', marginTop: '-80px' }}
          />
        </div>

        {/* Desktop Footer - Original Layout */}
        <div className="hidden md:flex md:flex-row gap-16 justify-center items-start" style={{ marginTop: '-60px' }}>
          {/* Location */}
          <div className="flex items-start gap-4">
            <MapPin size={28} className="text-[#D4AF37] flex-shrink-0 mt-1" strokeWidth={1.5} />
            <div>
              <p className="text-white/80 text-xl leading-relaxed" style={{ fontFamily: "var(--font-lato)" }}>
                Sisavangvong Road<br />
                Luang Prabang, Laos
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-start gap-4">
            <Clock size={28} className="text-[#D4AF37] flex-shrink-0 mt-1" strokeWidth={1.5} />
            <div>
              <p className="text-white/80 text-xl leading-relaxed" style={{ fontFamily: "var(--font-lato)" }}>
                Mon - Thurs: 6pm - 1am<br />
                Fri: 6pm - 2am<br />
                Sat: 3pm - 2am
              </p>
            </div>
          </div>

          {/* Contact + Social */}
          <div className="flex items-start gap-4">
            <Phone size={28} className="text-[#D4AF37] flex-shrink-0 mt-1" strokeWidth={1.5} />
            <div>
              <p className="text-white/80 text-xl leading-relaxed" style={{ fontFamily: "var(--font-lato)" }}>
                +856 71 254 678
              </p>
              <p className="text-white/80 text-xl leading-relaxed" style={{ fontFamily: "var(--font-lato)" }}>
                info@littlelao.la
              </p>
              <div className="flex gap-3" style={{ marginTop: '15px' }}>
                <a href="#" className="w-10 h-10 border border-[#D4AF37]/50 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] group transition-all duration-300">
                  <Facebook size={16} className="text-[#D4AF37] group-hover:text-black transition-colors" />
                </a>
                <a href="#" className="w-10 h-10 border border-[#D4AF37]/50 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] group transition-all duration-300">
                  <Instagram size={16} className="text-[#D4AF37] group-hover:text-black transition-colors" />
                </a>
                <a href="#" className="w-10 h-10 border border-[#D4AF37]/50 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] group transition-all duration-300">
                  <Twitter size={16} className="text-[#D4AF37] group-hover:text-black transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Footer - 2 Column Grid */}
        <div className="md:hidden grid grid-cols-2 gap-6" style={{ marginTop: '-60px' }}>
          {/* Left Column: Location */}
          <div className="flex items-start gap-3">
            <MapPin size={24} className="text-[#D4AF37] flex-shrink-0 mt-1" strokeWidth={1.5} />
            <div>
              <p className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: "var(--font-lato)" }}>
                Sisavangvong Road<br />
                Luang Prabang, Laos
              </p>
            </div>
          </div>

          {/* Right Column: Hours + Contact stacked */}
          <div className="flex flex-col gap-4">
            {/* Hours */}
            <div className="flex items-start gap-3">
              <Clock size={24} className="text-[#D4AF37] flex-shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <p className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: "var(--font-lato)" }}>
                  Mon - Thurs: 6pm - 1am<br />
                  Fri: 6pm - 2am<br />
                  Sat: 3pm - 2am
                </p>
              </div>
            </div>

            {/* Contact + Social */}
            <div className="flex items-start gap-3">
              <Phone size={24} className="text-[#D4AF37] flex-shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <p className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: "var(--font-lato)" }}>
                  +856 71 254 678
                </p>
                <p className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: "var(--font-lato)" }}>
                  info@littlelao.la
                </p>
                <div className="flex gap-2" style={{ marginTop: '10px' }}>
                  <a href="#" className="w-8 h-8 border border-[#D4AF37]/50 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] group transition-all duration-300">
                    <Facebook size={14} className="text-[#D4AF37] group-hover:text-black transition-colors" />
                  </a>
                  <a href="#" className="w-8 h-8 border border-[#D4AF37]/50 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] group transition-all duration-300">
                    <Instagram size={14} className="text-[#D4AF37] group-hover:text-black transition-colors" />
                  </a>
                  <a href="#" className="w-8 h-8 border border-[#D4AF37]/50 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] group transition-all duration-300">
                    <Twitter size={14} className="text-[#D4AF37] group-hover:text-black transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ========== MAIN PAGE ==========
export default function Home() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const openReservation = () => setIsReservationOpen(true);

  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <FoodMenuSection />
      <GallerySection />
      <Footer />
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </main>
  );
}
