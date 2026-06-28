import React from 'react';
import Section from '../../layouts/Section';
import Text from '../../primitives/Text';

const statColors = ['#F1511B', '#80CC28', '#00ADEF', '#FBBC09'];

const LogoCloud = ({ title, logos = [], stats = [] }) => {
  return (
    <Section className="py-12 border-t border-gray-100">
      {title && (
        <Text variant="body-sm" className="text-gray-400 text-center mb-8 uppercase tracking-wider font-semibold">
          {title}
        </Text>
      )}
      <div className="flex flex-wrap items-center justify-center gap-12 mb-12">
        {logos.map((logo) => (
          <img key={logo.alt} src={logo.src} alt={logo.alt} className="h-8 opacity-40 hover:opacity-70 transition-opacity" />
        ))}
      </div>
      {stats.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center">
              <div
                className="w-6 h-6 rounded mx-auto mb-2"
                style={{ backgroundColor: statColors[i % statColors.length] }}
              />
              <Text variant="heading-lg" className="text-[#292940]">{stat.value}</Text>
              <Text variant="body-sm" className="text-gray-500">{stat.label}</Text>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
};

export default LogoCloud;
