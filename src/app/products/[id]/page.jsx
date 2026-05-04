'use client';

import products from '../../../../public/data.json'
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { Star, ShoppingCart, Truck, Shield, RotateCcw, Heart, Check } from 'lucide-react';
import Link from 'next/link';

const ProductDetailsPage = () => {

    const params = useParams();
    const id = params.id;

    const product = products.find(p => p.id === Number(id));

    const router = useRouter();
    const { isPending } = authClient.useSession();

    const [addedToCart, setAddedToCart] = useState(false);

    const handleAddToCart = () => {
        setAddedToCart(true);

        setTimeout(() => {
            setAddedToCart(false);
        }, 2000);
    };

    if (isPending) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading...</p>
                </div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
                    <Link href="/products" className="text-orange-500 underline">
                        Back to Products
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                {/* Back Button */}
                <Link href="/products" className="inline-flex items-center gap-2 text-gray-600 mb-6">
                    ← Back to Products
                </Link>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8">
                        {/* Product Image */}
                        <div className="relative">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-auto rounded-lg shadow-md"
                            />
                            {product.stock < 5 && product.stock > 0 && (
                                <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-md text-sm font-bold">
                                    Low Stock!
                                </span>
                            )}
                            {product.stock === 0 && (
                                <span className="absolute top-4 right-4 bg-gray-500 text-white px-3 py-1 rounded-md text-sm font-bold">
                                    Out of Stock
                                </span>
                            )}
                        </div>

                        {/* Product Info */}
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
                            <p className="text-gray-500 mb-4">{product.brand}</p>

                            {/* Rating */}
                            <div className="flex items-center gap-2 mb-4">
                                <div className="flex items-center">
                                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    <span className="font-bold ml-1">{product.rating}</span>
                                </div>
                                <span className="text-gray-400">|</span>
                                <span className="text-gray-500">{product.category}</span>
                            </div>

                            {/* Price */}
                            <div className="mb-6">
                                <p className="text-4xl font-bold text-orange-600">${product.price}</p>
                                <p className={`text-sm mt-1 ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                    {product.stock > 0 ? `In Stock: ${product.stock} items` : 'Out of Stock'}
                                </p>
                            </div>

                            {/* Description */}
                            <div className="mb-6">
                                <h3 className="font-semibold text-gray-800 mb-2">Description</h3>
                                <p className="text-gray-600 leading-relaxed">{product.description}</p>
                            </div>

                            {/* Features */}
                            <div className="mb-6 space-y-2">
                                <div className="flex items-center gap-2 text-green-600">
                                    <Check className="w-5 h-5" />
                                    <span>Free Shipping on orders over $50</span>
                                </div>
                                <div className="flex items-center gap-2 text-green-600">
                                    <Check className="w-5 h-5" />
                                    <span>30-Day Money-Back Guarantee</span>
                                </div>
                                <div className="flex items-center gap-2 text-green-600">
                                    <Check className="w-5 h-5" />
                                    <span>1 Year Warranty</span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4">
                                <button
                                    onClick={handleAddToCart}
                                    disabled={product.stock === 0}
                                    className={`btn flex-1 flex items-center justify-center gap-2 py-3 rounded-lg ${addedToCart
                                            ? 'bg-green-500 text-white'
                                            : product.stock === 0
                                                ? 'bg-gray-400 text-white cursor-not-allowed'
                                                : 'bg-orange-500 text-white'
                                        }`}
                                >
                                    {addedToCart ? (
                                        <>
                                            <Check className="w-5 h-5" />
                                            Added to Cart!
                                        </>
                                    ) : (
                                        <>
                                            <ShoppingCart className="w-5 h-5" />
                                            {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                                        </>
                                    )}
                                </button>

                                <button className="px-6 py-3 border border-gray-300 rounded-lg">
                                    <Heart className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Delivery Info */}
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <Truck className="w-4 h-4" />
                                        <span>Free Delivery</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <Shield className="w-4 h-4" />
                                        <span>Secure Payment</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <RotateCcw className="w-4 h-4" />
                                        <span>Easy Returns</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products Section */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">You May Also Like</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {products
                            .filter(p => p.category === product.category && p.id !== product.id)
                            .slice(0, 3)
                            .map(relatedProduct => (
                                <Link
                                    key={relatedProduct.id}
                                    href={`/products/${relatedProduct.id}`}
                                    className="bg-white rounded-lg shadow-md overflow-hidden block"
                                >
                                    <img
                                        src={relatedProduct.image}
                                        alt={relatedProduct.name}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="font-semibold text-gray-800">{relatedProduct.name}</h3>
                                        <p className="text-orange-600 font-bold mt-2">${relatedProduct.price}</p>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;