'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';
import { Edit2, User, Mail, Camera } from 'lucide-react';
import { toast } from 'react-toastify';

export default function ProfilePage() {
  const router = useRouter();
  const { data: session, isPending, refetch } = authClient.useSession();

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(session?.user?.name);
  const [image, setImage] = useState(session?.user?.image);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    if (!isPending && !session) {
      toast.error('Please login to view profile');
      router.push('/login');
    }
  }, [session, isPending, router]);

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

  const handleUpdate = async (e) => {
    e.preventDefault();
    setUpdating(true);

    const { error } = await authClient.updateUser({
      name: name,
      image: image,
    });

    if (error) {
      toast.error(error.message || 'Update failed');
    } else {
      toast.success('Profile updated successfully!');
      await refetch();
      setIsEditing(false);
    }

    setUpdating(false);
  };

  if (isEditing) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6">
            Update Profile
          </h2>

          <form onSubmit={handleUpdate} className="space-y-6">

            {/* Name */}
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
            </div>

            {/* Image */}
            <div>
              <label className="block text-gray-700 mb-2">Photo URL</label>
              <div className="relative">
                <Camera className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <input
                  type="url"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="https://example.com/photo.jpg"
                  required
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600"
            >
              {updating ? 'Updating...' : 'Update Information'}
            </button>

            {/* Cancel */}
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="btn w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>

          </form>
        </div>
      </div>
    );
  }

  if (session) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">

          {/* Header */}
          <div className="bg-linear-to-r from-orange-500 to-yellow-500 h-32"></div>

          <div className="px-8 pb-8">

            {/* Avatar */}
            <div className="flex justify-center -mt-16 mb-6">
              <Image
                src={session.user.image || '/avatar.png'}
                alt="Profile"
                width={96}
                height={96}
                className="rounded-full border-4 border-white shadow-lg"
              />
            </div>

            {/* Info */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800">
                {session.user.name}
              </h2>

              <p className="text-gray-600 mt-2 flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                {session.user.email}
              </p>
            </div>

            {/* Edit Button */}
            <div className="mt-8">
              <button
                onClick={() => setIsEditing(true)}
                className="btn w-full flex items-center justify-center gap-2 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600"
              >
                <Edit2 className="w-4 h-4" />
                Update Profile
              </button>
            </div>

          </div>
        </div>
      </div>
    );
  }
}