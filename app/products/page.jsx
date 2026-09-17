import Link from 'next/link';
import { getAllProducts, getAllPartners, getAllCategories } from '@/lib/productsData';
import ProductsCatalogueClient from '@/components/ProductsCatalogueClient';

export const metadata = {
  title: 'Products Catalogue - Swaati Enterprises',
  description:
    'Search and browse 240+ certified construction chemicals, waterproofing systems, grouts, and engineering solutions from leading manufacturers.',
};

export default function ProductsPage() {
  const allProducts = getAllProducts();
  const allPartners = getAllPartners();
  const allCategories = getAllCategories();

  return (
    <>
      {/* Products Page Header */}
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
            <span className="text-white">Products</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Construction Chemical Products
          </h1>

          <p className="text-xl text-royal-200 max-w-3xl">
            Explore our comprehensive range of construction chemicals including waterproofing systems, concrete admixtures, epoxy flooring, structural repair solutions, grouts, anchors and industrial coatings.
          </p>
        </div>
      </section>

      {/* Main Catalogue Section: Search & Category-First Grid */}
      <section className="py-12 lg:py-16 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <ProductsCatalogueClient
            initialProducts={allProducts}
            initialPartners={allPartners}
            initialCategories={allCategories}
          />
        </div>
      </section>

      {/* Technical Support CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-royal-700 to-royal-900 rounded-2xl p-10 lg:p-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Need Technical Guidance for Product Selection?
            </h2>
            <p className="text-royal-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Our engineering and technical team is available to assist you with material recommendations, compatibility, and site solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/919371755337?text=Hello%20Swaati%20Enterprises%2C%20I%20would%20like%20to%20get%20a%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-royal-700 px-8 py-4 rounded-lg font-semibold hover:bg-royal-50 transition-all inline-block shadow-lg"
              >
                Contact Technical Team
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
