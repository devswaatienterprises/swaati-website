export default function TopBar() {
  return (
    <div className="bg-royal-900 text-white py-2 text-sm hidden md:block">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Contact */}
        <div className="flex items-center gap-6">
          {/* Phone */}
          <span className="flex items-center gap-2">
            <svg width="16" height="16" className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <a href="tel:+919370011133" className="hover:text-royal-300 transition-colors">
              +91 93700 11133
            </a>
          </span>

          {/* Email */}
          <span className="flex items-center gap-2">
            <svg width="16" height="16" className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <a href="mailto:swaatienterprises@gmail.com" className="hover:text-royal-300 transition-colors">
              swaatienterprises@gmail.com
            </a>
          </span>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <span className="text-royal-300">
            Mon - Sat: 9:00 AM - 6:00 PM
          </span>

          {/* Social Icons */}
          <div className="flex gap-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/swaatienterprises"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-royal-300 hover:scale-110 transition-transform"
            >
              <svg width="16" height="16" className="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24">
                <path d="M22 12.073C22 6.504 17.523 2 12 2S2 6.504 2 12.073c0 5.019 3.657 9.177 8.438 9.927v-7.025H7.898v-2.902h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.774-1.63 1.566v1.88h2.773l-.443 2.902h-2.33V22c4.78-.75 8.437-4.908 8.437-9.927z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/swaatienterprises/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-royal-300 hover:scale-110 transition-transform"
            >
              <svg width="16" height="16" className="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24">
                <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5c3.176 0 5.75-2.574 5.75-5.75v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5C18.216 4 20 5.784 20 7.75v8.5C20 18.216 18.216 20 16.25 20h-8.5C5.784 20 4 18.216 4 16.25v-8.5C4 5.784 5.784 4 7.75 4zm9.25 1.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/swaati-enterprises/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-royal-300 hover:scale-110 transition-transform"
            >
              <svg width="16" height="16" className="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24">
                <path d="M20.447 20.452H16.89v-5.569c0-1.327-.025-3.037-1.849-3.037-1.849 0-2.131 1.445-2.131 2.939v5.667H9.356V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.37-1.849 3.604 0 4.269 2.372 4.269 5.456v6.284zM5.337 7.433a1.984 1.984 0 110-3.967 1.984 1.984 0 010 3.967zM7.119 20.452H3.556V9h3.563v11.452z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
