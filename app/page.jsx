import Link from 'next/link';
import ProductSearch from '@/components/ProductSearch';

export const metadata = {
  title: 'Swaati Enterprises - Construction Chemical & Engineering Solutions',
  description: 'Trusted partner for Waterproofing Systems, Concrete Admixtures, Epoxy Flooring, Structural Repair and Industrial Solutions.',
};

export default function HomePage() {
  const solutions = [
    {
      name: 'Waterproofing Systems',
      link: '/products/waterproofing',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      ),
      desc: 'Waterproofing solutions designed to prevent leakage and moisture damage in buildings. Used for terraces, basements, water tanks, bathrooms, podium slabs and foundations.',
    },
    {
      name: 'Concrete Admixtures',
      link: '/products/concrete-admixtures',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      ),
      desc: 'Admixtures that improve concrete workability, strength and long-term durability. Widely used in ready-mix plants, commercial buildings and infrastructure projects.',
    },
    {
      name: 'Flooring & Surface Hardening',
      link: '/products/flooring-and-surface-hardening',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        />
      ),
      desc: 'Seamless, high-strength floor hardeners and leveling compounds for industrial and commercial environments.',
    },
    {
      name: 'Structural Repair',
      link: '/products/structural-repair',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      ),
      desc: 'Repair solutions for damaged concrete structures. Includes repair mortars, bonding agents, micro-concretes and strengthening technologies.',
    },
    {
      name: 'Grouts & Anchors',
      link: '/products/grouts',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
        />
      ),
      desc: 'Precision grouting and anchoring products used for machinery foundations and structural fixing with high load transfer.',
    },
    {
      name: 'Geotextiles & Reinforcement',
      link: '/products/geotextiles',
      icon: (
        <>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </>
      ),
      desc: 'Non-woven geotextiles and synthetic micro-fibers engineered for filtration, drainage, separation, and crack reduction.',
    },
  ];

  const whyChooseUs = [
    {
      title: 'Technical Expertise',
      desc: 'Our team helps clients choose the right materials and application methods for their specific project needs.',
    },
    {
      title: 'Proven Products',
      desc: 'We supply certified products that are widely used across construction and infrastructure projects.',
    },
    {
      title: 'Site Support',
      desc: 'Technical guidance helps ensure proper application and long-term performance.',
    },
    {
      title: 'Reliable Supply',
      desc: 'Strong vendor network ensures consistent product availability.',
    },
    {
      title: 'Complete Solutions',
      desc: 'From waterproofing to structural repair, we provide a full range of construction chemical solutions.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden">
        {/* Background Video Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover object-center opacity-25 scale-105"
          >
            <source src="/images/swaati_enterprises_video-1.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Matching About Us Royal Blue Gradient Overlay */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-[#0a1142]/85 via-[#1e2a8f]/75 to-[#152070]/85 pointer-events-none"></div>

        {/* Ambient Glow matching About Us Hero */}
        <div className="absolute inset-0 z-[2] pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 opacity-15"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1e2a8f] rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 opacity-25"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6" id="hero-headline">
                Construction <br />
                Chemicals &amp; <br />
                Engineering <br />
                Solutions <br />
                You Can Rely On!
              </h1>
              <p className="text-xl text-royal-200 mb-8 leading-relaxed" id="hero-subtext">
                We supply proven solutions for waterproofing, concrete performance, epoxy flooring, structural repair and industrial protection, helping builders and contractors deliver stronger, longer-lasting structures.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="bg-white text-royal-700 px-8 py-4 rounded-lg font-semibold hover:bg-royal-50 transition-all transform hover:scale-105 shadow-lg"
                >
                  Explore Products
                </Link>
                <a
                  href="https://wa.me/919371755337?text=Hello%20Swaati%20Enterprises%2C%20I%20would%20like%20to%20get%20a%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-royal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-royal-700 transition-all transform hover:scale-105 shadow-lg inline-block"
                >
                  Request Quotation
                </a>
              </div>
            </div>
            <div className="hidden lg:block animate-fade-in delay-200">
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-xl p-6 text-center">
                      <div className="text-4xl font-bold text-white mb-2">20+</div>
                      <div className="text-royal-200 text-sm">Years Experience</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-6 text-center">
                      <div className="text-4xl font-bold text-white mb-2">6500+</div>
                      <div className="text-royal-200 text-sm">Projects Completed</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-6 text-center">
                      <div className="text-4xl font-bold text-white mb-2">240+</div>
                      <div className="text-royal-200 text-sm">Certified Products</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-6 text-center">
                      <div className="text-4xl font-bold text-white mb-2">50+</div>
                      <div className="text-royal-200 text-sm">Expert Engineers</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-royal-400/30 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Product Search & Quick Finder Section */}
      <section className="py-12 bg-white relative z-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 lg:p-10 shadow-sm text-center">
            <span className="text-royal-600 font-semibold text-xs tracking-wider uppercase">
              Quick Product Finder
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mt-2 mb-3">
              Find the Right Product
            </h2>
            <p className="text-slate-600 text-sm max-w-xl mx-auto mb-6 leading-relaxed">
              Search across 240+ construction chemicals, waterproofing solutions, grouts, and partner brands.
            </p>

            {/* Prominent Search Bar with Manufacturer & Category Filters */}
            <div className="max-w-2xl mx-auto mb-4 text-left">
              <ProductSearch
                placeholder="Search products..."
                showFilters={true}
                showDirectResults={true}
              />
            </div>

            {/* Quick Explore Tags & Direct Link */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-3 text-xs">
              <span className="text-slate-400 font-medium">Quick categories:</span>
              <Link
                href="/products?category=Waterproofing"
                className="bg-white hover:bg-royal-50 text-slate-700 hover:text-royal-700 px-3 py-1.5 rounded-lg border border-slate-200 font-medium transition-colors"
              >
                Waterproofing
              </Link>
              <Link
                href="/products?company=Penetron"
                className="bg-white hover:bg-royal-50 text-slate-700 hover:text-royal-700 px-3 py-1.5 rounded-lg border border-slate-200 font-medium transition-colors"
              >
                Penetron
              </Link>
              <Link
                href="/products?company=Fosroc"
                className="bg-white hover:bg-royal-50 text-slate-700 hover:text-royal-700 px-3 py-1.5 rounded-lg border border-slate-200 font-medium transition-colors"
              >
                Fosroc
              </Link>
              <Link
                href="/products?category=Structural%20Repair"
                className="bg-white hover:bg-royal-50 text-slate-700 hover:text-royal-700 px-3 py-1.5 rounded-lg border border-slate-200 font-medium transition-colors"
              >
                Structural Repair
              </Link>
              <Link
                href="/products?category=Grouts"
                className="bg-white hover:bg-royal-50 text-slate-700 hover:text-royal-700 px-3 py-1.5 rounded-lg border border-slate-200 font-medium transition-colors"
              >
                Grouts
              </Link>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200/60 flex items-center justify-center">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-royal-600 hover:text-royal-800 font-semibold text-sm transition-colors"
              >
                <span>View Full Product Catalogue</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-royal-600 font-semibold text-sm tracking-wider uppercase">
                About Swaati Enterprises
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mt-3 mb-6">
                Practical Solutions for Real Construction Challenges
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Swaati Enterprises provides construction chemicals and engineering solutions trusted by contractors, builders and industrial clients. Our products are designed to solve everyday site challenges like water leakage, concrete durability, surface protection and structural repair.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                With strong industry experience and a reliable supply network, we help projects run smoothly by providing the right materials at the right time. Our team also supports clients with technical guidance so products are used correctly and deliver long-term performance.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-royal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-royal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Quality Assured</h4>
                    <p className="text-sm text-slate-500">Trusted Manufacturers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-royal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-royal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Fast &amp; Reliable Supply</h4>
                    <p className="text-sm text-slate-500">Quick Product Availability</p>
                  </div>
                </div>
              </div>
              <Link href="/about" className="btn-primary inline-flex items-center gap-2 text-white px-6 py-3 rounded-lg font-semibold">
                Learn More About Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/home-about.webp"
                  alt="Swaati Enterprises Construction Solutions"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-royal-600 text-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">20+</div>
                <div className="text-royal-200 text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-slate-50 geometric-pattern">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-royal-600 font-semibold text-sm tracking-wider uppercase">Our Solutions</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mt-3 mb-4">
              Construction Chemical Solutions for Every Stage of Building
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From foundation protection to industrial flooring, we provide materials that improve the strength, durability and lifespan of structures.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, idx) => (
              <Link
                key={idx}
                href={solution.link}
                className="card-hover bg-white rounded-xl p-8 border border-slate-200 group"
              >
                <div className="w-14 h-14 bg-royal-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-royal-600 transition-colors">
                  <svg className="w-7 h-7 text-royal-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {solution.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{solution.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{solution.desc}</p>
                <span className="inline-flex items-center gap-2 text-royal-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  View Products
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-royal-600 font-semibold text-sm tracking-wider uppercase">Why Choose Us</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mt-3 mb-8">
                A Reliable Partner for Builders and Contractors
              </h2>
              <div className="space-y-6">
                {whyChooseUs.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-royal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-royal-600 font-bold">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-royal-600 text-white p-8 rounded-xl">
                <div className="text-4xl font-bold mb-2">6500+</div>
                <div className="text-royal-200">Projects Delivered</div>
              </div>
              <div className="bg-slate-100 p-8 rounded-xl">
                <div className="text-4xl font-bold text-royal-600 mb-2">240+</div>
                <div className="text-slate-600">Certified Products</div>
              </div>
              <div className="bg-slate-100 p-8 rounded-xl">
                <div className="text-4xl font-bold text-royal-600 mb-2">20+</div>
                <div className="text-slate-600">Years Experience</div>
              </div>
              <div className="bg-royal-600 text-white p-8 rounded-xl">
                <div className="text-4xl font-bold mb-2">5000+</div>
                <div className="text-royal-200">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-royal-700 to-royal-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">Need Help Choosing the Right Product?</h2>
              <p className="text-royal-200">Our technical team can help you select the best solution for your project requirements.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+919370011133"
                className="bg-white text-royal-700 px-8 py-4 rounded-lg font-semibold hover:bg-royal-50 transition-all flex items-center gap-2"
              >
                <svg width="20" height="20" className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
              <a
                href="https://wa.me/919371755337?text=Hello%20Swaati%20Enterprises%2C%20I%20would%20like%20to%20get%20a%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-royal-700 transition-all flex items-center gap-2"
              >
                <svg width="20" height="20" className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
