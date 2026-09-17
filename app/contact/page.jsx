import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us - Swaati Enterprises',
  description:
    'Get in touch with Swaati Enterprises for certified construction chemicals, waterproofing solutions, technical site consultations, and material quotations in Pune and Western Maharashtra.',
};

export default function ContactPage() {
  return (
    <>
      {/* Contact Page Header */}
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
            <span className="text-white">Contact</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>

          <p className="text-xl text-royal-200 max-w-3xl">
            Have a project requirement or need technical assistance? Our team is ready to help you with the right construction chemical solutions.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <span className="text-royal-600 font-semibold text-xs tracking-wider uppercase">
                Get In Touch
              </span>
              <h2 className="text-2xl font-bold text-slate-800 mt-1 mb-6">
                Direct Contact
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-royal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" className="w-6 h-6 text-royal-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Office Address</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Office No. 2, Building No. D,<br />
                      Shraddha Garden, Gawade Park,<br />
                      Opp Tata Motors, Chinchwad,<br />
                      Pune – 411033
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-royal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" className="w-6 h-6 text-royal-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Call Us</h4>
                    <p className="text-slate-600 text-sm">
                      <a href="tel:+919370011133" className="hover:text-royal-600 transition-colors font-medium">
                        +91 93700 11133
                      </a>
                    </p>
                    <p className="text-slate-600 text-sm">
                      <a href="tel:+918380017333" className="hover:text-royal-600 transition-colors font-medium">
                        +91 83800 17333
                      </a>
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" className="w-6 h-6 text-emerald-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">WhatsApp</h4>
                    <p className="text-slate-600 text-sm">
                      <a
                        href="https://wa.me/919371755337?text=Hello%20Swaati%20Enterprises%2C%20I%20would%20like%20to%20consult%20about%20a%20project."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:text-emerald-700 font-semibold inline-flex items-center gap-1"
                      >
                        <span>Chat on +91 93717 55337</span>
                        <span>→</span>
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-royal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" className="w-6 h-6 text-royal-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Email</h4>
                    <p className="text-slate-600 text-sm">
                      <a href="mailto:swaatienterprises@gmail.com" className="hover:text-royal-600 transition-colors font-medium">
                        swaatienterprises@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-royal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" className="w-6 h-6 text-royal-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Business Hours</h4>
                    <p className="text-slate-600 text-sm">Monday – Saturday</p>
                    <p className="text-slate-500 text-xs">9:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact / Enquiry Form */}
            <div className="lg:col-span-2">
              <div className="bg-slate-50 rounded-2xl p-8 lg:p-10 border border-slate-200 shadow-sm">
                <span className="text-royal-600 font-semibold text-xs tracking-wider uppercase">
                  Online Enquiry
                </span>
                <h2 className="text-2xl font-bold text-slate-800 mt-1 mb-2">
                  Send Project Requirement
                </h2>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  Fill in your details below and our technical engineers will contact you with product specifications and price quotations.
                </p>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
