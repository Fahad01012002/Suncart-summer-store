'use client';

import Lottie from 'lottie-react';

import summerAnimation from '../../public/404 error page with cat.json';

import { motion } from "framer-motion";
import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

const NotFoundPage = () => {
    return (
        <div className='w-3/12 mx-auto mt-10'>
            <Lottie animationData={summerAnimation} loop={true} />
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
                <Link
                    href="/"
                    className="text-white flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-linear-to-r from-orange-500 to-yellow-500 hover:opacity-90 transition shadow-lg"
                >
                    <Home size={18} /> Home
                </Link>

                <button
                    onClick={() => window.history.back()}
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl border border-slate-600  transition cursor-pointer"
                >
                    <ArrowLeft size={18} /> Go Back
                </button>
            </motion.div>
        </div>
    );
};

export default NotFoundPage;