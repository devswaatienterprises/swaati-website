import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllCategories, getCategoryBySlug, getProductsByCategory } from '@/lib/productsData';
import ProductCard from '@/components/ProductCard';

export async function generateStaticParams() {
  const allCategories = getAllCategories();
  return allCategories.map((c) => ({
    category: c.slug,
  }));
}

export async function generateMetadata({ params }) {
  const category = getCategoryBySlug(params.category);
  if (!category) {
    return {
      title: 'Category Not Found - Swaati Enterprises',
    };
  }

  return {
    title: `${category.name} - Products | Swaati Enterprises`,
    description: `Explore ${category.productCount} certified products in ${category.name} from leading construction chemical brands at Swaati Enterprises.`,
  };
}

export default function CategoryProductsPage({ params }) {
  const category = getCategoryBySlug(params.category);

  if (!category) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(params.category);

  return (
    <>
      {/* Header */}
      <section className="hero-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Breadcrumbs */}
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
            <span className="text-white">{category.name}</span>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full bg-royal-800 text-royal-200">
              {category.productCount} {category.productCount === 1 ? 'Product' : 'Products'}
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {category.name}
          </h1>

          <p className="text-xl text-royal-200 max-w-3xl">
            Explore certified {category.name.toLowerCase()} solutions supplied and distributed across Pune &amp; Western Maharashtra.
          </p>
        </div>
      </section>

      {/* Category Products Listing */}
      <section className="py-16 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          {/* Sub-header with Back Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
            <div>
              <Link
                href="/products"
                className="text-royal-600 hover:text-royal-800 font-semibold inline-flex items-center gap-1.5 text-sm"
              >
                <span>←</span>
                <span>Back to All Categories</span>
              </Link>
              <h2 className="text-xl font-bold text-slate-800 mt-2">
                {category.name} Products
              </h2>
            </div>
            <span className="text-xs font-medium text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
              Showing {categoryProducts.length} of {category.productCount} products
            </span>
          </div>

          {/* 2-Column Product Grid */}
          {categoryProducts.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center my-8">
              <h3 className="text-lg font-bold text-slate-800 mb-2">No Products Found</h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                No products are currently listed under this category.
              </p>
              <Link
                href="/products"
                className="btn-primary text-white text-sm font-semibold px-6 py-2.5 rounded-lg shadow"
              >
                Browse Other Categories
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {/* Bottom Back Navigation */}
          <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
            <Link
              href="/products"
              className="text-royal-600 hover:text-royal-800 font-semibold inline-flex items-center gap-1.5 text-sm"
            >
              <span>←</span>
              <span>Back to All Categories</span>
            </Link>
            <a
              href="#top"
              className="text-slate-500 hover:text-slate-700 text-xs font-medium"
            >
              ↑ Back to top
            </a>
          </div>
        </div>
      </section>

      {/* Technical Support CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-royal-700 to-royal-900 rounded-2xl p-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Need Technical Advice for {category.name}?
            </h2>
            <p className="text-royal-200 mb-8 max-w-2xl mx-auto">
              Our engineering team provides material specifications, application guidelines, and site support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`https://wa.me/919371755337?text=${encodeURIComponent(`Hello Swaati Enterprises, I would like technical support for ${category.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-royal-700 px-8 py-4 rounded-lg font-semibold hover:bg-royal-50 transition-all inline-block shadow-lg"
              >
                Request Support via WhatsApp
              </a>
              <a
                href="tel:+919370011133"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-royal-700 transition-all inline-block"
              >
                Call +91 93700 11133
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
