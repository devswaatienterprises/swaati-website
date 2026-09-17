'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';

const getApiBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_API_URL) return process.env.NEXT_PUBLIC_API_URL.replace(/\/+$/, '');
  if (typeof window !== 'undefined' && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    return 'https://swaati-sems-api.onrender.com/api/v1';
  }
  return 'http://localhost:4000/api/v1';
};

export default function ProductCategoryPage({ title, description, products }) {
  const [downloadToast, setDownloadToast] = useState('');

  const handleDownloadDatasheet = async (productName) => {
    try {
      setDownloadToast(`Fetching latest datasheet for ${productName} from Swaati CRM single source of truth...`);
      // Attempt to retrieve active datasheet metadata from public endpoint
      const res = await fetch(`${getApiBaseUrl()}/public/products/${encodeURIComponent(productName)}/datasheet`);
      if (res.ok) {
        const json = await res.json();
        if (json?.data?.fileUrl) {
          window.open(json.data.fileUrl, '_blank');
        }
      }
    } catch (err) {
      // Fallback
    }
    setTimeout(() => setDownloadToast(''), 4000);
  };

  return (
    <>
      {/* Toast */}
      {downloadToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3.5 rounded-xl shadow-2xl border border-slate-700 text-xs font-semibold flex items-center gap-2">
          <span>📄 {downloadToast}</span>
        </div>
      )}

      {/* Category Header */}
      <section className="hero-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-royal-300 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/products" className="hover:text-white transition-colors">
              Products
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">{title}</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{title}</h1>
          <p className="text-xl text-royal-200 max-w-3xl">{description}</p>
        </div>
      </section>

      {/* Products List */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {products.map((product, idx) => (
              <ProductCard key={product.id || idx} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-royal-700 to-royal-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Need Technical Guidance for Product Selection?
          </h2>
          <p className="text-royal-200 mb-8 max-w-2xl mx-auto">
            Our engineering team is available to assist you with technical recommendations and material selection.
          </p>
          <a
            href="https://wa.me/919371755337?text=Hello%20Swaati%20Enterprises%2C%20I%20would%20like%20to%20get%20a%20quote."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-royal-700 px-8 py-4 rounded-lg font-semibold hover:bg-royal-50 transition-all inline-block"
          >
            Get Technical Support
          </a>
        </div>
      </section>
    </>
  );
}
