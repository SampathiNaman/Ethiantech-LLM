import React, { useState } from 'react';
import Button from '../../primitives/Button';
import Text from '../../primitives/Text';
import Avatar from '../../primitives/Avatar';

const Navbar = ({ logo, links = [], cta, profile, onNavigate, onCtaClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (href) => {
    setMenuOpen(false);
    onNavigate?.(href);
  };

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px]">
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => handleLinkClick(logo?.href || '/')}
          >
            {logo?.src ? (
              <img src={logo.src} alt={logo.alt || 'Logo'} className="h-10" />
            ) : (
              <Text variant="display-sm" className="text-[#292940] font-semibold">EthianTech LLM</Text>
            )}
          </div>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`text-sm font-medium transition-colors hover:text-[#D62A91] bg-transparent border-none cursor-pointer ${
                  link.active ? 'text-[#D62A91]' : 'text-gray-600'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            {profile ? (
              <Avatar src={profile.avatar} name={profile.name} size={32} />
            ) : cta ? (
              <Button variant="primary" size="sm" onClick={() => onCtaClick ? onCtaClick(cta.href) : handleLinkClick(cta.href)}>
                {cta.label}
              </Button>
            ) : null}
          </div>

          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-6">
          <div className="flex flex-col gap-4 pt-4">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`text-base font-medium text-left bg-transparent border-none cursor-pointer ${link.active ? 'text-[#D62A91]' : 'text-gray-600'}`}
              >
                {link.label}
              </button>
            ))}
            {cta && (
              <Button variant="primary" size="md" className="w-full" onClick={() => onCtaClick ? onCtaClick(cta.href) : handleLinkClick(cta.href)}>
                {cta.label}
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
