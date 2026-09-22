'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 max-w-[78%] sm:max-w-none">
              <img src="/images/se-logo.webp" alt="Swaati Enterprises Logo" className="h-8 sm:h-12 w-auto flex-shrink-0" />
              <div className="min-w-0 flex-shrink">
                <img src="/images/se-eng-logo.webp" alt="Swaati Enterprises Logo" className="h-4 sm:h-6 w-auto max-w-full" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link href="/" className="nav-link text-slate-700 hover:text-royal-600 font-medium">
                Home
              </Link>
              <Link href="/about" className="nav-link text-slate-700 hover:text-royal-600 font-medium">
                About
              </Link>
              <Link href="/products" className="nav-link text-slate-700 hover:text-royal-600 font-medium">
                Products
              </Link>
              <Link href="/partners" className="nav-link text-slate-700 hover:text-royal-600 font-medium">
                Partners
              </Link>
              <Link href="/projects" className="nav-link text-slate-700 hover:text-royal-600 font-medium">
                Projects
              </Link>
            </div>

            {/* Desktop CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center">
                <Link
                  href="/contact"
                  className="btn-primary text-white px-6 py-2.5 rounded-lg font-semibold text-sm inline-flex items-center"
                >
                  Get Quote
                </Link>
              </div>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-1.5 sm:p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                <svg width="24" height="24" className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-4 sm:px-6 py-4 space-y-3 shadow-lg animate-fade-in max-h-[calc(100vh-64px)] overflow-y-auto">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-700 hover:text-royal-600 font-medium py-2"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-700 hover:text-royal-600 font-medium py-2"
            >
              About
            </Link>
            <Link
              href="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-700 hover:text-royal-600 font-medium py-2"
            >
              Products
            </Link>
            <Link
              href="/partners"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-700 hover:text-royal-600 font-medium py-2"
            >
              Partners
            </Link>
            <Link
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-700 hover:text-royal-600 font-medium py-2"
            >
              Projects
            </Link>
            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary block text-center text-white px-6 py-2.5 rounded-lg font-semibold text-sm"
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
