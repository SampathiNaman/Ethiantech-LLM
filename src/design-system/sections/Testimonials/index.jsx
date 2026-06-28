import React from 'react';
import Section from '../../layouts/Section';
import Text from '../../primitives/Text';
import Card from '../../primitives/Card';
import Avatar from '../../primitives/Avatar';
import Rating from '../../primitives/Rating';

const Testimonials = ({ title, testimonials = [] }) => {
  if (!testimonials.length) return null;
  return (
    <Section className="py-12">
      {title && (
        <Text variant="heading-md" className="text-[#292940] mb-8 text-center">
          {title}
        </Text>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <Card key={t.id} variant="bordered" className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Avatar src={t.avatar} name={t.name} size={40} />
              <div>
                <Text variant="body-sm" className="text-[#292940] font-semibold">{t.name}</Text>
                <Text variant="meta" className="text-gray-400">{t.role}</Text>
              </div>
            </div>
            <Text variant="body-md" className="text-gray-600 italic">"{t.quote}"</Text>
            <div className="mt-4">
              <Rating value={t.rating} size={14} />
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
