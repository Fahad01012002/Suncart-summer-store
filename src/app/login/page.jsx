'use client';

import { authClient } from "@/lib/auth-client";
import { Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaChrome, FaEye, FaEyeSlash } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";


const LoginPage = () => {

    const [isShow, setIsShow] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const handleLogicalFunction = async (data) => {

        const { data: res, error } = await authClient.signIn.email({
            email: data.email, // required
            password: data.password, // required
            rememberMe: true,
            callbackURL: "/",

        });
    }

    const handleGoogleLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });

        console.log(data);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-orange-100 to-yellow-100 py-12 px-4">
            <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Welcome Back!
                </h2>

                <form onSubmit={handleSubmit(handleLogicalFunction)} className="space-y-6">
                    <fieldset>
                        <label className="block text-gray-700 mb-2">Email</label>
                        <div className="relative">
                            <span className="absolute top-2.5 left-2.5">
                                <Mail className="text-gray-400 w-5 h-5" />
                            </span>
                            <input
                                type="email"
                                {...register("email", { required: "Email field is required" })}
                                className="w-full pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-slate-100"
                                placeholder="Enter Your Email"
                            />
                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </div>
                    </fieldset>

                    <fieldset>
                        <label className="block text-gray-700 mb-2">Password</label>
                        <div className="relative">
                            <span className="absolute top-2.5 left-2.5">
                                <Lock className="text-gray-400 w-5 h-5" />
                            </span>
                            <input
                                type={`${isShow ? 'text' : 'password'}`}
                                {...register("password", { required: "Password field is required" })}
                                className="w-full border-0 bg-slate-100 pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="Enter Your Password"
                            />
                            <span
                                className='absolute top-3 right-4 cursor-pointer'
                                onClick={() => setIsShow(!isShow)}>
                                {
                                    isShow ? <FaEye className="text-gray-500" size={18} /> : <FaEyeSlash className="text-gray-500" size={18} />
                                }
                            </span>
                            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                        </div>
                    </fieldset>

                    <button
                        type="submit"
                        className="btn w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition disabled:opacity-50"
                    >
                        Login
                    </button>
                </form>

                <div className="mt-6">
                    <button
                        onClick={handleGoogleLogin}
                        className="btn w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition" cursor-pointer
                    >
                        <FaGoogle className="w-5 h-5" />
                        Continue with Google
                    </button>
                </div>

                <p className="mt-6 text-center text-gray-600">
                    Don't have an account?{'  '}
                    <Link href="/register" className="text-orange-500 hover:underline">
                        Register here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;