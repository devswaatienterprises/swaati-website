import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Get Quote - Swaati Enterprises',
  description:
    'Request commercial quotations, material specifications, and technical assistance for construction chemicals and engineering solutions from Swaati Enterprises.',
};

export default function QuotePage() {
  return (
    <>
      {/* Header */}
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
            <span className="text-white">Get Quote</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Request a Quotation
          </h1>

          <p className="text-xl text-royal-200 max-w-3xl">
            Have a project requirement or need technical assistance? Our team is ready to help you with the right construction chemical solutions.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                Direct Contact
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-royal-100 rounded-lg flex items-center justify-center flex-shrink-0">
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
                      Office No. 2, Building No. D<br />
                      Shraddha Garden, Gawade Park<br />
                      Opp Tata Motors, Chinchwad<br />
                      Pune – 411033
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-royal-100 rounded-lg flex items-center justify-center flex-shrink-0">
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
                    <h4 className="font-semibold text-slate-800 mb-1">Phone</h4>
                    <p className="text-slate-600 text-sm">
                      <a href="tel:+919370011133" className="hover:text-royal-600">+91 93700 11133</a>
                    </p>
                    <p className="text-slate-600 text-sm">
                      <a href="tel:+918380017333" className="hover:text-royal-600">+91 83800 17333</a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-royal-100 rounded-lg flex items-center justify-center flex-shrink-0">
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
                      <a href="mailto:swaatienterprises@gmail.com" className="hover:text-royal-600">
                        swaatienterprises@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-royal-100 rounded-lg flex items-center justify-center flex-shrink-0">
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

            {/* Quotation Form */}
            <div className="lg:col-span-2">
              <div className="bg-slate-50 rounded-2xl p-8 lg:p-10 border border-slate-200 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">
                  Send Project Requirement
                </h2>
                <p className="text-slate-500 text-sm mb-6">
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
