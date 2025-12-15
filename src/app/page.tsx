"use client";

import { motion } from "framer-motion";
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
    <div className="bg-black border-b border-white/10">
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
  const links = ["HOME", "MENU", "GALLERY", "CONTACT US"];

  return (
    <nav className="absolute top-[41px] left-0 right-0 z-40 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col">
          <h1
            className="text-2xl md:text-3xl text-[#D4AF37] tracking-[0.2em]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            THE BAR
          </h1>
          <span
            className="text-[10px] tracking-[0.3em] text-white/60"
            style={{ fontFamily: "var(--font-lato)" }}
          >
            EST. NISEKO 2016
          </span>
        </div>

        {/* Center Links */}
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

        {/* Search Icon */}
        <button className="w-10 h-10 rounded-full border border-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] group transition-colors">
          <Search
            size={18}
            className="text-[#D4AF37] group-hover:text-black transition-colors"
          />
        </button>
      </div>
    </nav>
  );
}

// ========== HERO SECTION ==========
function HeroSection() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">

      {/* 1. Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
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
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >

        {/* Small Tagline */}
        <motion.p
          variants={fadeUp}
          className="text-gray-300 tracking-[0.3em] text-xs md:text-sm uppercase mb-4"
          style={{ fontFamily: "var(--font-lato)" }}
        >
          Original Taste of Luang Prabang
        </motion.p>

        {/* Main Title - LITTLE LAO */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl md:text-7xl lg:text-8xl text-[#D4AF37] drop-shadow-2xl"
          style={{ fontFamily: "var(--font-cinzel)" }}
        >
          LITTLE LAO
        </motion.h1>

        {/* Decorative Divider */}
        <motion.div
          variants={fadeUp}
          className="w-24 h-1 bg-[#D4AF37] my-6 rounded-full opacity-80"
        />

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="text-white text-xl md:text-3xl italic tracking-wide"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Bar and Culture
        </motion.p>

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
        className="lg:w-1/2 wood-texture flex items-center justify-center px-8 md:px-16 py-20"
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
    <section id="events" className="bg-black py-20">
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
const menuItems = [
  {
    name: "Black Nikka Clear",
    volume: "100ml",
    description:
      "Nikka Black Clear brings together vintages of carefully selected malt and grain whiskies. Light and smooth with delicate sweetness.",
  },
  {
    name: "Yamazaki 12 Year",
    volume: "100ml",
    description:
      "Suntory's flagship single malt with notes of dried fruit, vanilla, and subtle oak. A true Japanese masterpiece.",
  },
  {
    name: "Hibiki Harmony",
    volume: "100ml",
    description:
      "A beautifully balanced blend with silky taste featuring honey, orange peel, and a long, sweet finish.",
  },
];

const craftSpirits = [
  {
    name: "Roku Japanese Gin",
    volume: "100ml",
    description:
      "Crafted with six unique Japanese botanicals including sakura flower and yuzu peel.",
  },
  {
    name: "Nikka Coffey Vodka",
    volume: "100ml",
    description:
      "Exceptionally smooth vodka distilled using traditional Coffey stills.",
  },
];

function MenuSection() {
  return (
    <section
      id="menu"
      className="py-20 relative"
      style={{
        background: "rgba(0, 0, 0, 0.85)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div
            className="lg:w-3/5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3
              className="text-4xl text-[#D4AF37]"
              style={{ fontFamily: "var(--font-great-vibes)", marginLeft: "300px" }}
            >
              Our Signature Drinks
            </h3>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            className="lg:w-2/5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginLeft: "-100px" }}
          >
            <div className="relative h-[600px] w-[600px] rounded-lg overflow-hidden">
              <img
                src="/cocktail-menu.jpg"
                alt="Bartender pouring cocktail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
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
    img: "/gallery-1.jpg",
    url: "#",
    height: 500
  },
  {
    id: "2",
    img: "/gallery-2.jpg",
    url: "#",
    height: 550
  },
  {
    id: "3",
    img: "/gallery-3.jpg",
    url: "#",
    height: 600
  },
  {
    id: "4",
    img: "/gallery-4.jpg",
    url: "#",
    height: 520
  },
  {
    id: "5",
    img: "/gallery-5.jpg",
    url: "#",
    height: 450
  },
  {
    id: "6",
    img: "/gallery-6.jpg",
    url: "#",
    height: 580
  },
  {
    id: "7",
    img: "/gallery-7.jpg",
    url: "#",
    height: 380
  },
  {
    id: "8",
    img: "/gallery-8.jpg",
    url: "#",
    height: 400
  },
];

function GallerySection() {
  return (
    <section id="gallery" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
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
            Our Gallery
          </h3>
          <p
            className="text-[#A1A1AA] text-sm"
            style={{ fontFamily: "var(--font-lato)" }}
          >
            Moments captured at LITTLE LAO
          </p>
        </motion.div>

        {/* Masonry Gallery */}
        <div className="h-[800px] w-full">
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
    <footer id="contact-us" className="bg-black pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Logo */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl text-[#D4AF37] tracking-[0.2em]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            THE BAR
          </h2>
          <p
            className="text-xs tracking-[0.3em] text-[#D4AF37]/70 mt-1"
            style={{ fontFamily: "var(--font-lato)" }}
          >
            EST. NISEKO 2016
          </p>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {/* Location */}
          <div className="text-center lg:text-left">
            <MapPin
              size={40}
              className="text-[#D4AF37] mx-auto lg:mx-0 mb-4"
              strokeWidth={1}
            />
            <p
              className="text-white text-sm mb-1"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              123 Hirafu Street
            </p>
            <p
              className="text-[#A1A1AA] text-sm"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              Niseko, Hokkaido, Japan
            </p>
          </div>

          {/* Hours */}
          <div className="text-center lg:text-left">
            <Clock
              size={40}
              className="text-[#D4AF37] mx-auto lg:mx-0 mb-4"
              strokeWidth={1}
            />
            <p
              className="text-[#A1A1AA] text-sm"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              Mon-Thurs: 6pm-1am
            </p>
            <p
              className="text-[#A1A1AA] text-sm"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              Fri: 6pm-2am
            </p>
            <p
              className="text-[#A1A1AA] text-sm"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              Sat: 3pm-2am
            </p>
          </div>

          {/* Contact */}
          <div className="text-center lg:text-left">
            <Phone
              size={40}
              className="text-[#D4AF37] mx-auto lg:mx-0 mb-4"
              strokeWidth={1}
            />
            <p
              className="text-white text-sm mb-1"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              +81 136 22 1234
            </p>
            <p
              className="text-[#A1A1AA] text-sm"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              info@thebar-niseko.jp
            </p>
          </div>

          {/* Social Icons 2x2 */}
          <div className="text-center">
            <div className="grid grid-cols-2 gap-4 max-w-[120px] mx-auto lg:mx-0">
              <a
                href="#"
                className="w-12 h-12 border border-[#D4AF37] rounded-full flex items-center justify-center hover:bg-[#D4AF37] group transition-colors"
              >
                <Facebook
                  size={20}
                  className="text-[#D4AF37] group-hover:text-black transition-colors"
                />
              </a>
              <a
                href="#"
                className="w-12 h-12 border border-[#D4AF37] rounded-full flex items-center justify-center hover:bg-[#D4AF37] group transition-colors"
              >
                <Twitter
                  size={20}
                  className="text-[#D4AF37] group-hover:text-black transition-colors"
                />
              </a>
              <a
                href="#"
                className="w-12 h-12 border border-[#D4AF37] rounded-full flex items-center justify-center hover:bg-[#D4AF37] group transition-colors"
              >
                <Instagram
                  size={20}
                  className="text-[#D4AF37] group-hover:text-black transition-colors"
                />
              </a>
              <a
                href="#"
                className="w-12 h-12 border border-[#D4AF37] rounded-full flex items-center justify-center hover:bg-[#D4AF37] group transition-colors"
              >
                <Youtube
                  size={20}
                  className="text-[#D4AF37] group-hover:text-black transition-colors"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center lg:text-right col-span-2 md:col-span-1">
            <nav className="flex flex-col gap-2">
              {["Menu", "About", "Gallery", "Events", "Contact Us"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-[#A1A1AA] text-sm hover:text-[#D4AF37] transition-colors"
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
        <div className="w-full h-px bg-white/10 mb-6" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className="text-[#A1A1AA] text-xs"
            style={{ fontFamily: "var(--font-lato)" }}
          >
            Copyright 2020. All Rights Reserved
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-[#A1A1AA] text-xs hover:text-white transition-colors"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              Privacy Policy
            </a>
            <span className="text-[#A1A1AA] text-xs">|</span>
            <a
              href="#"
              className="text-[#A1A1AA] text-xs hover:text-white transition-colors"
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
      <GallerySection />
      <Footer />
    </main>
  );
}
