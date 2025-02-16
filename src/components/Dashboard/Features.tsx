import Link from 'next/link';
import React from 'react';

const Features = () => {
  return (
    <div className="space-y-4">
      <p className="text-gray-600">
        Welcome to your personal dashboard! Here you can manage your profile, access settings, and stay updated.
      </p>
      <div className="flex gap-4">
        <div className="flex-1 p-4 bg-blue-100 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-blue-600">বাংলা</h3>
          <p className="text-gray-600">বাংলায় পড়তে এখানে ক্লিক করুন।</p>
          <Link href="/dashboard/articles/poleticle-news?lang=bn" className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Bangla
          </Link>
        </div>
        <div className="flex-1 p-4 bg-green-100 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-green-600">English</h3>
          <p className="text-gray-600">To Read in English click here.</p>
          <Link href="/dashboard/articles/poleticle-news?lang=en" className="mt-4 inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
            English
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Features;