import React from 'react';
import Container from '../../layouts/Container';
import Text from '../../primitives/Text';
import Button from '../../primitives/Button';
import Input from '../../primitives/Input';

const FooterL = ({ logo, columns = [], newsletter, copyright }) => {
  return (
    <footer className="w-full bg-[#292940] text-white">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            {logo?.src ? (
              <img src={logo.src} alt={logo.alt || 'Logo'} className="h-10" />
            ) : (
              <Text variant="display-sm" className="text-white font-semibold">EthianTech LLM</Text>
            )}
            <Text variant="body-sm" className="text-white/50">
              Empowering learners worldwide with cutting-edge technical education.
            </Text>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="space-y-3">
              <Text variant="body-sm" className="text-white font-semibold">{col.title}</Text>
              <div className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-white/65 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}

          {newsletter && (
            <div className="space-y-4">
              <Text variant="body-sm" className="text-white font-semibold">{newsletter.title || 'Subscribe'}</Text>
              <Text variant="body-sm" className="text-white/65 text-xs">{newsletter.description || 'Stay updated with latest news.'}</Text>
              <div className="flex gap-2">
                <div className="flex-1">
                  <Input
                    placeholder={newsletter.placeholder || 'Enter your email'}
                    className="bg-[#1F2937] border-none text-white text-sm"
                  />
                </div>
                <Button variant="primary" size="sm">{newsletter.buttonLabel || 'Subscribe'}</Button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 pt-6 border-t border-white/10">
          <Text variant="meta" className="text-white/50 text-center">
            {copyright || 'All rights reserved. Copyright @Edemy'}
          </Text>
        </div>
      </Container>
    </footer>
  );
};

export default FooterL;
