"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname();
    const navLink = [
        { name: '', href: '/' },
        { name: 'Products', href: '/products' },
        { name: 'About', href: '/about' },
        { name: 'Dashboard', href: '/dashboard' },
        { name: 'Contact', href: '/contact' },
        { name: 'Docs', href: '/docs' },
        { name: 'Sign-In', href: '/signIn' },
        { name: 'Sign-Up', href: '/signUp' }
    ];

    if (pathName.includes('dashboard')) {
        return null
    }
    return (
        <nav className="bg-gray-800 p-3 flex gap-4 justify-center items-center shadow-md">
            {
                navLink.map(nav => (
                    <Link
                        key={nav.name}
                        href={nav.href}
                        className={`${pathName === nav.href ? "text-blue-600" : "text-white"} nav-link`}
                    >
                        {nav.name}
                    </Link>
                ))
            }
            <>
                {/* <Link
                href="/"
                className={`${pathName === "/" ? "text-blue-600" : "text-white"} nav-link`}
            >
                // Home
            </Link>
            <Link 
                href="/products"
                className={`${pathName === "/products" ? "text-blue-600" : "text-white"} nav-link`}
            >
                Products
            </Link>
            <Link
                href="/about"
                className={`${pathName === "/about" ? "text-blue-600" : "text-white"} nav-link`}
            >
                About
            </Link>
            <Link
                href="/dashboard"
                className={`${pathName === "/dashboard" ? "text-blue-600" : "text-white"} nav-link`}
            >
                Dashboard
            </Link>
            <Link
                href="/contact"
                className={`${pathName === "/contact" ? "text-blue-600" : "text-white"} nav-link`}
            >
                Contact
            </Link>
            <Link
                href="/docs"
                className={`${pathName === "/docs" ? "text-blue-600" : "text-white"} nav-link`}
            >
                Docs
            </Link>
            <Link
                href="/signIn"
                className={`${pathName === "/signIn" ? "text-blue-600" : "text-white"} nav-link`}
            >
                Sign-In
            </Link>
            <Link
                href="/signUp"
                className={`${pathName === "/signUp" ? "text-blue-600" : "text-white"} nav-link`}
            >
                Sign-Up
            </Link> */}
            </>
        </nav>
    );
};

export default Navbar;