"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, Variants } from "framer-motion";
import { ArrowLeft, ArrowRightLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// ========== DATA MOCKUPS ==========

const foodItems = [
    { id: 1, name: "LAAP PED", description: "Minced Duck / Toasted Rice / Fresh Herbs / Fish Sauce / Lime", isSignature: true, img: "/laap-ped.webp" },
    { id: 2, name: "KHAO PIAK SEN", description: "Rice Noodles / Chicken Broth / Poached Chicken / Crispy Garlic", isSignature: false, img: "/khao-piak-sen.webp" },
    { id: 3, name: "OR LAM", description: "Buffalo Meat / Lao Eggplant / Sakaan Wood / Chili Paste / Dill", isSignature: true, img: "/or-lam.webp" },
    { id: 4, name: "CRISPY PORK BELLY", description: "Honey Glaze / Five Spice / Pickled Radish", isSignature: false, img: "/crispy-pork-belly.webp" },
    { id: 5, name: "MISO GLAZED SEA BASS", description: "Ginger-Soy / Bok Choy / Sesame Crisps", isSignature: false, img: "/miso-sea-bass.webp" },
    { id: 6, name: "A5 WAGYU STRIPLOIN", description: "Miyazaki Prefecture / Garlic Chips / Sea Salt", isSignature: true, img: "/a5-wagyu.webp" },
    { id: 7, name: "HOKKAIDO SCALLOPS", description: "Uni Cream / Ikura / Shiso Oil", isSignature: true, img: "/hokkaido-scallops.webp" },
    { id: 8, name: "DUCK CONFIT", description: "Orange Glaze / Parsnip Puree / Crispy Skin", isSignature: false, img: "/duck-confit.webp" },
    { id: 9, name: "TAM MAK HOONG", description: "Green Papaya / Lime / Chili / Fermented Fish Sauce", isSignature: true, img: "/food-menu.webp" },
    { id: 10, name: "SAI OUA", description: "Lao Herbal Sausage / Lemongrass / Dill / Kaffir Lime", isSignature: false, img: "/food-menu.webp" },
    { id: 11, name: "KHAO NIEW", description: "Premium Steamed Sticky Rice / Bamboo Basket", isSignature: false, img: "/food-menu.webp" },
    { id: 12, name: "LITTLE LAO PLATTER", description: "Artisan selection of heritage Lao delicacies", isSignature: true, img: "/food-menu.webp" },
];

const drinkItems = [
    { id: 1, name: "SMOKED OLD FASHIONED", description: "Bourbon / Maple / Cedar Smoke", img: "/cocktail-1.webp" },
    { id: 2, name: "HIBIKI 17 YEARS", description: "Blended Japanese Whisky / Floral & Sweet", img: "/cocktail-2.webp" },
    { id: 3, name: "SIGNATURE GIN TONIC", description: "Botanical Gin / Yuzu / Premium Tonic", img: "/cocktail-3.webp" },
    { id: 4, name: "YAMAZAKI SINGLE MALT", description: "Mizunara Cask / Fruity & Spicy", img: "/cocktail-4.webp" },
    { id: 5, name: "NEGRONI ROYALE", description: "Special Blend Vermouth / Gold Flakes", img: "/cocktail-5.webp" },
    { id: 6, name: "ESPRESSO MARTINI", description: "Fresh Brewed Arabica / Vanilla Bean", img: "/cocktail-6.webp" },
    { id: 7, name: "MEKONG SUNSET", description: "Lao Rum / Passion Fruit / Hibiscus", img: "/cocktail-1.webp" },
    { id: 8, name: "LAO MOJITO", description: "Lao Sticky Rice Spirit / Mint / Lime / Pandan", img: "/cocktail-2.webp" },
    { id: 9, name: "LOTUS BLOSSOM", description: "Jinzu Gin / Lychee / Rose / Sparkling Wine", img: "/cocktail-3.webp" },
    { id: 10, name: "GINGER LILY", description: "Vodka / Fresh Ginger / Honey / Lemon", img: "/cocktail-4.webp" },
    { id: 11, name: "SPICY MANGO", description: "Tequila / Mango / Bird's Eye Chili / Agave", img: "/cocktail-5.webp" },
    { id: 12, name: "COCONUT DREAM", description: "Dark Rum / Coconut Cream / Pineapple / Nutmeg", img: "/cocktail-6.webp" },
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

const LaoCornerMotif = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={`w-6 h-6 text-[#D4AF37] ${className}`}>
        <path d="M4 4 L12 4 M4 4 L4 12 M4 4 L8 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <circle cx="4" cy="4" r="0.5" fill="currentColor" />
        <circle cx="12" cy="4" r="0.5" fill="currentColor" />
        <circle cx="4" cy="12" r="0.5" fill="currentColor" />
        <path d="M8 4 L4 8" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
    </svg>
);

interface MenuCardProps {
    item: {
        id: number;
        name: string;
        description: string;
        isSignature?: boolean;
        img: string;
    };
    index: number;
    isPriority?: boolean;
}

const RestaurantMenuCard = ({ item, index, isPriority = false }: MenuCardProps) => {
    return (
        <div className="glp-no-shift">
            <motion.div
                className="glp-movable group relative flex flex-col items-center w-[45%] md:w-[30%] lg:w-[22%] xl:w-[18%] min-w-[140px] px-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                style={{ '--x-offset': '0px', '--y-offset': '0px' } as React.CSSProperties}
            >
                {/* Image Container with Lao Frame */}
                <div className="relative aspect-square w-full mb-6 transition-all duration-500">
                    {/* Gold Frame */}
                    <div className="absolute inset-0 border border-[#D4AF37]/30 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-500 rounded-sm" />

                    {/* Corner Motifs */}
                    <LaoCornerMotif className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4" />
                    <LaoCornerMotif className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 rotate-90" />
                    <LaoCornerMotif className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 -rotate-90" />
                    <LaoCornerMotif className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 rotate-180" />

                    <div className="relative w-full h-full overflow-hidden rounded-sm">
                        <Image
                            src={item.img}
                            alt={item.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 45vw, (max-width: 1024px) 30vw, 20vw"
                            priority={isPriority}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
                    </div>
                </div>

                {/* Content */}
                <div className="text-center w-full">
                    <h3 className="text-sm md:text-base tracking-[0.2em] text-[#D4AF37] mb-2 font-medium"
                        style={{ fontFamily: "var(--font-cinzel)" }}>
                        {item.name}
                    </h3>
                    <p className="text-[10px] md:text-xs text-white/50 tracking-wider font-light leading-relaxed max-w-[200px] mx-auto"
                        style={{ fontFamily: "var(--font-lato)" }}>
                        {item.description}
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

const RowDivider = () => (
    <div className="w-full h-px my-16 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
);

const LaiLaoPattern = () => (
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ zIndex: -1 }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="lailao" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
                    <circle cx="50" cy="50" r="2" fill="#D4AF37" />
                    <path d="M25 25 L75 75 M75 25 L25 75" stroke="#D4AF37" strokeWidth="0.2" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#lailao)" />
        </svg>
    </div>
);

export default function MenuPage() {
    const [view, setView] = useState<"selection" | "food" | "drinks">("selection");



    const shutterVariants: Variants = {
        initial: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
        enter: {
            clipPath: "inset(0 0% 0 0)",
            opacity: 1,
            transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            clipPath: "inset(0 0 0 100%)",
            opacity: 0,
            transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] }
        }
    };

    return (
        <main className="glp-section min-h-screen transition-colors duration-1000 relative overflow-x-hidden selection:bg-[#D4AF37]/30 bg-black">
            {/* PERSISTENT GLOBAL BACKGROUND */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Unified Background (Optimized JPG with blur) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    className="absolute inset-0 bg-cover bg-center grayscale blur-[100px]"
                    style={{ backgroundImage: 'url("/new.jpg?v=4")' }}
                />

                {/* Dark Overlays matched across all devices */}
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black" />
            </div>


            {/* TOP NAVIGATION OVERLAY */}
            <nav className="glp-overflow-visible fixed top-8 left-0 right-0 z-50 px-8 md:px-16 lg:px-24 flex items-center justify-between max-w-[1400px] mx-auto pointer-events-none">
                <button
                    onClick={() => view === "selection" ? window.location.href = "/" : setView("selection")}
                    className="glp-movable flex items-center justify-center gap-2 px-4 py-2.5 border border-[#D4AF37]/40 rounded-full bg-black/50 backdrop-blur-sm text-[10px] md:text-xs tracking-[0.3em] text-[#D4AF37] hover:border-[#D4AF37] hover:bg-black/60 hover:text-[#FFD700] transition-all duration-300 group min-w-[100px] md:min-w-[120px] pointer-events-auto"
                    style={{ '--x-offset': '20px' } as React.CSSProperties}
                >
                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform flex-shrink-0" />
                    <span className="uppercase font-medium">{view === "selection" ? "HOME" : "BACK"}</span>
                </button>

                {view !== "selection" ? (
                    <button
                        onClick={() => setView(view === "food" ? "drinks" : "food")}
                        className="flex items-center justify-center gap-3 px-6 py-3 border border-[#D4AF37]/40 rounded-full bg-black/50 backdrop-blur-sm hover:border-[#D4AF37] hover:bg-black/60 transition-colors duration-300 group min-w-[140px] md:min-w-[160px] pointer-events-auto"
                    >
                        <ArrowRightLeft size={14} className="text-[#D4AF37] group-hover:text-[#FFD700] transition-colors flex-shrink-0" />
                        <span className="text-[10px] md:text-xs tracking-[0.3em] font-medium uppercase text-[#D4AF37] group-hover:text-[#FFD700] transition-colors">
                            {view === "food" ? "SPIRITS" : "CUISINE"}
                        </span>
                    </button>
                ) : <div className="w-[160px] pointer-events-none" />}
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
                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col items-center justify-center">
                            {/* Logo */}
                            <h1
                                className="text-3xl md:text-4xl text-[#D4AF37] tracking-[0.3em] mb-4"
                                style={{ fontFamily: "var(--font-cinzel)", transform: 'translateY(-60px)' }}
                            >
                                LITTLE LAO
                            </h1>
                            <p className="text-xs tracking-[0.4em] text-white/40 uppercase mb-16" style={{ fontFamily: "var(--font-lato)", transform: 'translateY(-60px)' }}>
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
                                    <div className="w-28 h-28 md:w-40 md:h-40 rounded-full border border-[#D4AF37]/50 flex items-center justify-center bg-black/40 backdrop-blur-md group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-all duration-500">
                                        <span className="text-3xl md:text-5xl">🍽️</span>
                                    </div>
                                    <span
                                        className="text-sm md:text-lg tracking-[0.3em] text-[#D4AF37]/70 group-hover:text-[#D4AF37] transition-colors"
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
                                    <div className="w-28 h-28 md:w-40 md:h-40 rounded-full border border-[#D4AF37]/50 flex items-center justify-center bg-black/40 backdrop-blur-md group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-all duration-500">
                                        <span className="text-3xl md:text-5xl">🍸</span>
                                    </div>
                                    <span
                                        className="text-sm md:text-lg tracking-[0.3em] text-[#D4AF37]/70 group-hover:text-[#D4AF37] transition-colors"
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
                        <LaiLaoPattern />

                        <motion.div
                            key="food"
                            variants={shutterVariants}
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            className="w-full pb-60 px-6 relative z-10"
                            style={{ paddingTop: '80px' }}
                        >
                            <header className="text-center mb-72 relative">
                                <h1 className="text-4xl md:text-6xl font-light tracking-[0.3em] text-[#D4AF37] drop-shadow-[0_0_50px_rgba(212,175,55,0.3)]"
                                    style={{ fontFamily: "var(--font-cinzel)" }}
                                >
                                    CUISINE
                                </h1>
                                <div className="h-[1px] w-full max-w-4xl bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-8 opacity-50" />
                            </header>

                            <div className="max-w-7xl mx-auto">
                                <div className="flex flex-col gap-y-16">
                                    {[0, 1, 2].map((rowIndex) => (
                                        <React.Fragment key={rowIndex}>
                                            <RowDivider />
                                            <div className="flex flex-wrap justify-center gap-y-16 gap-x-4 md:gap-x-8 lg:gap-x-10">
                                                {foodItems.slice(rowIndex * 4, (rowIndex + 1) * 4).map((item, idx) => (
                                                    <RestaurantMenuCard key={item.id} item={item} index={idx + rowIndex * 4} isPriority={view === "food" && (idx + rowIndex * 4) < 4} />
                                                ))}
                                            </div>
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}

                {view === "drinks" && (
                    <div className="relative w-full min-h-screen">
                        <LaiLaoPattern />

                        <motion.div
                            key="drinks"
                            variants={shutterVariants}
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            className="w-full pb-60 px-6 relative z-10"
                            style={{ paddingTop: '80px' }}
                        >
                            <header className="text-center mb-72 relative">
                                <h1 className="text-4xl md:text-6xl font-light tracking-[0.3em] text-[#D4AF37] drop-shadow-[0_0_50px_rgba(212,175,55,0.3)]"
                                    style={{ fontFamily: "var(--font-cinzel)" }}
                                >
                                    SPIRITS
                                </h1>
                                <div className="h-[1px] w-full max-w-4xl bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-8 opacity-50" />
                            </header>

                            <div className="max-w-7xl mx-auto">
                                <div className="flex flex-col gap-y-16">
                                    {[0, 1, 2].map((rowIndex) => (
                                        <React.Fragment key={rowIndex}>
                                            <RowDivider />
                                            <div className="flex flex-wrap justify-center gap-y-16 gap-x-4 md:gap-x-8 lg:gap-x-10">
                                                {drinkItems.slice(rowIndex * 4, (rowIndex + 1) * 4).map((item, idx) => (
                                                    <RestaurantMenuCard key={item.id} item={item} index={idx + rowIndex * 4} isPriority={view === "drinks" && (idx + rowIndex * 4) < 4} />
                                                ))}
                                            </div>
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </main>
    );
}

// ========== REMOVED UNUSED COMPONENTS ==========
// VerticalMenuItem has been replaced by the grid-based RestaurantMenuCard
