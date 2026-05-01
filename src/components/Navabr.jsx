'use client'

import Link from 'next/link';
import { ShoppingBag, Sun } from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';

const Navabr = () => {

    const { data: session } = authClient.useSession();

    const users = session?.user;

    return (
        <div>
            <nav className="bg-linear-to-r from-orange-400 to-yellow-500 shadow-lg">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex justify-between items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <Sun className="w-8 h-8 text-white" />
                            <span className="text-2xl font-bold text-white">SunCart</span>
                        </Link>

                        <div className="flex items-center gap-6">
                            <Link href="/" className="text-white hover:text-yellow-200">Home</Link>
                            <Link href="/products" className="text-white hover:text-yellow-200">Products</Link>

                            {session ? (
                                <>
                                    <Link href="/profile" className="flex items-center gap-2">
                                        <Image
                                            src={users.image}
                                            alt="Profile"
                                            width={32}
                                            height={32}
                                            className="rounded-full"
                                        />
                                        <span className="text-white">{users.name}</span>
                                    </Link>
                                    <button
                                        onClick={async () => await authClient.signOut()}
                                        className="btn  shadow-sm border-0 bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link href="/login"  className="btn  shadow-sm border-0 bg-green-500 px-4 py-2 rounded-lg text-white hover:bg-green-600"    >Login</Link>
                                    <Link href="/register" className="bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-600">
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navabr;