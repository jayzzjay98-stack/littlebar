"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavbarProps {
    onReserveClick?: () => void;
    variant?: "home" | "menu";
}

export default function Navbar({ onReserveClick, variant = "home" }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const links = ["HOME", "ABOUT", "MENU", "GALLERY", "CONTACT US"];

    const getHref = (link: string) => {
        if (link === "MENU") return "/menu";
        if (link === "HOME") return "/";
        // On the menu page, anchor links need to go back to home first
        if (variant === "menu") return `/#${link.toLowerCase().replace(" ", "-")}`;
        return `#${link.toLowerCase().replace(" ", "-")}`;
    };

    const isInternalPage = (link: string) => link === "MENU" || link === "HOME";

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-40 bg-black/10 backdrop-blur-lg border-b border-white/5">
                <div className="flex items-center justify-center px-4 md:px-6 py-6 lg:py-8">
                    {/* Logo - Mobile Only */}
                    <Link href="/" className="lg:hidden absolute left-4">
                        <span
                            className="text-lg text-[#D4AF37] tracking-[0.15em]"
                            style={{ fontFamily: "var(--font-cinzel)" }}
                        >
                            LITTLE LAO
                        </span>
                    </Link>

                    {/* Center Links - Desktop */}
                    <div className="hidden lg:flex items-center gap-10 xl:gap-14 justify-center">
                        {links.map((link) => {
                            const href = getHref(link);

                            if (isInternalPage(link)) {
                                return (
                                    <Link
                                        key={link}
                                        href={href}
                                        className="text-sm tracking-[0.2em] text-white hover:text-[#D4AF37] transition-colors"
                                        style={{ fontFamily: "var(--font-lato)" }}
                                    >
                                        {link}
                                    </Link>
                                );
                            }

                            return (
                                <a
                                    key={link}
                                    href={href}
                                    className="text-sm tracking-[0.2em] text-white hover:text-[#D4AF37] transition-colors"
                                    style={{ fontFamily: "var(--font-lato)" }}
                                >
                                    {link}
                                </a>
                            );
                        })}
                    </div>

                    {/* Mobile Menu Button (absolute right) */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden absolute right-4 w-10 h-10 rounded-full border border-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] group transition-colors"
                    >
                        {isMenuOpen ? (
                            <X size={18} className="text-[#D4AF37] group-hover:text-black transition-colors" />
                        ) : (
                            <Menu size={18} className="text-[#D4AF37] group-hover:text-black transition-colors" />
                        )}
                    </button>
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
                                <X size={18} className="text-[#D4AF37] group-hover:text-black transition-colors" />
                            </button>

                            {/* Logo */}
                            <div className="text-center mb-12">
                                <h2
                                    className="text-3xl text-[#D4AF37] tracking-[0.2em]"
                                    style={{ fontFamily: "var(--font-playfair)" }}
                                >
                                    LITTLE LAO
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
                                {links.map((link, index) => {
                                    const href = getHref(link);
                                    return (
                                        <motion.a
                                            key={link}
                                            href={href}
                                            onClick={() => setIsMenuOpen(false)}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="text-lg tracking-[0.3em] text-white hover:text-[#D4AF37] transition-colors"
                                            style={{ fontFamily: "var(--font-lato)" }}
                                        >
                                            {link}
                                        </motion.a>
                                    );
                                })}
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
