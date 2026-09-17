import Link from 'next/link';

export const metadata = {
  title: 'About - Swaati Enterprises',
  description: 'Learn about our journey, values, and commitment to delivering quality construction chemical solutions.',
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="hero-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-3xl">
            <span className="text-royal-300 font-semibold text-sm tracking-wider uppercase">About Us</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
              Building Reliable Construction Solutions
            </h1>
            <p className="text-xl text-royal-200">
              Learn about our journey, values, and commitment to delivering quality construction chemical solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                About Swaati Enterprises
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Swaati Enterprises is a trusted construction solutions provider based in Chinchwad, Pune. We specialize in construction chemicals, structural repair solutions and engineering services that support modern building and infrastructure projects.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our expertise covers demolition work, waterproofing systems, epoxy flooring, in-situ FRP sections, concrete core cutting and chemical anchoring solutions. We focus on delivering solutions that improve structural durability, efficiency and long term performance of construction projects.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                At Swaati Enterprises we believe in delivering more than just products and services. Our goal is to add value through reliable materials, practical expertise and consistent technical support for builders, contractors and engineers.
              </p>
            </div>

            {/* Image */}
            <div className="h-full">
              <img
                src="/images/about-construction.webp"
                alt="Construction chemical solutions"
                className="rounded-2xl shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border-t-4 border-royal-600 shadow-sm">
              <div className="w-14 h-14 bg-royal-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-royal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To provide reliable construction chemical solutions that support the evolving needs of the construction industry through quality products, technical understanding and dependable service.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border-t-4 border-royal-600 shadow-sm">
              <div className="w-14 h-14 bg-royal-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-royal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To become a trusted partner for builders, contractors and industries by delivering practical construction solutions that improve the strength and durability of modern infrastructure.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border-t-4 border-royal-600 shadow-sm">
              <div className="w-14 h-14 bg-royal-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-royal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Our Values</h3>
              <p className="text-slate-600 leading-relaxed">
                Integrity, quality and commitment guide the way we work. We believe in building long term relationships with clients by delivering dependable products, honest guidance and consistent service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Founder Image */}
            <div>
              <img
                src="/images/swaati_enterprises_founder_shailendra-patil.webp"
                alt="Founder Shailendra Patil"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>

            {/* Founder Content */}
            <div>
              <span className="text-royal-600 font-semibold text-sm uppercase">Founder</span>
              <h2 className="text-3xl font-bold text-slate-800 mt-2 mb-6">
                Shailendra Patil
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Mr. Shailendra Patil, Founder and CEO of Swaati Enterprises, brings more than three decades of experience in the construction chemicals industry. His career began with STP Ltd where he worked as Area Sales Manager from 1992 to 1998.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                He later joined Sika India Pvt Ltd as Territory Manager for West India from 1999 to 2006. During this time he gained extensive experience in construction chemicals, technical applications and large infrastructure projects.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                In 2006 he founded Swaati Enterprises with a clear vision to provide reliable construction chemical solutions backed by strong technical expertise and service.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Today the company serves more than 5000 clients and works with over 15 leading construction chemical brands. His experience, practical knowledge and commitment to quality continue to guide the growth of Swaati Enterprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Why We Stand Out</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our strengths lie in our experience, expertise, and commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Years of Experience */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-royal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-royal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Years of Experience</h3>
              <p className="text-slate-600 text-sm">
                More than 25 years of experience in the construction chemicals industry supporting diverse projects.
              </p>
            </div>

            {/* Vendor Network */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-royal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-royal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Strong Vendor Network</h3>
              <p className="text-slate-600 text-sm">
                Partnerships with trusted manufacturers allow us to supply reliable construction materials for multiple applications.
              </p>
            </div>

            {/* Technical Team */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-royal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-royal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Skilled Technical Team</h3>
              <p className="text-slate-600 text-sm">
                Our team understands construction challenges and helps clients choose the right materials and solutions.
              </p>
            </div>

            {/* Wide Service Reach */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-royal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-royal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Wide Service Reach</h3>
              <p className="text-slate-600 text-sm">
                We support projects across multiple regions through our strong supply and distribution network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-royal-700 to-royal-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Ready to Work With Us
          </h2>
          <p className="text-royal-200 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss your project requirements and explore the right construction chemical solutions.
          </p>
          <a
            href="https://wa.me/919371755337?text=Hello%20Swaati%20Enterprises%2C%20I%20would%20like%20to%20get%20a%20quote."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-royal-700 px-8 py-4 rounded-lg font-semibold hover:bg-royal-50 transition-all inline-block"
          >
            Get a Quote
          </a>
        </div>
      </section>
    </>
  );
}
