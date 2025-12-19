"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, Variants } from "framer-motion";
import { ArrowLeft, ArrowRightLeft } from "lucide-react";
import Link from "next/link";

// ========== DATA MOCKUPS ==========

const foodItems = [
    { id: 1, name: "A5 WAGYU STRIPLOIN", description: "Miyazaki Prefecture, Garlic Chips, Sea Salt", isSignature: true, img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop" },
    { id: 2, name: "CRISPY PORK BELLY", description: "Honey Glaze, Five Spice, Pickled Radish", isSignature: false, img: "https://images.unsplash.com/photo-1606471659766-07a587ae8f16?q=80&w=800&auto=format&fit=crop" },
    { id: 3, name: "TRUFFLE RIGATONI", description: "Wild Mushrooms, Pecorino, Fresh Shaved Truffle", isSignature: true, img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=800&auto=format&fit=crop" },
    { id: 4, name: "MISO GLAZED SEA BASS", description: "Ginger-Soy, Bok Choy, Sesame Crisps", isSignature: false, img: "https://images.unsplash.com/photo-1534080333754-010d2922754d?q=80&w=800&auto=format&fit=crop" },
    { id: 5, name: "GRILLED TIGER PRAWNS", description: "Chili Butter, Lemongrass, Fine Herbs", isSignature: true, img: "https://images.unsplash.com/photo-1565615822362-e737c050f52d?q=80&w=800&auto=format&fit=crop" },
    { id: 6, name: "FOIE GRAS BRULEE", description: "Fig Jam, Brioche, Balsamic Reduction", isSignature: false, img: "https://images.unsplash.com/photo-1559181567-c3190cb9959b?q=80&w=800&auto=format&fit=crop" },
    { id: 7, name: "HOKKAIDO SCALLOPS", description: "Uni Cream, Ikura, Shiso Oil", isSignature: true, img: "https://images.unsplash.com/photo-1599321412037-97554902c31c?q=80&w=800&auto=format&fit=crop" },
    { id: 8, name: "DUCK CONFIT", description: "Orange Glaze, Parsnip Puree, Crispy Skin", isSignature: false, img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop" },
    { id: 9, name: "LOBSTER THERMIDOR", description: "Cognac Cream, Gruyère, Tarragon", isSignature: true, img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=800&auto=format&fit=crop" },
];

const drinkItems = [
    { id: 1, name: "SMOKED OLD FASHIONED", description: "Bourbon, Maple, Cedar Smoke", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop" },
    { id: 2, name: "HIBIKI 17 YEARS", description: "Blended Japanese Whisky, Floral & Sweet", img: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&auto=format&fit=crop" },
    { id: 3, name: "SIGNATURE GIN TONIC", description: "Botanical Gin, Yuzu, Premium Tonic", img: "https://images.unsplash.com/photo-1551075501-40960cfbe58e?q=80&w=800&auto=format&fit=crop" },
    { id: 4, name: "YAMAZAKI SINGLE MALT", description: "Mizunara Cask, Fruity & Spicy", img: "https://images.unsplash.com/photo-1527281400828-ac737a999b9a?q=80&w=800&auto=format&fit=crop" },
    { id: 5, name: "NEGRONI ROYALE", description: "Special Blend Vermouth, Gold Flakes", img: "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=800&auto=format&fit=crop" },
    { id: 6, name: "ESPRESSO MARTINI", description: "Fresh Brewed Arabica, Vanilla Bean", img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=800&auto=format&fit=crop" },
];

// ========== ICONS & TEXTURES ==========

const RiceStalkIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#D4AF37]">
        <path d="M12 22C12 22 12 18 16 14C18 12 20 12 20 12M12 22C12 22 12 18 8 14C6 12 4 12 4 12M12 22V10M12 10C12 10 12 6 15 3M12 10C12 10 12 6 9 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="15" cy="3" r="1.5" fill="currentColor" />
        <circle cx="9" cy="3" r="1.5" fill="currentColor" />
        <circle cx="17" cy="8" r="1" fill="currentColor" />
        <circle cx="7" cy="8" r="1" fill="currentColor" />
    </svg>
);

const FiligreeDivider = () => (
    <div className="flex items-center justify-center gap-8 my-16">
        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
        <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
                <div key={i} className={`w-1 h-1 rounded-full bg-[#D4AF37] ${i === 2 ? 'scale-150' : 'opacity-40'}`} />
            ))}
        </div>
        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
    </div>
);

// ========== SUB-COMPONENTS ==========

const RestaurantMenuCard = ({ item, index }: { item: any; index: number }) => {
    return (
        <motion.div
            className="group relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: [0.215, 0.61, 0.355, 1] }}
        >
            <div className="relative aspect-square mb-4 rounded-xl overflow-hidden border border-[#D4AF37]/20 group-hover:border-[#D4AF37]/50 transition-all duration-500">
                <motion.img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="px-1">
                <h3 className="text-sm md:text-base tracking-[0.15em] text-[#D4AF37] mb-1" style={{ fontFamily: "var(--font-cinzel)" }}>
                    {item.name}
                </h3>
                <p className="text-[10px] md:text-xs text-white/40 tracking-wider" style={{ fontFamily: "var(--font-lato)" }}>
                    {item.description}
                </p>
            </div>
        </motion.div>
    );
};

const SpiritsCard = ({ item, index }: { item: any; index: number }) => {
    return (
        <motion.div
            className="group relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: [0.215, 0.61, 0.355, 1] }}
        >
            <div className="relative aspect-square mb-4 rounded-xl overflow-hidden border border-[#D4AF37]/20 group-hover:border-[#D4AF37]/50 transition-all duration-500">
                <motion.img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="px-1">
                <h3 className="text-sm md:text-base tracking-[0.15em] text-[#D4AF37] mb-1" style={{ fontFamily: "var(--font-cinzel)" }}>
                    {item.name}
                </h3>
                <p className="text-[10px] md:text-xs text-white/40 tracking-wider" style={{ fontFamily: "var(--font-lato)" }}>
                    {item.description}
                </p>
            </div>
        </motion.div>
    );
};

// ========== MAIN PAGE ==========

export default function MenuPage() {
    const [view, setView] = useState<"selection" | "food" | "drinks">("selection");
    const [activeImg, setActiveImg] = useState<string | null>(null);

    // Cursor tracking for list view
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth springs for the preview image
    const springConfig = { stiffness: 150, damping: 20, mass: 0.1 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    const shutterVariants: Variants = {
        initial: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
        enter: {
            clipPath: "inset(0 0% 0 0)",
            opacity: 1,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            clipPath: "inset(0 0 0 100%)",
            opacity: 0,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
        }
    };

    return (
        <main className={`min-h-screen transition-colors duration-1000 relative overflow-x-hidden selection:bg-[#D4AF37]/30 ${activeImg ? 'bg-[#0a0f0a]' : 'bg-black'}`}>
            {/* Handmade Paper Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.03] mix-blend-overlay"
                style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/black-paper.png")' }} />

            {/* TOP NAVIGATION OVERLAY */}
            <nav className="fixed top-0 left-0 right-0 w-full z-50 px-8 md:px-12 py-8 flex justify-between items-center pointer-events-none">
                <div className="pointer-events-auto">
                    <Link href="/" className="flex items-center gap-2 text-white/40 hover:text-[#D4AF37] transition-all group">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-[10px] tracking-[0.4em] uppercase font-medium">HOME</span>
                    </Link>
                </div>

                {view !== "selection" && (
                    <div className="flex items-center gap-6 md:gap-12 pointer-events-auto">
                        <button onClick={() => setView("selection")} className="text-[10px] tracking-[0.4em] text-white/40 hover:text-[#D4AF37] uppercase transition-all">
                            THE SELECTION
                        </button>
                        <button
                            onClick={() => setView(view === "food" ? "drinks" : "food")}
                            className="flex items-center gap-2 px-4 md:px-6 py-2 border border-[#D4AF37]/20 rounded-full hover:border-[#D4AF37] transition-all bg-black/40 backdrop-blur-md group"
                        >
                            <ArrowRightLeft size={12} className="text-[#D4AF37]" />
                            <span className="text-[10px] tracking-[0.3em] font-bold uppercase">
                                {view === "food" ? "SPIRITS" : "CUISINE"}
                            </span>
                        </button>
                    </div>
                )}
            </nav>

            <AnimatePresence mode="wait">
                {view === "selection" && (
                    <motion.div
                        key="selection"
                        variants={shutterVariants}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        className="h-screen w-full relative z-10"
                    >
                        {/* Full Screen Background */}
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                            style={{
                                backgroundImage: 'url("https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1920&q=80")',
                            }}
                        />
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/70" />

                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col items-center justify-center">
                            {/* Logo */}
                            <h1
                                className="text-3xl md:text-4xl text-[#D4AF37] tracking-[0.3em] mb-4"
                                style={{ fontFamily: "var(--font-cinzel)" }}
                            >
                                LITTLE LAO
                            </h1>
                            <p className="text-xs tracking-[0.4em] text-white/40 uppercase mb-16" style={{ fontFamily: "var(--font-lato)" }}>
                                THE MENU
                            </p>

                            {/* Floating Buttons */}
                            <div className="flex gap-8 md:gap-16">
                                {/* Cuisine Button */}
                                <motion.button
                                    onClick={() => setView("food")}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group flex flex-col items-center gap-4"
                                >
                                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-[#D4AF37]/50 flex items-center justify-center bg-black/40 backdrop-blur-md group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-all duration-500">
                                        <span className="text-3xl md:text-4xl">🍽️</span>
                                    </div>
                                    <span
                                        className="text-sm md:text-base tracking-[0.3em] text-[#D4AF37]/70 group-hover:text-[#D4AF37] transition-colors"
                                        style={{ fontFamily: "var(--font-cinzel)" }}
                                    >
                                        CUISINE
                                    </span>
                                </motion.button>

                                {/* Spirits Button */}
                                <motion.button
                                    onClick={() => setView("drinks")}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group flex flex-col items-center gap-4"
                                >
                                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-[#D4AF37]/50 flex items-center justify-center bg-black/40 backdrop-blur-md group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-all duration-500">
                                        <span className="text-3xl md:text-4xl">🍸</span>
                                    </div>
                                    <span
                                        className="text-sm md:text-base tracking-[0.3em] text-[#D4AF37]/70 group-hover:text-[#D4AF37] transition-colors"
                                        style={{ fontFamily: "var(--font-cinzel)" }}
                                    >
                                        SPIRITS
                                    </span>
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                )}

                {view === "food" && (
                    <div className="relative w-full min-h-screen">
                        {/* Full Width Background Title Blur/Image */}
                        {/* Background Blur - EXTENDED TO 100VH */}
                        <div className="fixed top-0 left-0 right-0 w-full h-screen overflow-hidden z-0 pointer-events-none">
                            <motion.div
                                initial={{ scale: 1.1, opacity: 0 }}
                                animate={{ scale: 1, opacity: 0.5 }}
                                transition={{ duration: 1.5 }}
                                className="absolute inset-0 bg-cover bg-center grayscale blur-2xl"
                                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1920")' }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black" />
                        </div>

                        <motion.div
                            key="food"
                            variants={shutterVariants}
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            className="w-full pb-40 px-6 relative z-10"
                            style={{ paddingTop: '150px' }}
                        >
                            <header className="text-center mb-40 relative">
                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.25em] text-[#D4AF37] drop-shadow-[0_0_40px_rgba(212,175,55,0.4)]"
                                    style={{
                                        fontFamily: "var(--font-cinzel)"
                                    }}
                                >
                                    CUISINE
                                </h1>
                                <div className="h-[1px] w-64 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-16 scale-150" />
                            </header>

                            <div className="max-w-7xl mx-auto">
                                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                                    {foodItems.map((item, idx) => (
                                        <RestaurantMenuCard key={item.id} item={item} index={idx} />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}

                {view === "drinks" && (
                    <div className="relative w-full min-h-screen">
                        {/* Full Width Background Title Blur/Image */}
                        {/* Background Blur - EXTENDED TO 100VH */}
                        <div className="fixed top-0 left-0 right-0 w-full h-screen overflow-hidden z-0 pointer-events-none">
                            <motion.div
                                initial={{ scale: 1.1, opacity: 0 }}
                                animate={{ scale: 1, opacity: 0.5 }}
                                transition={{ duration: 1.5 }}
                                className="absolute inset-0 bg-cover bg-center grayscale blur-2xl"
                                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1920")' }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black" />
                        </div>

                        <motion.div
                            key="drinks"
                            variants={shutterVariants}
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            className="w-full pb-40 px-6 relative z-10"
                            style={{ paddingTop: '150px' }}
                        >
                            <header className="text-center mb-40 relative">
                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.25em] text-[#D4AF37] drop-shadow-[0_0_40px_rgba(212,175,55,0.4)]"
                                    style={{
                                        fontFamily: "var(--font-cinzel)"
                                    }}
                                >
                                    SPIRITS
                                </h1>
                                <div className="h-[1px] w-64 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-16 scale-150" />
                            </header>

                            <div className="max-w-7xl mx-auto">
                                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                                    {drinkItems.map((item, idx) => (
                                        <SpiritsCard key={item.id} item={item} index={idx} />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Environmental Blur */}
            <div className={`fixed inset-0 pointer-events-none transition-opacity duration-1000 z-0 ${activeImg ? 'opacity-40 backdrop-blur-xl' : 'opacity-0'}`} />
        </main>
    );
}
