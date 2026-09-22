import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-royal-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-16">
          {/* Company Info */}
          <div>
            <img src="/images/se-full-white-logo.webp" alt="Swaati Enterprises Logo" className="h-7 sm:h-8 mb-4 w-auto max-w-full" />
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Trusted construction chemical solutions for modern building projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="grid grid-cols-2 gap-x-6 text-xs sm:text-sm">
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-slate-300 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-slate-300 hover:text-white transition-colors">
                    Products
                  </Link>
                </li>
              </ul>
              <ul className="space-y-3">
                <li>
                  <Link href="/partners" className="text-slate-300 hover:text-white transition-colors">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-slate-300 hover:text-white transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <ul className="space-y-4 text-xs sm:text-sm text-slate-300">
              <li className="leading-relaxed">
                📍 Office No. 2, Building No. D,<br />
                Shraddha Garden, Gawade Park,<br />
                Opp Tata Motors, Chinchwad<br />
                Pune – 411033
              </li>
              <li className="space-y-1">
                <div>📞 <a href="tel:+919370011133" className="hover:text-white transition-colors">+91 93700 11133</a></div>
                <div>📞 <a href="tel:+918380017333" className="hover:text-white transition-colors">+91 83800 17333</a></div>
                <div>📞 <a href="tel:+919130355119" className="hover:text-white transition-colors">+91 91303 55119</a></div>
              </li>
              <li className="break-words max-w-full">
                ✉ <a href="mailto:swaatienterprises@gmail.com" className="hover:text-white transition-colors break-all sm:break-normal">
                  swaatienterprises@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-slate-400 text-xs sm:text-sm">
            © 2026 Swaati Enterprises. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

