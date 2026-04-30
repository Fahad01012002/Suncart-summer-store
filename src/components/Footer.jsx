
import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { BsInstagram, BsTwitterX } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="w-11/12 mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className=''>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>support@suncart.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+8801314084813</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <FaFacebookF className="w-6 h-6 cursor-pointer hover:text-blue-400" />
              <BsTwitterX className="w-6 h-6 cursor-pointer hover:text-blue-400" />
              <BsInstagram className="w-6 h-6 cursor-pointer hover:text-pink-400" />
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <Link href="/privacy" className="block hover:text-yellow-400">Privacy Policy</Link>
            <Link href="/terms" className="block hover:text-yellow-400 mt-2">Terms of Service</Link>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p>&copy; 2024 SunCart - Summer Essentials Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}