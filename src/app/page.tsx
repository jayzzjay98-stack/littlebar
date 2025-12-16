"use client";

import { useState } from "react";
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

// ========== TOP BAR ==========
function TopBar() {
  return (
    <div className="hidden md:block bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-end items-center gap-6">
        <span className="text-xs uppercase tracking-wider text-[#A1A1AA]">
          Follow Us
        </span>
        <div className="w-px h-4 bg-white/20" />
        <span className="text-xs uppercase tracking-wider text-[#A1A1AA]">
          Open at 6 PM to 2:00 AM
        </span>
      </div>
    </div>
  );
}

// ========== NAVBAR ==========
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = ["HOME", "MENU", "GALLERY", "CONTACT US"];

  return (
    <>
      <nav className="absolute top-0 md:top-[41px] left-0 right-0 z-40 bg-black/60 md:bg-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex flex-col">
            <h1
              className="text-xl md:text-3xl text-[#D4AF37] tracking-[0.2em]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              THE BAR
            </h1>
            <span
              className="text-[8px] md:text-[10px] tracking-[0.3em] text-white/60"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              EST. NISEKO 2016
            </span>
          </div>

          {/* Center Links - Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className="text-xs tracking-[0.2em] text-white hover:text-[#D4AF37] transition-colors"
                style={{ fontFamily: "var(--font-lato)" }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button & Search */}
          <div className="flex items-center gap-3">
            {/* Search Icon - Hidden on mobile */}
            <button className="hidden md:flex w-10 h-10 rounded-full border border-[#D4AF37] items-center justify-center hover:bg-[#D4AF37] group transition-colors">
              <Search
                size={18}
                className="text-[#D4AF37] group-hover:text-black transition-colors"
              />
            </button>

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
        {isMenuOpen && (
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
        )}
      </AnimatePresence>
    </>
  );
}

// ========== HERO SECTION ==========
function HeroSection() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">

      {/* 1. Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bg-main.webp"
          alt="Little Lao Shop Sign"
          className="w-full h-full object-cover object-center"
        />

        {/* 2. Magic Filters: Dark Luxury Theme */}
        {/* Layer 1: 60% black overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Layer 2: Gradient from bottom for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* 3. Content */}
      <div className="relative z-10 w-full h-full">
        {/* Small Tagline - Absolute */}
        <motion.p
          variants={fadeUp}
          className="absolute text-gray-300 tracking-[0.3em] text-xs md:text-sm uppercase w-full text-center"
          initial="hidden"
          animate="visible"
          style={{ fontFamily: "var(--font-lato)", top: '35%', left: 0 }}
        >
          Original Taste of Luang Prabang
        </motion.p>

        {/* Main Title - LITTLE LAO - Absolute */}
        <motion.h1
          variants={fadeUp}
          className="absolute text-5xl md:text-7xl lg:text-8xl text-[#D4AF37] drop-shadow-2xl w-full text-center"
          initial="hidden"
          animate="visible"
          style={{ fontFamily: "var(--font-cinzel)", top: '40%', left: 0 }}
        >
          LITTLE LAO
        </motion.h1>

        {/* Decorative Divider - Absolute */}
        <motion.div
          variants={fadeUp}
          className="absolute bg-[#D4AF37] h-1 rounded-full opacity-80 left-1/2 -translate-x-1/2"
          initial="hidden"
          animate="visible"
          style={{ width: '96px', top: '53%' }}
        />

        {/* Subtitle - Absolute */}
        <motion.p
          variants={fadeUp}
          className="absolute text-white text-xl md:text-3xl italic tracking-wide w-full text-center"
          initial="hidden"
          animate="visible"
          style={{ fontFamily: "var(--font-lato)", top: '56%', left: 0 }}
        >
          Bar and Culture
        </motion.p>
      </div>
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
  },
  {
    name: "Little Lao Eggnog",
    ingredients: "Hine VSOP Cognac / Coconut Cream / Heavy Cream / Mak Mart Peppercorn / Egg",
  },
  {
    name: "Lao Mulled Wine",
    ingredients: "Côte du Rhône / Mak Mont Mulberry / Orange / Mak Toom Bale / Star Anise",
  },
];

function MenuSection() {
  return (
    <section
      id="menu"
      className="py-16 md:py-24 relative"
      style={{
        background: "rgba(0, 0, 0, 0.6)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Mobile Layout (flexbox) */}
        <div className="lg:hidden flex flex-col items-center">
          {/* Title */}
          <motion.h3
            className="text-3xl md:text-4xl text-[#D4AF37] mb-8 text-center"
            style={{ fontFamily: "'Caveat'" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Signature Drinks
          </motion.h3>

          {/* Image */}
          <motion.div
            className="w-full max-w-sm mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/cocktail-menu.webp"
              alt="Signature cocktails"
              className="w-full h-auto object-contain"
            />
          </motion.div>

          {/* Menu Items */}
          <div className="space-y-6 w-full max-w-md">
            {signatureDrinks.map((drink, idx) => (
              <motion.div
                key={idx}
                className="group text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <h4
                  className="text-xl text-white group-hover:text-[#D4AF37] transition-colors tracking-wide mb-1"
                  style={{ fontFamily: "'Koblenz'" }}
                >
                  {drink.name}
                </h4>
                <div className="w-24 mx-auto border-b border-[#A1A1AA]/60 mb-2" />
                <p
                  className="text-[#A1A1AA] text-sm leading-relaxed"
                  style={{ fontFamily: "'Cause'" }}
                >
                  {drink.ingredients}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop Layout (absolute positioning) */}
        <div className="hidden lg:block relative min-h-[800px]">
          {/* Title - Absolute positioned */}
          <motion.h3
            className="absolute text-3xl md:text-4xl lg:text-5xl text-[#D4AF37]"
            style={{ fontFamily: "'Caveat'", left: '210px', top: '50px' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Signature Drinks
          </motion.h3>

          {/* Menu Item 1 */}
          <motion.div
            className="absolute group"
            style={{ left: '150px', top: '200px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-2 inline-block">
              <h4
                className="text-xl md:text-2xl text-white whitespace-nowrap group-hover:text-[#D4AF37] transition-colors tracking-wide"
                style={{ fontFamily: "'Koblenz'" }}
              >
                {signatureDrinks[0].name}
              </h4>
              <div className="w-full border-b border-solid border-[#A1A1AA]/60 mt-1" />
            </div>
            <p
              className="text-[#A1A1AA] text-sm md:text-base leading-relaxed"
              style={{ fontFamily: "'Cause'" }}
            >
              {signatureDrinks[0].ingredients}
            </p>
          </motion.div>

          {/* Menu Item 2 */}
          <motion.div
            className="absolute group"
            style={{ left: '150px', top: '330px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="mb-2 inline-block">
              <h4
                className="text-xl md:text-2xl text-white whitespace-nowrap group-hover:text-[#D4AF37] transition-colors tracking-wide"
                style={{ fontFamily: "'Koblenz'" }}
              >
                {signatureDrinks[1].name}
              </h4>
              <div className="w-full border-b border-solid border-[#A1A1AA]/60 mt-1" />
            </div>
            <p
              className="text-[#A1A1AA] text-sm md:text-base leading-relaxed"
              style={{ fontFamily: "'Cause'" }}
            >
              {signatureDrinks[1].ingredients}
            </p>
          </motion.div>

          {/* Menu Item 3 */}
          <motion.div
            className="absolute group"
            style={{ left: '150px', top: '460px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="mb-2 inline-block">
              <h4
                className="text-xl md:text-2xl text-white whitespace-nowrap group-hover:text-[#D4AF37] transition-colors tracking-wide"
                style={{ fontFamily: "'Koblenz'" }}
              >
                {signatureDrinks[2].name}
              </h4>
              <div className="w-full border-b border-solid border-[#A1A1AA]/60 mt-1" />
            </div>
            <p
              className="text-[#A1A1AA] text-sm md:text-base leading-relaxed"
              style={{ fontFamily: "'Cause'" }}
            >
              {signatureDrinks[2].ingredients}
            </p>
          </motion.div>

          {/* Image - Absolute positioned */}
          <motion.div
            className="absolute lg:w-[45%] w-full"
            style={{ right: '50px', top: '100px' }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-[280px] md:h-[400px] lg:h-[500px] w-full overflow-hidden">
              <img
                src="/cocktail-menu.webp"
                alt="Signature cocktails"
                className="w-full h-full object-contain"
              />
            </div>
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
    ingredients: "Minced Duck / Toasted Rice / Fresh Herbs / Fish Sauce / Lime",
  },
  {
    name: "Khao Piak Sen",
    ingredients: "Rice Noodles / Chicken Broth / Poached Chicken / Crispy Garlic / Spring Onion",
  },
  {
    name: "Or Lam",
    ingredients: "Buffalo Meat / Lao Eggplant / Sakaan Wood / Chili Paste / Dill",
  },
];

function FoodMenuSection() {
  return (
    <section
      id="food-menu"
      className="py-16 md:py-24 lg:pt-[500px] lg:pb-24 relative"
      style={{
        background: "rgba(0, 0, 0, 0.6)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Mobile Layout (flexbox) */}
        <div className="lg:hidden flex flex-col items-center">
          {/* Title */}
          <motion.h3
            className="text-3xl md:text-4xl text-[#D4AF37] mb-8 text-center"
            style={{ fontFamily: "'Caveat'" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Signature Dishes
          </motion.h3>

          {/* Image */}
          <motion.div
            className="w-full max-w-sm mb-8 rounded-2xl overflow-hidden border-2 border-[#D4AF37]/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/food-menu.webp"
              alt="Signature dishes"
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Menu Items */}
          <div className="space-y-6 w-full max-w-md">
            {foodItems.map((food, idx) => (
              <motion.div
                key={idx}
                className="group text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <h4
                  className="text-xl text-white group-hover:text-[#D4AF37] transition-colors tracking-wide mb-1"
                  style={{ fontFamily: "'Koblenz'" }}
                >
                  {food.name}
                </h4>
                <div className="w-24 mx-auto border-b border-[#A1A1AA]/60 mb-2" />
                <p
                  className="text-[#A1A1AA] text-sm leading-relaxed"
                  style={{ fontFamily: "'Cause'" }}
                >
                  {food.ingredients}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop Layout (absolute positioning) */}
        <div className="hidden lg:block relative min-h-[800px]">
          {/* Title - Absolute positioned */}
          <motion.h3
            className="absolute text-3xl md:text-4xl lg:text-5xl text-[#D4AF37]"
            style={{ fontFamily: "'Caveat'", left: '210px', top: '0px' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Signature Dishes
          </motion.h3>

          {/* Menu Item 1 */}
          <motion.div
            className="absolute group"
            style={{ left: '150px', top: '150px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-2 inline-block">
              <h4
                className="text-xl md:text-2xl text-white whitespace-nowrap group-hover:text-[#D4AF37] transition-colors tracking-wide"
                style={{ fontFamily: "'Koblenz'" }}
              >
                {foodItems[0].name}
              </h4>
              <div className="w-full border-b border-solid border-[#A1A1AA]/60 mt-1" />
            </div>
            <p
              className="text-[#A1A1AA] text-sm md:text-base leading-relaxed"
              style={{ fontFamily: "'Cause'" }}
            >
              {foodItems[0].ingredients}
            </p>
          </motion.div>

          {/* Menu Item 2 */}
          <motion.div
            className="absolute group"
            style={{ left: '150px', top: '280px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="mb-2 inline-block">
              <h4
                className="text-xl md:text-2xl text-white whitespace-nowrap group-hover:text-[#D4AF37] transition-colors tracking-wide"
                style={{ fontFamily: "'Koblenz'" }}
              >
                {foodItems[1].name}
              </h4>
              <div className="w-full border-b border-solid border-[#A1A1AA]/60 mt-1" />
            </div>
            <p
              className="text-[#A1A1AA] text-sm md:text-base leading-relaxed"
              style={{ fontFamily: "'Cause'" }}
            >
              {foodItems[1].ingredients}
            </p>
          </motion.div>

          {/* Menu Item 3 */}
          <motion.div
            className="absolute group"
            style={{ left: '150px', top: '410px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="mb-2 inline-block">
              <h4
                className="text-xl md:text-2xl text-white whitespace-nowrap group-hover:text-[#D4AF37] transition-colors tracking-wide"
                style={{ fontFamily: "'Koblenz'" }}
              >
                {foodItems[2].name}
              </h4>
              <div className="w-full border-b border-solid border-[#A1A1AA]/60 mt-1" />
            </div>
            <p
              className="text-[#A1A1AA] text-sm md:text-base leading-relaxed"
              style={{ fontFamily: "'Cause'" }}
            >
              {foodItems[2].ingredients}
            </p>
          </motion.div>

          {/* Image - Absolute positioned */}
          <motion.div
            className="absolute lg:w-[45%] w-full"
            style={{ right: '0px', top: '100px' }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-[200px] md:h-[300px] lg:h-[380px] w-full rounded-3xl overflow-hidden bg-black/30 border-2 border-[#D4AF37]/30">
              <img
                src="/food-menu.webp"
                alt="Signature dishes"
                className="w-full h-full object-cover"
              />
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
    <section id="gallery" className="py-16 md:py-24 lg:relative lg:min-h-[1000px] w-full bg-black/40">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Title */}
        <motion.div
          className="text-center mb-8 lg:absolute lg:w-full lg:mb-0"
          style={{ top: '-100px', left: 0 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3
            className="text-xl md:text-3xl text-[#D4AF37] mb-2 md:mb-4"
            style={{ fontFamily: "'Caveat'" }}
          >
            Moments captured at LITTLE LAO
          </h3>
        </motion.div>

        {/* Mobile: Horizontal Scroll Gallery */}
        <div className="lg:hidden overflow-x-auto pb-4 -mx-4 px-4">
          <div className="flex gap-4" style={{ width: 'max-content' }}>
            {galleryItems.map((item, idx) => (
              <motion.div
                key={item.id}
                className="flex-shrink-0 w-[280px] h-[350px] rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <img
                  src={item.img}
                  alt={`Gallery ${item.id}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop: Masonry Gallery */}
        <div
          className="hidden lg:block lg:absolute w-full"
          style={{ top: '50px', left: 0, height: '800px' }}
        >
          <Masonry
            items={galleryItems}
            animateFrom="bottom"
            stagger={0.04}
            scaleOnHover={true}
            hoverScale={1.03}
            blurToFocus={true}
            colorShiftOnHover={true}
          />
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
      <TopBar />
      <Navbar />
      <HeroSection />
      <MenuSection />
      <FoodMenuSection />
      <GallerySection />
      {/* <Footer /> */}
    </main>
  );
}
