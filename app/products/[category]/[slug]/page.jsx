import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllProducts, getProductBySlug, getRelatedProducts, splitTags } from '@/lib/productsData';
import ProductCard from '@/components/ProductCard';

export async function generateStaticParams() {
  const allProducts = getAllProducts();
  return allProducts.map((p) => {
    const catSlug = p.categorySlug || 'general';
    return {
      category: catSlug,
      slug: p.slug,
    };
  });
}

export async function generateMetadata({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return {
      title: 'Product Not Found - Swaati Enterprises',
    };
  }

  return {
    title: `${product.name} - ${product.company} | Swaati Enterprises`,
    description: `Official distributor of ${product.name} by ${product.company}. Category: ${product.category}. Certified construction chemical solutions by Swaati Enterprises.`,
  };
}

export default function ProductDetailPage({ params }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const catSlug = product.categorySlug || params.category;
  const relatedProducts = getRelatedProducts(product, 3);

  const typeTags = splitTags(product.type);
  const detailTags = splitTags(product.subcategory);

  return (
    <>
      {/* Header / Breadcrumb Banner */}
      <section className="hero-gradient py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Breadcrumbs: Products / Category / Product */}
          <div className="flex flex-wrap items-center gap-2 text-royal-300 text-sm mb-4">
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
            <Link
              href={`/products/${catSlug}`}
              className="hover:text-white transition-colors"
            >
              {product.category}
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white truncate max-w-xs">{product.name}</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-3">
            {product.company && (
              <Link
                href={`/partners/${product.companySlug}`}
                className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
              >
                Manufacturer: {product.company}
              </Link>
            )}
            {product.category && (
              <Link
                href={`/products/${catSlug}`}
                className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full bg-royal-800 text-royal-200 hover:bg-royal-700 transition-colors"
              >
                {product.category}
              </Link>
            )}
          </div>

          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">{product.name}</h1>
          <p className="text-royal-200 text-lg max-w-3xl">
            Supplied and distributed by Swaati Enterprises — authorised channel partner for {product.company}.
          </p>
        </div>
      </section>

      {/* Main Detail Section */}
      <section className="py-16 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Card */}
          <div className="product-card bg-white rounded-2xl p-8 lg:p-10 border border-slate-200 shadow-sm mb-12">
            <div className="grid lg:grid-cols-3 gap-10 items-start">
              {/* Left 2 Cols: Product Main Info */}
              <div className="lg:col-span-2 space-y-8">
                {/* Header Info */}
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {product.company && (
                      <Link
                        href={`/partners/${product.companySlug}`}
                        className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded bg-royal-50 text-royal-700 hover:bg-royal-100 hover:text-royal-800 transition-colors"
                      >
                        {product.company}
                      </Link>
                    )}
                    {product.category && (
                      <Link
                        href={`/products/${catSlug}`}
                        className="text-xs font-medium text-slate-500 bg-slate-100 hover:bg-slate-200 px-2.5 py-1 rounded transition-colors"
                      >
                        {product.category}
                      </Link>
                    )}
                  </div>

                  <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-3">
                    {product.name}
                  </h2>
                </div>

                {/* Customer-Friendly Specifications Grid */}
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100">
                    Product Specifications
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Manufacturer */}
                    {product.company && (
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                          Manufacturer
                        </span>
                        <Link
                          href={`/partners/${product.companySlug}`}
                          className="text-base font-semibold text-royal-600 hover:underline inline-flex items-center gap-1"
                        >
                          {product.company}
                        </Link>
                      </div>
                    )}

                    {/* Category */}
                    {product.category && (
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                          Category
                        </span>
                        <Link
                          href={`/products/${catSlug}`}
                          className="text-base font-semibold text-royal-600 hover:underline"
                        >
                          {product.category}
                        </Link>
                      </div>
                    )}

                    {/* Product Type (Tags) */}
                    {typeTags.length > 0 && (
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                          Type
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {typeTags.map((t, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-100 text-sm font-medium"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Sub Category / Details (Tags / Text) */}
                    {detailTags.length > 0 && (
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                          Product / Variation Details
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {detailTags.map((d, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 text-sm font-medium"
                            >
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Swaati Enterprises Supply Assurance */}
                <div className="pt-6 border-t border-slate-100">
                  <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-700">
                    <div className="flex items-center gap-1.5 bg-royal-50 text-royal-700 px-3 py-1.5 rounded-lg">
                      <span>✓</span> 100% Genuine Certified Stock
                    </div>
                    <div className="flex items-center gap-1.5 bg-royal-50 text-royal-700 px-3 py-1.5 rounded-lg">
                      <span>✓</span> Technical Application Support
                    </div>
                    <div className="flex items-center gap-1.5 bg-royal-50 text-royal-700 px-3 py-1.5 rounded-lg">
                      <span>✓</span> Bulk Site Delivery Available
                    </div>
                  </div>
                </div>
              </div>

              {/* Right 1 Col: CTA & Action Panel */}
              <div className="flex flex-col gap-3 lg:border-l lg:pl-8 border-slate-200 w-full sticky top-24">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-1">
                    Get Pricing &amp; Details
                  </h3>
                  <p className="text-slate-500 text-xs mb-4">
                    Connect directly with our team for supply, technical support, or commercial quotations.
                  </p>
                </div>

                {/* Request Quotation */}
                <a
                  href={`https://wa.me/919371755337?text=${encodeURIComponent(`Hello Swaati Enterprises, I would like to request a quotation for ${product.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-white text-center py-3.5 px-4 rounded-xl font-semibold text-sm block shadow hover:shadow-lg transition-all"
                >
                  Request Quotation via WhatsApp
                </a>

                {/* Call Now */}
                <a
                  href="tel:+919370011133"
                  className="w-full text-royal-700 bg-royal-50 hover:bg-royal-100 text-center py-3.5 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 border border-royal-200 transition-colors"
                >
                  <svg width="16" height="16" className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call +91 93700 11133
                </a>

                {/* Quick Navigation Links */}
                <div className="mt-4 pt-4 border-t border-slate-100 text-xs space-y-2">
                  <Link
                    href={`/partners/${product.companySlug}`}
                    className="text-royal-600 hover:text-royal-800 font-medium flex items-center gap-1"
                  >
                    <span>View all {product.company} products</span>
                    <span>→</span>
                  </Link>
                  <Link
                    href={`/products/${catSlug}`}
                    className="text-slate-500 hover:text-slate-700 flex items-center gap-1"
                  >
                    <span>Browse {product.category} category</span>
                    <span>→</span>
                  </Link>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span>📍</span>
                    <span>Chinchwad, Pune – 411033</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>✉️</span>
                    <span>swaatienterprises@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Bar */}
          <div className="flex items-center justify-between py-4 mb-8 border-b border-slate-200 text-sm">
            <Link
              href={`/products/${catSlug}`}
              className="text-royal-600 hover:text-royal-800 font-semibold inline-flex items-center gap-1.5"
            >
              <span>←</span>
              <span>Back to {product.category}</span>
            </Link>
            <Link
              href="/products"
              className="text-slate-600 hover:text-slate-800 font-medium inline-flex items-center gap-1"
            >
              <span>Browse All Categories</span>
              <span>→</span>
            </Link>
          </div>

          {/* Related Products Section */}
          {relatedProducts.length > 0 && (
            <div className="mt-12">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">Related Products</h2>
                  <p className="text-slate-500 text-sm mt-1">
                    Similar products from {product.category} &amp; {product.company}
                  </p>
                </div>
                <Link
                  href={`/products/${catSlug}`}
                  className="text-sm font-semibold text-royal-600 hover:text-royal-800 hidden sm:inline-flex items-center gap-1"
                >
                  View category →
                </Link>
              </div>

              {/* 2-Column Product Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
