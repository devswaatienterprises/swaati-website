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
    <div className="product-card group bg-white rounded-2xl p-4 sm:p-6 lg:p-7 border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-royal-300 transition-all duration-300 flex flex-col justify-between h-full w-full max-w-full box-border">
      {/* TOP & MIDDLE CONTENT */}
      <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
        {/* 1. Brand & Category Badges */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {product.company && (
            <Link
              href={partnerUrl}
              className="inline-flex items-center text-xs font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-royal-50 text-royal-700 hover:bg-royal-100 hover:text-royal-800 transition-colors border border-royal-100/80 max-w-full truncate"
            >
              {product.company}
            </Link>
          )}
          {product.category && (
            <Link
              href={categoryUrl}
              className="text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md transition-colors max-w-full truncate"
            >
              {product.category}
            </Link>
          )}
        </div>

        {/* 2. Product Name */}
        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 leading-snug group-hover:text-royal-600 transition-colors break-words">
          <Link href={productUrl}>{product.name}</Link>
        </h3>

        {/* 3. Product Specifications: Type & Details */}
        <div className="space-y-2 pt-0.5">
          {/* Type */}
          {typeTags.length > 0 && (
            <div className="flex flex-wrap items-start gap-1.5 text-xs sm:text-sm">
              <span className="font-semibold text-slate-700 mt-0.5 flex-shrink-0">Type:</span>
              <div className="flex flex-wrap gap-1.5 flex-1 min-w-0">
                {typeTags.map((t, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-100/80 text-xs font-medium break-words max-w-full"
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
              <div className="flex flex-wrap gap-1.5 flex-1 min-w-0">
                {detailTags.map((d, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/80 text-xs font-medium break-words max-w-full"
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
      <div className="pt-4 sm:pt-5 border-t border-slate-100 mt-auto space-y-2.5 sm:space-y-3">
        {/* Document Download Buttons (Render ONLY if actual documents exist) */}
        {product.documents && (product.documents.datasheet || product.documents.brochure) && (
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            {product.documents.datasheet && (
              <a
                href={product.documents.datasheet.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[110px] w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-2 sm:py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs border border-slate-300 transition-colors shadow-2xs text-center"
              >
                <svg className="w-4 h-4 text-slate-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="truncate">Download Datasheet ↓</span>
              </a>
            )}

            {product.documents.brochure && (
              <a
                href={product.documents.brochure.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[110px] w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-2 sm:py-2.5 px-3 rounded-xl bg-royal-50 hover:bg-royal-100 text-royal-700 font-semibold text-xs border border-royal-200 transition-colors shadow-2xs text-center"
              >
                <svg className="w-4 h-4 text-royal-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="truncate">Download Brochure ↓</span>
              </a>
            )}
          </div>
        )}

        <a
          href={`https://wa.me/919371755337?text=${encodeURIComponent(`Hello Swaati Enterprises, I would like to request a quotation for ${product.name}.`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-white w-full py-3 sm:py-3.5 px-4 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 text-center shadow-xs hover:shadow-md transition-all group/btn"
        >
          <span>Request Quotation</span>
          <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </div>
  );
}
