'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import products from '../../../public/data.json';
import { Star, Search, Filter, ShoppingBag } from 'lucide-react';

export default function ProductsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', ...new Set(products.map(p => p.category))];

    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            const matchesSearch =
                searchTerm === '' ||
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.brand.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesCategory =
                selectedCategory === 'All' || product.category === selectedCategory;

            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, selectedCategory]);

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-orange-50">
            <div className='w-11/12 mx-auto'>
                {/* Hero */}
                <div className="text-center py-16 px-4">
                    <h1 className="text-5xl font-extrabold bg-linear-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
                        Summer Collection ☀️
                    </h1>
                    <p className="text-gray-600 mt-3 text-lg">
                        Find your perfect summer vibe
                    </p>
                </div>

                {/* Filters */}
                <div className="px-4 mb-10">
                    <div className="bg-white shadow-lg rounded-2xl p-5 grid md:grid-cols-2 gap-4">

                        {/* Search */}
                        <div className="relative">
                            <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search by name or brand..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-orange-400 outline-none"
                            />
                        </div>

                        {/* Category */}
                        <div className="relative">
                            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />

                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-full  appearance-none pl-10 pr-10 py-3 rounded-xl border bg-white 
               focus:ring-2 focus:ring-orange-400 focus:border-0 outline-none accent-orange-500"
                            >
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>

                            {/* dropdown arrow */}
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                                ▼
                            </div>
                        </div>

                    </div>
                </div>

                {/* Count */}
                <div className="px-4 mb-6">
                    <p className="text-gray-600">
                        Showing <span className="font-bold text-orange-500">{filteredProducts.length}</span> products
                    </p>
                </div>

                {/* Products */}
                <div className="mb-16">
                    {filteredProducts.length > 0 ? (
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {filteredProducts.map(product => (
                                <div
                                    key={product.id}
                                    className="bg-white rounded-2xl shadow-md overflow-hidden"
                                >
                                    {/* Image */}
                                    <div className="relative h-60">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover"
                                        />

                                        {product.stock === 0 && (
                                            <span className="absolute top-3 right-3 bg-gray-700 text-white px-3 py-1 text-xs rounded-full">
                                                Out of Stock
                                            </span>
                                        )}

                                        {product.stock > 0 && product.stock < 5 && (
                                            <span className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 text-xs rounded-full">
                                                Only {product.stock} left
                                            </span>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="p-5">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="font-bold text-lg">{product.name}</h3>
                                                <p className="text-sm text-gray-500">{product.brand}</p>
                                            </div>
                                            <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-lg">
                                                {product.category}
                                            </span>
                                        </div>

                                        {/* Rating */}
                                        <div className="flex items-center gap-1 mt-2">
                                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                            <span className="font-medium">{product.rating}</span>
                                        </div>

                                        {/* Price */}
                                        <p className="text-2xl font-bold text-orange-500 mt-2">
                                            ${product.price}
                                        </p>

                                        {/* Description */}
                                        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                                            {product.description}
                                        </p>

                                        {/* Button (no hover effect) */}
                                        <Link
                                            href={`/products/${product.id}`}
                                            className="mt-4 block"
                                        >
                                            <button className="btn w-full flex items-center justify-center gap-2 bg-orange-500 text-white py-2 rounded-xl font-medium cursor-pointer border-0 shadow-sm">
                                                <ShoppingBag className="w-4 h-4" />
                                                View Details
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-lg">No products found</p>
                            <button
                                onClick={() => {
                                    setSearchTerm('');
                                    setSelectedCategory('All');
                                }}
                                className="mt-5 bg-orange-500 text-white px-6 py-2 rounded-xl"
                            >
                                Reset Filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}