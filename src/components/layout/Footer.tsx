import Link from 'next/link';

const socialLinks = [
  { platform: 'GitHub', url: 'https://github.com', icon: 'GH' },
  { platform: 'LinkedIn', url: 'https://linkedin.com', icon: 'LI' },
  { platform: 'Twitter', url: 'https://twitter.com', icon: 'TW' },
];

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Copyright */}
          <div>
            <h3 className="text-xl font-bold mb-4">Emmanuel Malvar</h3>
            <p className="text-gray-400 mb-4">
              Building beautiful web experiences with modern technologies.
            </p>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Emmanuel Malvar. All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 dark:bg-gray-900 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label={social.platform}
                >
                  <span className="text-sm font-bold">{social.icon}</span>
                </a>
              ))}
            </div>
            <a
              href="mailto:eueleuelguanzon@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              eueleuelguanzon@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}