'use client';

import Link from 'next/link';
import products from '../../public/data.json';
import { Star, ShoppingBag, Sun, Droplets, Shield } from 'lucide-react';

export default function HomePage() {
  const popularProducts = products.slice(0, 3);

  return (
    <div className=''>
      {/* Hero Section - Without Animation */}
      <section className="bg-linear-to-r from-orange-500 to-red-500 text-white py-20">
        <div className="px-4 w-11/12 mx-auto">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">
              Summer Sale 50% OFF 🔥
            </h1>
            <p className="text-xl mb-6">
              Get ready for the sun with our premium summer essentials!
            </p>
            <Link
              href="/products"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2"
            >
              Shop Now <ShoppingBag className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Hot Deals Banner */}
      <div className="bg-yellow-400 text-gray-900 py-3 text-center font-bold">
        🔥 HOT DEALS 🔥 | Free Shipping on orders over $50 | Limited Time Offer!
      </div>

      {/* Popular Products */}
      <section className="w-11/12 mx-auto py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            🔥 Popular Products
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Our customers top picks this summer
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{product.rating}</span>
                  </div>
                  <p className="text-2xl font-bold text-orange-600 mb-4">
                    ${product.price}
                  </p>
                  <Link
                    href={`/products/${product.id}`}
                    className="block text-center bg-orange-500 text-white py-2 rounded-lg"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summer Care Tips */}
      <section className="bg-blue-50 py-16">
        <div className="px-4 w-11/12 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            🌞 Summer Care Tips
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Stay safe and healthy this summer
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <Droplets className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="font-bold text-xl mb-2">Stay Hydrated</h3>
              <p>Drink at least 8 glasses of water daily to prevent dehydration.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <Sun className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="font-bold text-xl mb-2">Use Sunscreen</h3>
              <p>Apply SPF 50+ sunscreen 30 minutes before sun exposure.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <Shield className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="font-bold text-xl mb-2">Protect Your Eyes</h3>
              <p>Wear UV protection sunglasses when outdoors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Brands */}
      <section className="py-16">
        <div className="w-11/12 mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Top Brands
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Nike', 'Adidas', 'Puma', 'Ray-Ban'].map((brand) => (
              <div key={brand} className="bg-gray-100 p-6 rounded-xl text-center">
                <h3 className="font-bold text-xl">{brand}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}