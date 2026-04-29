import { NavigationItem } from '@/lib/types';

const navigationItems: NavigationItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  return (
    <nav>
      <ul className="flex space-x-6">
        {navigationItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}