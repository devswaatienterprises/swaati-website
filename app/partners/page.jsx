import Link from 'next/link';
import { getAllPartners } from '@/lib/productsData';

export const metadata = {
  title: 'Partners - Swaati Enterprises',
  description:
    'We are authorised distributors and channel partners for leading brands serving the construction, waterproofing, repair and speciality solutions industry.',
};

const partnerLogoScale = {
  'fosroc': 'scale-105 group-hover:scale-110',
  'dr-fixit': 'scale-110 group-hover:scale-115',
  'sika': 'scale-115 group-hover:scale-120',
  'penetron': 'scale-125 group-hover:scale-130',
  'stp-ltd': 'scale-130 group-hover:scale-135',
  'cico': 'scale-130 group-hover:scale-135',
  'mc-bauchemie': 'scale-140 group-hover:scale-145',
  'apcotex-industries': 'scale-160 group-hover:scale-165',
  'kemper': 'scale-155 group-hover:scale-160',
  'myk-arment': 'scale-160 group-hover:scale-165',
  'constro-link-ease-series': 'scale-160 group-hover:scale-165',
  'non-woven-geotextiles': 'scale-155 group-hover:scale-160',
  'reliance-recron-fiber': 'scale-160 group-hover:scale-165',
  'relience-recron-fiber': 'scale-160 group-hover:scale-165',
  'sunanda': 'scale-155 group-hover:scale-160',
  'kwickfix-industries-pvt-ltd': 'scale-155 group-hover:scale-160',
  'kangaroo-and-maris-polymers': 'scale-155 group-hover:scale-160',
  'kangaroo-maris-polymers': 'scale-155 group-hover:scale-160',
  'alfashield-polymers': 'scale-155 group-hover:scale-160',
  'sp-concare': 'scale-155 group-hover:scale-160',
  'kerapoxy': 'scale-155 group-hover:scale-160',
};

export default function PartnersPage() {
  const partners = getAllPartners();

  return (
    <>
      {/* Partners Page Header */}
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
            <span className="text-white">Partners</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Authorised Brand Partners
          </h1>

          <p className="text-xl text-royal-200 max-w-3xl">
            We partner with industry-leading manufacturers to supply certified construction chemicals, waterproofing systems, and structural engineering materials.
          </p>
        </div>
      </section>

      {/* Partners Grid: Exactly 3 Columns on Desktop, 2 on Tablet, 1 on Mobile */}
      <section className="py-20 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-royal-600 font-semibold text-sm tracking-wider uppercase">
              Authorised Brand Network
            </span>
            <h2 className="text-3xl font-bold text-slate-800 mt-2 mb-4">
              Trusted Partnerships with Industry Leaders
            </h2>
            <p className="text-slate-600 text-sm">
              Explore our authorised manufacturer partner brands and browse certified products supplied directly for your projects.
            </p>
          </div>

          {/* 4-COLUMN DESKTOP GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner) => (
              <Link
                key={partner.slug}
                href={`/partners/${partner.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-royal-300"
              >
                <div>
                  {/* Prominent Company Logo Area (75–85% visual footprint) */}
                  <div className="relative w-full h-36 sm:h-40 bg-slate-50/70 group-hover:bg-white flex items-center justify-center p-3 sm:p-4 border-b border-slate-100 transition-colors overflow-hidden">
                    <img
                      src={partner.image}
                      alt={`${partner.name} Logo`}
                      className={`w-full h-full max-h-28 sm:max-h-32 max-w-[88%] object-contain transition-transform duration-300 ${partnerLogoScale[partner.slug] || 'scale-140 group-hover:scale-145'}`}
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-royal-600 transition-colors leading-snug">
                      {partner.name}
                    </h3>

                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {partner.categories.join(', ')}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-5 sm:px-6 py-3.5 border-t border-slate-100 flex items-center justify-between text-xs bg-slate-50/40 group-hover:bg-transparent transition-colors">
                  <span className="font-semibold text-slate-600">
                    {partner.productCount} {partner.productCount === 1 ? 'Product' : 'Products'}
                  </span>
                  <span className="text-royal-600 font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    <span>View Partner</span>
                    <span>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-royal-700 to-royal-900 rounded-2xl p-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Looking for a Specific Brand or Specification?
            </h2>
            <p className="text-royal-200 mb-8 max-w-2xl mx-auto">
              We supply original materials with complete manufacturer test reports and technical support.
            </p>
            <a
              href="https://wa.me/919371755337?text=Hello%20Swaati%20Enterprises%2C%20I%20would%20like%20to%20get%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-royal-700 px-8 py-4 rounded-lg font-semibold hover:bg-royal-50 transition-all inline-block shadow-lg"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
