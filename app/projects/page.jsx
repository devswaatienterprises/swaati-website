import Link from 'next/link';
import ProjectShowcase from '@/components/ProjectShowcase';

export const metadata = {
  title: 'Selected Projects - Swaati Enterprises',
  description:
    'Explore completed construction chemical and engineering projects supplied and supported by Swaati Enterprises across Pune and Western Maharashtra.',
};

export default function ProjectsPage() {
  return (
    <>
      {/* Projects Page Header */}
      <section className="hero-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="flex items-center gap-2 text-royal-300 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">Projects</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Project Portfolio
          </h1>

          <p className="text-xl text-royal-200 max-w-3xl">
            Discover some of the projects where our construction chemical solutions have helped deliver durable, high-performance results across infrastructure, industrial and commercial developments.
          </p>
        </div>
      </section>

      {/* Main Project Showcase Section */}
      <section className="py-16 lg:py-24 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <ProjectShowcase />
        </div>
      </section>

      {/* Technical Consultation CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-royal-700 to-royal-900 rounded-2xl p-10 lg:p-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Planning a Similar Construction or Repair Project?
            </h2>
            <p className="text-royal-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Our technical team provides material specification recommendations, site evaluation, and authorized supply support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/919371755337?text=Hello%20Swaati%20Enterprises%2C%20I%20would%20like%20to%20consult%20about%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-royal-700 px-8 py-4 rounded-lg font-semibold hover:bg-royal-50 transition-all inline-block shadow-lg"
              >
                Consult on WhatsApp
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
