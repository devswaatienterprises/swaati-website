'use client';

import Link from 'next/link';
import { splitTags } from '@/lib/productsData';

export default function ProductCard({ product }) {
  if (!product) return null;

  const catSlug = product.categorySlug || product.category?.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'general';
  const productUrl = `/products/${catSlug}/${product.slug}`;
  const categoryUrl = `/products/${catSlug}`;
  const partnerUrl = `/partners/${product.companySlug}`;

  const typeTags = splitTags(product.type);
  const detailTags = splitTags(product.subcategory);

  return (
    <div className="product-card group bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-royal-300 transition-all duration-300 flex flex-col justify-between h-full w-full">
      {/* TOP & MIDDLE CONTENT */}
      <div className="space-y-4 mb-6">
        {/* 1. Brand & Category Badges */}
        <div className="flex flex-wrap items-center gap-2">
          {product.company && (
            <Link
              href={partnerUrl}
              className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-md bg-royal-50 text-royal-700 hover:bg-royal-100 hover:text-royal-800 transition-colors border border-royal-100/80"
            >
              {product.company}
            </Link>
          )}
          {product.category && (
            <Link
              href={categoryUrl}
              className="text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 px-2.5 py-1 rounded-md transition-colors"
            >
              {product.category}
            </Link>
          )}
        </div>

        {/* 2. Product Name */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug group-hover:text-royal-600 transition-colors">
          <Link href={productUrl}>{product.name}</Link>
        </h3>

        {/* 3. Product Specifications: Type & Details */}
        <div className="space-y-2.5 pt-1">
          {/* Type */}
          {typeTags.length > 0 && (
            <div className="flex flex-wrap items-start gap-1.5 text-xs sm:text-sm">
              <span className="font-semibold text-slate-700 mt-0.5 flex-shrink-0">Type:</span>
              <div className="flex flex-wrap gap-1.5 flex-1">
                {typeTags.map((t, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-100/80 text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Details */}
          {detailTags.length > 0 && (
            <div className="flex flex-wrap items-start gap-1.5 text-xs sm:text-sm">
              <span className="font-semibold text-slate-700 mt-0.5 flex-shrink-0">Details:</span>
              <div className="flex flex-wrap gap-1.5 flex-1">
                {detailTags.map((d, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/80 text-xs font-medium"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* BOTTOM ACTION AREA */}
      <div className="pt-5 border-t border-slate-100 mt-auto">
        <a
          href={`https://wa.me/919371755337?text=${encodeURIComponent(`Hello Swaati Enterprises, I would like to request a quotation for ${product.name}.`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-white w-full py-3.5 px-5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 text-center shadow-xs hover:shadow-md transition-all group/btn"
        >
          <span>Request Quotation</span>
          <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </div>
  );
}
