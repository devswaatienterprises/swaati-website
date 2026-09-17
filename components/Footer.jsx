import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-royal-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Company Info */}
          <div>
            <img src="/images/se-full-white-logo.webp" alt="Swaati Enterprises Logo" className="h-8 mb-4" />
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Trusted construction chemical solutions for modern building projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="grid grid-cols-2 gap-x-6 text-sm">
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
            <ul className="space-y-4 text-sm text-slate-300">
              <li>
                📍 Office No. 2, Building No. D,<br />
                Shraddha Garden, Gawade Park,<br />
                Opp Tata Motors, Chinchwad<br />
                Pune – 411033
              </li>
              <li>
                📞 <a href="tel:+919370011133" className="hover:text-white transition-colors">+91 93700 11133</a><br />
                📞 <a href="tel:+918380017333" className="hover:text-white transition-colors">+91 83800 17333</a>
              </li>
              <li>
                ✉ <a href="mailto:swaatienterprises@gmail.com" className="hover:text-white transition-colors">
                  swaatienterprises@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2026 Swaati Enterprises. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

