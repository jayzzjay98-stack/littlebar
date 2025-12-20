"use client";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const links = ["HOME", "ABOUT", "MENU", "GALLERY", "CONTACT US"];

    const getHref = (link: string) => {
        if (link === "HOME") return "/";
        if (link === "MENU") return "/menu";
        return `/#${link.toLowerCase().replace(" ", "-")}`;
    };

    return (
        <nav className="glp-overflow-visible fixed top-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-2xl border-b border-white/5">
            <div className="flex items-center justify-center px-4 md:px-6" style={{ paddingTop: '24px', paddingBottom: '10px' }}>
                {/* Navigation Links - shown on all screen sizes */}
                <div className="flex items-center gap-4 sm:gap-6 md:gap-10 xl:gap-14 justify-center">
                    {links.map((link) => {
                        const href = getHref(link);
                        return (
                            <Link
                                key={link}
                                href={href}
                                className="text-xs sm:text-sm md:text-xs tracking-[0.15em] sm:tracking-[0.2em] text-white hover:text-[#D4AF37] transition-colors"
                                style={{ fontFamily: "var(--font-lato)" }}
                            >
                                {link}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
