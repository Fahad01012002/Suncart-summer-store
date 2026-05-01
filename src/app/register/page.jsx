'use client';

import { authClient } from "@/lib/auth-client";
import { Lock, Mail, User, Image } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";

const RegisterPage = () => {

  const [isShow, setIsShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    const { data: res, error } = await authClient.signUp.email({
      email: data.email,
      password: data.password,
      name: data.name,
      image: data.photo,
      callbackURL: "/login",
    });

    if (error) {
      console.log("REGISTER ERROR:", error);
      return;
    }

    console.log("REGISTER SUCCESS:", res);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-orange-100 to-yellow-100 py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Create Account
        </h2>

        <form onSubmit={handleSubmit(handleRegister)} className="space-y-5">

          {/* Name */}
          <fieldset>
            <label className="block text-gray-700 mb-2">Name</label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="w-full pl-10 pr-4 py-3 bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
          </fieldset>

          {/* Email */}
          <fieldset>
            <label className="block text-gray-700 mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="w-full pl-10 pr-4 py-3 bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
          </fieldset>

          {/* Photo URL */}
          <fieldset>
            <label className="block text-gray-700 mb-2">Photo URL</label>
            <div className="relative">
              <FaImage className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                {...register("photo", { required: "Photo URL is required" })}
                className="w-full pl-10 pr-4 py-3 bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="https://your-image-link.com"
              />
              {errors.photo && (
                <p className="text-red-500 text-sm">{errors.photo.message}</p>
              )}
            </div>
          </fieldset>

          {/* Password */}
          <fieldset>
            <label className="block text-gray-700 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type={`${isShow ? 'text' : 'password'}`}
                {...register("password", { required: "Password is required" })}
                className="w-full pl-10 pr-4 py-3 bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter password"
              />
              <span
                className='absolute top-4 right-4 cursor-pointer'
                onClick={() => setIsShow(!isShow)}>
                {
                  isShow ? <FaEye className="text-gray-500" size={18} /> : <FaEyeSlash className="text-gray-500" size={18} />
                }
              </span>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>
          </fieldset>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Register
          </button>
        </form>

        {/* Link */}
        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-orange-500 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;