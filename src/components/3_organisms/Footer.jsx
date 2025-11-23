import Link from 'next/link';
import { globalContent } from '@/constants/globalData';

const Footer = () => {
  const { footer } = globalContent;

  return (
    <footer className="bg-subtle-gray-dark/20 text-text-light/70">
      <div className="container px-4 py-16 mx-auto">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <h3 className="text-2xl font-bold tracking-wider text-white font-manrope">{footer.personalInfo.name}</h3>
            <p className="mt-1">{footer.personalInfo.title}</p>
            <p className="mt-4 text-sm">{footer.personalInfo.tagline}</p>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-semibold tracking-wider text-white uppercase">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-white"
                    target={link.label === 'Resume' ? '_blank' : undefined}
                    rel={link.label === 'Resume' ? 'noopener noreferrer' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-semibold tracking-wider text-white uppercase">Connect</h4>
            <ul className="mt-4 space-y-2">
              {footer.connectLinks.map(({ href, label, Icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center transition-colors hover:text-white"
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="py-6 text-sm text-center border-t border-subtle-gray-dark">
        <div className="container px-4 mx-auto">
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;