"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, Users, User, Phone, Mail } from "lucide-react";

interface ReservationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "2",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
        // Reset after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            onClose();
            setFormData({ name: "", email: "", phone: "", date: "", time: "", guests: "2", message: "" });
        }, 3000);
    };

    const inputClasses =
        "w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:border-[#D4AF37] focus:outline-none transition-colors";

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="relative w-full max-w-lg bg-gradient-to-br from-[#0a0a0a] to-[#111] border border-[#D4AF37]/20 rounded-2xl shadow-2xl overflow-hidden"
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Gold Accent Line */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all group z-10"
                            >
                                <X size={18} className="text-white/60 group-hover:text-[#D4AF37] transition-colors" />
                            </button>

                            {/* Content */}
                            <div className="p-8">
                                {/* Header */}
                                <div className="text-center mb-8">
                                    <h2
                                        className="text-3xl text-[#D4AF37] mb-2"
                                        style={{ fontFamily: "'Caveat'" }}
                                    >
                                        Make a Reservation
                                    </h2>
                                    <p className="text-white/50 text-sm">Join us for an unforgettable evening</p>
                                </div>

                                {isSubmitted ? (
                                    <motion.div
                                        className="text-center py-12"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                    >
                                        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: 0.2, type: "spring" }}
                                            >
                                                <svg className="w-8 h-8 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </motion.div>
                                        </div>
                                        <h3 className="text-xl text-white mb-2">Reservation Confirmed!</h3>
                                        <p className="text-white/50 text-sm">We'll send you a confirmation email shortly.</p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        {/* Name & Email Row */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="relative">
                                                <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Your Name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className={`${inputClasses} pl-10`}
                                                />
                                            </div>
                                            <div className="relative">
                                                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email Address"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className={`${inputClasses} pl-10`}
                                                />
                                            </div>
                                        </div>

                                        {/* Phone */}
                                        <div className="relative">
                                            <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Phone Number"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className={`${inputClasses} pl-10`}
                                            />
                                        </div>

                                        {/* Date, Time, Guests Row */}
                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="relative">
                                                <Calendar size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                                                <input
                                                    type="date"
                                                    name="date"
                                                    value={formData.date}
                                                    onChange={handleChange}
                                                    required
                                                    className={`${inputClasses} pl-10`}
                                                />
                                            </div>
                                            <div className="relative">
                                                <Clock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                                                <input
                                                    type="time"
                                                    name="time"
                                                    value={formData.time}
                                                    onChange={handleChange}
                                                    required
                                                    className={`${inputClasses} pl-10`}
                                                />
                                            </div>
                                            <div className="relative">
                                                <Users size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                                                <select
                                                    name="guests"
                                                    value={formData.guests}
                                                    onChange={handleChange}
                                                    className={`${inputClasses} pl-10 appearance-none cursor-pointer`}
                                                >
                                                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                                                        <option key={n} value={n} className="bg-black">
                                                            {n} {n === 1 ? "Guest" : "Guests"}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <textarea
                                            name="message"
                                            placeholder="Special requests or notes (optional)"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={3}
                                            className={`${inputClasses} resize-none`}
                                        />

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-4 bg-gradient-to-r from-[#D4AF37] via-[#F5D77A] to-[#D4AF37] text-black font-medium tracking-wider uppercase text-sm rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center justify-center gap-2">
                                                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                                    </svg>
                                                    Processing...
                                                </span>
                                            ) : (
                                                "Confirm Reservation"
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
