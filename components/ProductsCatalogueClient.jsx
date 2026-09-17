'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import ProductCard from './ProductCard';

function ProductsCatalogueInner({ initialProducts, initialPartners, initialCategories }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Read initial query params from URL
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedCompany, setSelectedCompany] = useState(searchParams.get('company') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');

  // Keep state in sync with URL
  useEffect(() => {
    setSearchQuery(searchParams.get('search') || '');
    setSelectedCompany(searchParams.get('company') || '');
    setSelectedCategory(searchParams.get('category') || '');
  }, [searchParams]);

  // Dynamic dropdown options directly from data
  const companyOptions = useMemo(() => {
    return initialPartners.map((p) => p.name).sort((a, b) => a.localeCompare(b));
  }, [initialPartners]);

  const categoryOptions = useMemo(() => {
    return initialCategories.map((c) => c.name).sort((a, b) => a.localeCompare(b));
  }, [initialCategories]);

  // Combined instant filtering across Name, Manufacturer, Category, Sub Category/Details, Type
  const filteredProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const comp = selectedCompany.trim().toLowerCase();
    const cat = selectedCategory.trim().toLowerCase();

    // If no filters are active, return empty to show category grid
    if (!q && !comp && !cat) {
      return [];
    }

    return initialProducts.filter((p) => {
      // Manufacturer filter
      if (comp) {
        if (p.company.toLowerCase() !== comp && p.companySlug.toLowerCase() !== comp) {
          return false;
        }
      }

      // Category filter
      if (cat) {
        if (p.category.toLowerCase() !== cat && p.categorySlug.toLowerCase() !== cat) {
          return false;
        }
      }

      // Live search across: name, manufacturer, category, subcategory, type
      if (q) {
        const searchable = `${p.name} ${p.company} ${p.category} ${p.type || ''} ${p.subcategory || ''}`.toLowerCase();
        const terms = q.split(/\s+/).filter(Boolean);
        if (!terms.every((t) => searchable.includes(t))) {
          return false;
        }
      }

      return true;
    });
  }, [initialProducts, searchQuery, selectedCompany, selectedCategory]);

  const hasActiveFilters = Boolean(searchQuery.trim() || selectedCompany || selectedCategory);

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCompany('');
    setSelectedCategory('');
    router.push('/products', { scroll: false });
  };

  return (
    <div className="w-full">
      {/* Search & Filter Section */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 lg:p-8 shadow-sm mb-12">
        <div className="mb-6">
          <h2 className="text-xl lg:text-2xl font-bold text-slate-800">
            Search &amp; Filter Products
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Search across our entire catalogue by keyword or filter by manufacturer and category.
          </p>
        </div>

        {/* Desktop: Clean Horizontal Row | Mobile: Stacked Vertically */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4">
          {/* Search Bar */}
          <div className="relative flex-1">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <svg width="20" height="20" className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-12 pr-10 py-3.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-800 placeholder-slate-400 focus:bg-white focus:border-royal-600 focus:ring-2 focus:ring-royal-100 text-sm md:text-base shadow-sm transition-all"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                aria-label="Clear search"
              >
                <svg width="16" height="16" className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Manufacturer Filter */}
          <div className="w-full lg:w-56">
            <label className="sr-only">Manufacturer</label>
            <select
              value={selectedCompany}
              onChange={(e) => setSelectedCompany(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3.5 text-sm text-slate-800 focus:bg-white focus:border-royal-600 focus:ring-2 focus:ring-royal-100 shadow-sm transition-all cursor-pointer"
            >
              <option value="">All Manufacturers</option>
              {companyOptions.map((comp) => (
                <option key={comp} value={comp}>
                  {comp}
                </option>
              ))}
            </select>
          </div>

          {/* Category Filter */}
          <div className="w-full lg:w-56">
            <label className="sr-only">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3.5 text-sm text-slate-800 focus:bg-white focus:border-royal-600 focus:ring-2 focus:ring-royal-100 shadow-sm transition-all cursor-pointer"
            >
              <option value="">All Categories</option>
              {categoryOptions.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Clear Filters Button */}
          {hasActiveFilters && (
            <button
              type="button"
              onClick={handleClearFilters}
              className="px-5 py-3.5 text-sm font-semibold text-royal-700 bg-royal-50 hover:bg-royal-100 rounded-xl border border-royal-200 transition-colors whitespace-nowrap text-center"
            >
              Clear Filters
            </button>
          )}
        </div>

        {/* Active Filter Indicators */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 pt-4 mt-4 border-t border-slate-100 text-xs">
            <span className="text-slate-400 font-medium">Active filters:</span>
            {searchQuery && (
              <span className="inline-flex items-center gap-1.5 bg-royal-50 text-royal-700 px-3 py-1 rounded-full border border-royal-100 font-medium">
                Keyword: &quot;{searchQuery}&quot;
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="hover:text-royal-900 font-bold ml-0.5"
                  aria-label="Remove keyword filter"
                >
                  ×
                </button>
              </span>
            )}
            {selectedCompany && (
              <span className="inline-flex items-center gap-1.5 bg-royal-50 text-royal-700 px-3 py-1 rounded-full border border-royal-100 font-medium">
                Manufacturer: {selectedCompany}
                <button
                  type="button"
                  onClick={() => setSelectedCompany('')}
                  className="hover:text-royal-900 font-bold ml-0.5"
                  aria-label="Remove manufacturer filter"
                >
                  ×
                </button>
              </span>
            )}
            {selectedCategory && (
              <span className="inline-flex items-center gap-1.5 bg-royal-50 text-royal-700 px-3 py-1 rounded-full border border-royal-100 font-medium">
                Category: {selectedCategory}
                <button
                  type="button"
                  onClick={() => setSelectedCategory('')}
                  className="hover:text-royal-900 font-bold ml-0.5"
                  aria-label="Remove category filter"
                >
                  ×
                </button>
              </span>
            )}
            <button
              type="button"
              onClick={handleClearFilters}
              className="text-royal-600 hover:text-royal-800 font-semibold underline ml-2"
            >
              Reset All
            </button>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      {hasActiveFilters ? (
        /* FILTERED RESULTS VIEW (1-Column Layout) */
        <div>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="text-xs font-semibold text-royal-600 hover:text-royal-800 inline-flex items-center gap-1"
                >
                  <span>←</span>
                  <span>Back to Categories Grid</span>
                </button>
              </div>
              <h3 className="text-xl font-bold text-slate-800">
                Filtered Products
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Showing <span className="font-semibold text-slate-700">{filteredProducts.length}</span> matching products
              </p>
            </div>

            <button
              type="button"
              onClick={handleClearFilters}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-royal-50 text-royal-700 hover:bg-royal-100 border border-royal-200 transition-colors"
            >
              Clear &amp; View Categories Grid
            </button>
          </div>

          {filteredProducts.length === 0 ? (
            /* Empty State */
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center my-8 shadow-sm">
              <div className="w-16 h-16 bg-royal-50 text-royal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-slate-800 mb-2">
                No products found. Try changing your search or filters.
              </h4>
              <p className="text-slate-500 text-sm max-w-md mx-auto mb-6">
                We could not find any products matching your current search term and filter criteria.
              </p>
              <button
                type="button"
                onClick={handleClearFilters}
                className="btn-primary text-white text-sm font-semibold px-6 py-2.5 rounded-lg shadow"
              >
                Clear All Filters &amp; Browse Categories
              </button>
            </div>
          ) : (
            /* 2-Column Product Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      ) : (
        /* DEFAULT CATEGORY-FIRST VIEW (Clean 3-Column / 4-Column Grid) */
        <div>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
            <div>
              <h3 className="text-2xl font-bold text-slate-800">
                Product Categories
              </h3>
              <p className="text-slate-500 text-sm mt-1">
                Select a category to view all certified products and technical specifications
              </p>
            </div>
            <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-royal-100 text-royal-700">
              {initialCategories.length} Categories • {initialProducts.length} Products
            </span>
          </div>

          {/* Refined Engaging Category Tiles Grid: 3 columns on desktop, 2 on tablet, 1 on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {initialCategories.map((category, index) => {
              const formattedIndex = String(index + 1).padStart(2, '0');
              return (
                <Link
                  key={category.slug}
                  href={`/products/${category.slug}`}
                  className="group relative bg-white rounded-2xl p-7 lg:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-royal-400 overflow-hidden border-l-4 border-l-transparent hover:border-l-royal-600"
                >
                  <div className="relative z-10">
                    {/* Category Title */}
                    <h4 className="text-lg lg:text-xl font-bold text-slate-900 group-hover:text-royal-600 transition-colors mb-3 tracking-tight leading-snug">
                      {category.name}
                    </h4>

                    {/* Subcategories preview / description */}
                    {category.subcategories && category.subcategories.length > 0 && (
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-6">
                        {category.subcategories.slice(0, 3).join(' • ')}
                        {category.subcategories.length > 3 ? ' • more' : ''}
                      </p>
                    )}
                  </div>

                  {/* Bottom Footer: Explore Action */}
                  <div className="pt-4 border-t border-slate-100 mt-auto flex items-center justify-between relative z-10">
                    <span className="text-xs font-bold text-royal-600 group-hover:text-royal-800 inline-flex items-center gap-1.5 transition-colors">
                      <span>Explore Category</span>
                      <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-royal-600 group-hover:text-white transition-all transform group-hover:translate-x-0.5 shadow-2xs">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProductsCatalogueClient(props) {
  return (
    <Suspense fallback={<div className="py-12 text-center text-slate-500">Loading product categories...</div>}>
      <ProductsCatalogueInner {...props} />
    </Suspense>
  );
}
