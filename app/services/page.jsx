import Link from 'next/link';

export const metadata = {
  title: 'Services - Swaati Enterprises',
  description: 'Our experienced technical team provides professional application services including waterproofing systems, epoxy flooring installation, structural repair and industrial maintenance solutions.',
};

export default function ServicesPage() {
  const checkIcon = (
    <svg className="w-5 h-5 text-royal-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <>
      {/* Header */}
      <section className="hero-gradient py-24 relative overflow-hidden">
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
            <span className="text-white">Services</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Professional Application Services
          </h1>
          <p className="text-xl text-royal-200 max-w-3xl">
            Our experienced technical team provides professional application services including waterproofing systems, epoxy flooring installation, structural repair and industrial maintenance solutions.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Waterproofing */}
            <div className="bg-slate-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Waterproofing</h3>
              <p className="text-slate-600 mb-6">
                We provide professional waterproofing solutions that protect structures from water leakage and moisture damage. Our team evaluates site conditions and applies the most suitable waterproofing system for long lasting protection.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-700">{checkIcon}Basement waterproofing</li>
                <li className="flex items-center gap-3 text-slate-700">{checkIcon}Terrace and roof waterproofing</li>
                <li className="flex items-center gap-3 text-slate-700">{checkIcon}Water tank waterproofing</li>
                <li className="flex items-center gap-3 text-slate-700">{checkIcon}Bathrooms and wet areas</li>
                <li className="flex items-center gap-3 text-slate-700">{checkIcon}External wall protection</li>
              </ul>
            </div>

            {/* Decorative Epoxy / PU Flooring */}
            <div className="bg-slate-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Decorative Epoxy / PU Flooring</h3>
              <p className="text-slate-600 mb-6">
                Decorative epoxy and PU flooring systems create seamless, durable and easy to maintain surfaces for industrial and commercial spaces. These flooring systems improve durability while giving a clean and professional finish.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-700">{checkIcon}Industrial factory floors</li>
                <li className="flex items-center gap-3 text-slate-700">{checkIcon}Warehouses and storage areas</li>
                <li className="flex items-center gap-3 text-slate-700">{checkIcon}Commercial buildings</li>
                <li className="flex items-center gap-3 text-slate-700">{checkIcon}Parking areas</li>
                <li className="flex items-center gap-3 text-slate-700">{checkIcon}Laboratories and hospitals</li>
              </ul>
            </div>

            {/* Consultancy */}
            <div className="bg-slate-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Consultancy</h3>
              <p className="text-slate-600 mb-6">
                Our technical consultancy helps clients choose the right construction chemicals and repair solutions for their projects. We study the site condition, understand the problem and recommend practical and cost effective solutions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-700">{checkIcon}Site inspection and evaluation</li>
                <li className="flex items-center gap-3 text-slate-700">{checkIcon}Material selection guidance</li>
                <li className="flex items-center gap-3 text-slate-700">{checkIcon}Technical recommendations</li>
                <li className="flex items-center gap-3 text-slate-700">{checkIcon}Application planning</li>
                <li className="flex items-center gap-3 text-slate-700">{checkIcon}Problem diagnosis and solution support</li>
              </ul>
            </div>

            {/* Painting & Protective Coating */}
            <div className="bg-slate-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Painting & Protective Coating</h3>
              <p className="text-slate-600 mb-6">
                Protective coating systems are applied to protect concrete and steel surfaces from weather exposure, chemicals and corrosion. These coatings improve durability and maintain the appearance of structures.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-700">{checkIcon}Industrial structure protection</li>
                <li className="flex items-center gap-3 text-slate-700">{checkIcon}Steel and concrete coatings</li>
                <li className="flex items-center gap-3 text-slate-700">{checkIcon}External building coatings</li>
                <li className="flex items-center gap-3 text-slate-700">{checkIcon}Chemical resistant coatings</li>
                <li className="flex items-center gap-3 text-slate-700">{checkIcon}Maintenance and refurbishment works</li>
              </ul>
            </div>

            {/* Structural Strengthening */}
            <div className="bg-slate-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Structural Strengthening</h3>
              <p className="text-slate-600 mb-6">
                We offer structural strengthening services to improve the safety and durability of existing structures. Using advanced repair materials and techniques, damaged or weak structural members can be restored and reinforced.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-700">{checkIcon}Concrete repair and restoration</li>
                <li className="flex items-center gap-3 text-slate-700">{checkIcon}Crack injection treatment</li>
                <li className="flex items-center gap-3 text-slate-700">{checkIcon}Carbon fiber reinforcement</li>
                <li className="flex items-center gap-3 text-slate-700">{checkIcon}Structural jacketing</li>
                <li className="flex items-center gap-3 text-slate-700">{checkIcon}Corrosion protection treatment</li>
              </ul>
            </div>

            {/* Supply of Construction Chemicals */}
            <div className="bg-slate-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Supply of Construction Chemicals</h3>
              <p className="text-slate-600 mb-6">
                Swaati Enterprises supplies high quality construction chemicals from trusted manufacturers. Our product range supports waterproofing, structural repair, flooring systems and industrial protection.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-700">{checkIcon}Waterproofing systems</li>
                <li className="flex items-center gap-3 text-slate-700">{checkIcon}Concrete admixtures</li>
                <li className="flex items-center gap-3 text-slate-700">{checkIcon}Epoxy flooring materials</li>
                <li className="flex items-center gap-3 text-slate-700">{checkIcon}Structural repair materials</li>
                <li className="flex items-center gap-3 text-slate-700">{checkIcon}Grouts and anchoring systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Process</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A systematic approach ensuring quality outcomes for every project.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 text-center">
            <div className="relative process-step">
              <div className="w-16 h-16 bg-royal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">1</div>
              Inspection
            </div>

            <div className="relative process-step">
              <div className="w-16 h-16 bg-royal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">2</div>
              Recommendation
            </div>

            <div className="relative process-step">
              <div className="w-16 h-16 bg-royal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">3</div>
              Application
            </div>

            <div className="relative process-step">
              <div className="w-16 h-16 bg-royal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">4</div>
              Quality Check
            </div>

            <div className="relative process-step">
              <div className="w-16 h-16 bg-royal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">5</div>
              Completion
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-royal-700 to-royal-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Need Professional Application Services?
          </h2>
          <p className="text-royal-200 mb-8 max-w-2xl mx-auto">
            Our trained applicators ensure proper installation for optimal performance.
          </p>
          <Link
            href="/contact"
            className="bg-white text-royal-700 px-8 py-4 rounded-lg font-semibold hover:bg-royal-50 transition-all inline-block"
          >
            Request Site Visit
          </Link>
        </div>
      </section>
    </>
  );
}
