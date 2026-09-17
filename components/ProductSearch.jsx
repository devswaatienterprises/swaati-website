'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  getAutocompleteSuggestions,
  getUniqueCompanies,
  getUniqueCategoriesList,
  splitTags,
} from '@/lib/productsData';

export default function ProductSearch({
  placeholder = 'Search products...',
  className = '',
  autoFocus = false,
  onSelectProduct,
  initialQuery = '',
  initialCompany = '',
  initialCategory = '',
  showFilters = false,
  showDirectResults = true,
  onFilterChange,
}) {
  const [query, setQuery] = useState(initialQuery);
  const [selectedCompany, setSelectedCompany] = useState(initialCompany);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);
  const router = useRouter();

  const companies = useMemo(() => getUniqueCompanies(), []);
  const categories = useMemo(() => getUniqueCategoriesList(), []);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  useEffect(() => {
    setSelectedCompany(initialCompany);
  }, [initialCompany]);

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  // Update suggestions whenever query, company, or category changes
  useEffect(() => {
    const hasSearch = Boolean(query.trim() || selectedCompany || selectedCategory);

    if (hasSearch && showDirectResults) {
      const results = getAutocompleteSuggestions(query, {
        company: selectedCompany,
        category: selectedCategory,
        limit: 8,
      });
      setSuggestions(results);
      setIsOpen(true);
      setSelectedIndex(-1);
    } else {
      setSuggestions([]);
      setIsOpen(false);
      setSelectedIndex(-1);
    }

    if (onFilterChange) {
      onFilterChange({
        query: query.trim(),
        company: selectedCompany,
        category: selectedCategory,
      });
    }
  }, [query, selectedCompany, selectedCategory, showDirectResults]);

  // Handle outside click to close dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleKeyDown = (e) => {
    if (!isOpen || suggestions.length === 0) {
      if (e.key === 'Enter') {
        e.preventDefault();
        navigateToProducts();
      }
      return;
    }

    const totalItems = suggestions.length + 1; // +1 for "View all in Catalogue"

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % totalItems);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + totalItems) % totalItems);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
        handleSelect(suggestions[selectedIndex]);
      } else {
        navigateToProducts();
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const navigateToProducts = () => {
    setIsOpen(false);
    const params = new URLSearchParams();
    if (query.trim()) params.set('search', query.trim());
    if (selectedCompany) params.set('company', selectedCompany);
    if (selectedCategory) params.set('category', selectedCategory);

    const qs = params.toString();
    router.push(qs ? `/products?${qs}` : '/products');
  };

  const handleSelect = (product) => {
    setIsOpen(false);
    if (onSelectProduct) {
      onSelectProduct(product);
    } else {
      const catSlug = product.categorySlug || 'general';
      router.push(`/products/${catSlug}/${product.slug}`);
    }
  };

  const handleClear = () => {
    setQuery('');
    setSelectedCompany('');
    setSelectedCategory('');
    setSuggestions([]);
    setIsOpen(false);
    if (inputRef.current) inputRef.current.focus();
    if (onFilterChange) {
      onFilterChange({ query: '', company: '', category: '' });
    }
  };

  const hasActiveFilters = Boolean(query || selectedCompany || selectedCategory);

  return (
    <div ref={wrapperRef} className={`relative w-full ${className}`}>
      {/* Search Input and Filters Container */}
      <div className="flex flex-col gap-3">
        {/* Search Input Box */}
        <div className="relative flex items-center w-full">
          <div className="absolute left-4 pointer-events-none text-slate-400">
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
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => {
              if (query.trim() || selectedCompany || selectedCategory) {
                setIsOpen(true);
              }
            }}
            placeholder={placeholder}
            autoFocus={autoFocus}
            className="w-full pl-12 pr-12 py-3.5 bg-white border-2 border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:border-royal-600 focus:ring-2 focus:ring-royal-100 text-base shadow-sm transition-all"
          />

          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                if (inputRef.current) inputRef.current.focus();
              }}
              className="absolute right-4 text-slate-400 hover:text-slate-600 focus:outline-none p-1"
              aria-label="Clear search text"
            >
              <svg width="16" height="16" className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Dropdown Filters (Manufacturer & Category) */}
        {showFilters && (
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
            {/* Manufacturer Dropdown */}
            <div className="w-full sm:w-1/2">
              <select
                value={selectedCompany}
                onChange={(e) => setSelectedCompany(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:border-royal-600 focus:ring-1 focus:ring-royal-600 shadow-sm transition-all cursor-pointer"
              >
                <option value="">All Manufacturers</option>
                {companies.map((comp) => (
                  <option key={comp.slug} value={comp.name}>
                    {comp.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Category Dropdown */}
            <div className="w-full sm:w-1/2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:border-royal-600 focus:ring-1 focus:ring-royal-600 shadow-sm transition-all cursor-pointer"
              >
                <option value="">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat.slug} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Reset / Clear Button if filters active */}
            {hasActiveFilters && (
              <button
                type="button"
                onClick={handleClear}
                className="text-xs font-semibold text-royal-600 hover:text-royal-800 whitespace-nowrap px-3 py-2 rounded-lg bg-royal-50 hover:bg-royal-100 transition-colors border border-royal-200"
              >
                Clear Filters
              </button>
            )}
          </div>
        )}
      </div>

      {/* Autocomplete / Instant Search Results Dropdown */}
      {showDirectResults && isOpen && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-xl shadow-2xl border border-slate-200 py-2 z-50 max-h-96 overflow-y-auto animate-fade-in text-left">
          {suggestions.length > 0 ? (
            <>
              <div className="px-4 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                <span>Matching Products ({suggestions.length})</span>
                <span className="text-[10px] lowercase font-normal text-slate-400">Click to view product</span>
              </div>

              <div className="divide-y divide-slate-100">
                {suggestions.map((product, index) => {
                  const isSelected = selectedIndex === index;
                  const typeTags = splitTags(product.type);
                  const detailTags = splitTags(product.subcategory);

                  return (
                    <div
                      key={product.id}
                      onClick={() => handleSelect(product)}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`px-4 py-3 cursor-pointer transition-colors ${
                        isSelected ? 'bg-royal-50 text-royal-900' : 'hover:bg-slate-50 text-slate-800'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="font-semibold text-sm leading-snug">{product.name}</div>
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-royal-50 text-royal-700 flex-shrink-0">
                          {product.company}
                        </span>
                      </div>

                      <div className="text-xs text-slate-500 mt-1 flex flex-wrap items-center gap-1.5">
                        <span className="text-slate-600 font-medium">{product.category}</span>
                        {typeTags.length > 0 && (
                          <>
                            <span>•</span>
                            <span className="text-blue-600 truncate max-w-xs">
                              {typeTags.join(', ')}
                            </span>
                          </>
                        )}
                        {detailTags.length > 0 && (
                          <>
                            <span>•</span>
                            <span className="text-slate-500 truncate max-w-xs">
                              {detailTags.join(', ')}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* View All in Catalogue row */}
              <div
                onClick={navigateToProducts}
                onMouseEnter={() => setSelectedIndex(suggestions.length)}
                className={`border-t border-slate-100 px-4 py-3 cursor-pointer text-sm font-semibold flex items-center justify-between transition-colors ${
                  selectedIndex === suggestions.length
                    ? 'bg-royal-50 text-royal-700'
                    : 'text-royal-600 hover:bg-slate-50'
                }`}
              >
                <span>View all matching products in Catalogue</span>
                <svg width="16" height="16" className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </>
          ) : (
            /* Clean Empty State Message */
            <div className="p-5 text-center">
              <p className="text-sm font-medium text-slate-700 mb-1">
                No products found. Try changing your search or filters.
              </p>
              <p className="text-xs text-slate-500 mb-3">
                Check for spelling or try searching by category or manufacturer.
              </p>
              <button
                type="button"
                onClick={handleClear}
                className="text-xs text-royal-600 hover:text-royal-800 font-semibold underline inline-block"
              >
                Clear Search &amp; Filters
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
