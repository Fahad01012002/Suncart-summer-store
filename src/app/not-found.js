'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6">
            <div className="max-w-2xl w-full text-center">
                {/* Animated 404 */}
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-7xl md:text-9xl font-extrabold bg-linear-to-r from-orange-200 to-yellow-400 text-transparent bg-clip-text"
                >
                    404
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mt-4 text-lg md:text-xl text-slate-300"
                >
                    Oops! The page you are looking for does not exist.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-linear-to-r from-orange-400 to-yellow-500 hover:opacity-90 transition shadow-lg"
                    >
                        <Home size={18} /> Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl border border-slate-600 hover:bg-slate-800 transition"
                    >
                        <ArrowLeft size={18} /> Go Back
                    </button>
                </motion.div>

                {/* Decorative Glow */}
                <div className="absolute top-1/2 left-1/2 w-100 h-100 bg-linear-to-r from-orange-400 to-yellow-500 opacity-20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 -z-10" />
            </div>
        </div>
    );
};

export default NotFoundPage;