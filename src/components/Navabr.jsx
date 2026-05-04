'use client'

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Sun, Menu, X } from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { data: session } = authClient.useSession();
    const users = session?.user;

    const handleLogout = async () => {
        await authClient.signOut();
        setIsMenuOpen(false);
    };

    return (
        <div>
            <nav className="bg-linear-to-r from-orange-400 to-yellow-500 shadow-lg sticky top-0 z-50">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex justify-between items-center">
                        {/* Logo - Always Visible */}
                        <Link href="/" className="flex items-center gap-2 z-20">
                            <Sun className="w-8 h-8 text-white" />
                            <span className="text-2xl font-bold text-white">SunCart</span>
                        </Link>

                        {/* Mobile Menu Button - Visible only on mobile */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 z-20"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>

                        {/* Desktop Menu - Hidden on mobile */}
                        <div className="hidden md:flex items-center gap-6">
                            <Link href="/" className="text-white hover:text-yellow-200 transition">
                                Home
                            </Link>
                            <Link href="/products" className="text-white hover:text-yellow-200 transition">
                                Products
                            </Link>

                            {session ? (
                                <>
                                    <Link href="/profile" className="flex items-center gap-2">
                                        <Image
                                            src={users?.image || '/avatar.png'}
                                            alt="Profile"
                                            width={32}
                                            height={32}
                                            className="rounded-full border-2 border-white"
                                        />
                                        <span className="text-white">{users?.name?.split(' ')[0] || 'User'}</span>
                                    </Link>
                                    <button
                                        onClick={handleLogout}
                                        className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600 transition"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link
                                        href="/login"
                                        className="bg-green-500 px-4 py-2 rounded-lg text-white hover:bg-green-600 transition"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        href="/register"
                                        className="bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-600 transition"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu - Visible when hamburger menu is clicked */}
                    {isMenuOpen && (
                        <div className="md:hidden mt-4 pt-4 border-t border-white/20 animate-in slide-in-from-top-2">
                            <div className="flex flex-col space-y-3">
                                <Link
                                    href="/"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-white hover:bg-white/10 px-4 py-2 rounded-lg transition"
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/products"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-white hover:bg-white/10 px-4 py-2 rounded-lg transition"
                                >
                                    Products
                                </Link>

                                {session ? (
                                    <>
                                        <Link
                                            href="/profile"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="flex items-center gap-3 px-4 py-2 hover:bg-white/10 rounded-lg transition"
                                        >
                                            <Image
                                                src={users?.image || '/avatar.png'}
                                                alt="Profile"
                                                width={32}
                                                height={32}
                                                className="rounded-full border-2 border-white"
                                            />
                                            <span className="text-white">{users?.name || 'Profile'}</span>
                                        </Link>
                                        <button
                                            onClick={handleLogout}
                                            className="bg-red-500 mx-4 px-4 py-2 rounded-lg text-white hover:bg-red-600 transition text-left"
                                        >
                                            Logout
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <Link
                                            href="/login"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="bg-green-500 mx-4 px-4 py-2 rounded-lg text-white hover:bg-green-600 transition text-center"
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            href="/register"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="bg-blue-500 mx-4 px-4 py-2 rounded-lg text-white hover:bg-blue-600 transition text-center"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;