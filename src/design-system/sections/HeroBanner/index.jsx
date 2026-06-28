import React from 'react';
import Section from '../../layouts/Section';
import Text from '../../primitives/Text';
import SearchBar from '../../compositions/SearchBar';

const HeroBanner = ({ headline, subtitle, search, onSearch }) => {
  return (
    <Section className="py-16 md:py-24 lg:py-32">
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <Text variant="display-lg" className="text-[#292940]">
          {headline || 'Learn Without Limits'}
        </Text>
        {subtitle && (
          <Text variant="body-lg" className="text-gray-500">
            {subtitle}
          </Text>
        )}
        {search && (
          <div className="max-w-xl mx-auto pt-4">
            <SearchBar
              placeholder={search.placeholder}
              buttonLabel={search.buttonLabel}
              onSearch={onSearch}
            />
          </div>
        )}
      </div>
    </Section>
  );
};

export default HeroBanner;
