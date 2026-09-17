import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPartners, getPartnerBySlug, getProductsByPartner } from '@/lib/productsData';
import ProductCard from '@/components/ProductCard';

export async function generateStaticParams() {
  const partners = getAllPartners();
  return partners.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }) {
  const partner = getPartnerBySlug(params.slug);
  if (!partner) {
    return {
      title: 'Partner Not Found - Swaati Enterprises',
    };
  }

  return {
    title: `${partner.name} - Authorised Distributor | Swaati Enterprises`,
    description: `Swaati Enterprises is an authorised distributor/channel partner for ${partner.name}. Browse certified products and technical solutions.`,
  };
}

export default function PartnerDetailPage({ params }) {
  const partner = getPartnerBySlug(params.slug);

  if (!partner) {
    notFound();
  }

  // Automatically fetch products for this partner from the CSV dataset
  const partnerProducts = getProductsByPartner(partner.slug);

  // Group products by Category
  const productsByCategoryMap = new Map();
  partnerProducts.forEach((product) => {
    const cat = product.category || 'General';
    if (!productsByCategoryMap.has(cat)) {
      productsByCategoryMap.set(cat, []);
    }
    productsByCategoryMap.get(cat).push(product);
  });
  const categoryGroups = Array.from(productsByCategoryMap.entries()).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  return (
    <>
      {/* Header */}
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
            <Link href="/partners" className="hover:text-white transition-colors">
              Partners
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">{partner.name}</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full bg-white/20 text-white">
              Authorised Channel Partner
            </span>
            <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full bg-royal-800 text-royal-200">
              {partnerProducts.length} {partnerProducts.length === 1 ? 'Product' : 'Products'} Available
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{partner.name}</h1>
          <p className="text-xl text-royal-200 max-w-3xl">
            Authorised distribution, technical material supply and engineering support for {partner.name} products.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          {/* Our Connection Section */}
          <div className="bg-white rounded-2xl p-8 lg:p-10 border border-slate-200 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-2xl bg-white p-2 border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-xs">
                  <img
                    src={partner.image}
                    alt={`${partner.name} Logo`}
                    className="max-h-full max-w-full w-auto h-auto object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">{partner.name}</h2>
                  <span className="text-sm font-semibold text-royal-600">
                    Official {partner.relationship || 'Authorised Distributor'}
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={`https://wa.me/919371755337?text=${encodeURIComponent(`Hello Swaati Enterprises, I would like to get a quote for ${partner.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-white text-xs font-semibold px-5 py-2.5 rounded-lg shadow inline-flex items-center"
                >
                  Inquire for {partner.name}
                </a>
                <Link
                  href={`/products?company=${encodeURIComponent(partner.name)}`}
                  className="btn-secondary text-royal-700 text-xs font-semibold px-5 py-2.5 rounded-lg"
                >
                  View in Catalogue
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Our Connection
              </h3>
              <p className="text-slate-700 text-base leading-relaxed mb-4">
                Swaati Enterprises is an authorised distributor/channel partner for {partner.name}, serving customers with their relevant construction and speciality product solutions.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Through this partnership, we ensure direct factory sourcing, authentic quality assurance, up-to-date technical datasheets, and hands-on site support for contractors, engineers, and developers across Western India.
              </p>
            </div>
          </div>

          {/* Products We Serve Section */}
          <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-800">
                  Products We Serve
                </h2>
                <p className="text-slate-500 text-sm mt-1">
                  Complete list of {partner.name} products available from Swaati Enterprises, organised by category.
                </p>
              </div>

              <div className="text-xs font-semibold text-royal-700 bg-royal-50 border border-royal-200 px-4 py-2 rounded-lg">
                Total: {partnerProducts.length} {partnerProducts.length === 1 ? 'Product' : 'Products'}
              </div>
            </div>

            {partnerProducts.length === 0 ? (
              <div className="bg-white rounded-xl p-12 text-center border border-slate-200">
                <p className="text-slate-600 text-sm">
                  No products currently listed for this partner in the current catalogue version.
                </p>
                <Link
                  href="/products"
                  className="btn-primary text-white text-xs font-semibold px-6 py-2.5 rounded-lg mt-4 inline-block"
                >
                  Browse Full Catalogue
                </Link>
              </div>
            ) : (
              <div className="space-y-12">
                {categoryGroups.map(([catName, prods]) => (
                  <div key={catName} className="space-y-6">
                    <div className="flex items-center justify-between border-b-2 border-royal-100 pb-3">
                      <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                        <span>{catName}</span>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-royal-100 text-royal-700">
                          {prods.length} {prods.length === 1 ? 'Product' : 'Products'}
                        </span>
                      </h3>
                      <Link
                        href={`/products?category=${encodeURIComponent(catName)}&company=${encodeURIComponent(partner.name)}`}
                        className="text-xs font-semibold text-royal-600 hover:text-royal-800"
                      >
                        Filter in catalogue →
                      </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                      {prods.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Bottom Navigation / CTA */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-slate-800">
                Need Bulk Pricing or Specifications for {partner.name}?
              </h3>
              <p className="text-slate-500 text-sm mt-1">
                Contact our technical sales team for quotations and on-site demonstrations.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/partners"
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold px-5 py-3 rounded-lg transition-colors"
              >
                ← All Partners
              </Link>
              <a
                href={`https://wa.me/919371755337?text=${encodeURIComponent(`Hello Swaati Enterprises, I would like to get a quote for ${partner.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-white text-xs font-semibold px-6 py-3 rounded-lg shadow inline-flex items-center"
              >
                Request Quotation
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
