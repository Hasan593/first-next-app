"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';


const Aside = () => {
    const pathName = usePathname();

    {/* Sidebar */ }
    return (
        <aside className="w-64 bg-gray-800 text-white flex flex-col">
            <div className="p-6 text-2xl font-bold border-b border-gray-700">
                <span>🚀</span> Dashboard
            </div>
            <nav className="flex-1 p-4 space-y-4">

                <Link href="/dashboard" className={`${pathName === '/dashboard' ? 'bg-orange-700 hover:bg-orange-700' : 'bg-gray-800'} flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition`}>
                    <span className="text-lg">🏠</span> Home
                </Link>

                <Link href="/dashboard/profile" className={`${pathName === '/dashboard/profile' ? 'bg-orange-700 hover:bg-orange-700' : 'bg-gray-800'} flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition`}>
                    <span className="text-lg">👤</span> Profile
                </Link>
                <Link href="/dashboard/settings" className={`${pathName === '/dashboard/settings' ? 'bg-orange-700 hover:bg-orange-700' : 'bg-gray-800'} flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition`}>
                    <span className="text-lg">⚙️</span> Settings
                </Link>
            </nav>
            <div className="p-4 border-t border-gray-700">
                <Link href="/" className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-600 transition">
                    <span className="text-lg">🚪</span> Log Out
                </Link>
            </div>
        </aside>
    );
};

export default Aside;