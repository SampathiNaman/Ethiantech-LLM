import React from 'react';
import Section from '../../layouts/Section';
import Text from '../../primitives/Text';
import Card from '../../primitives/Card';
import Avatar from '../../primitives/Avatar';
import Rating from '../../primitives/Rating';

const InstructorShowcase = ({ title, instructors = [] }) => {
  if (!instructors.length) return null;
  return (
    <Section className="py-12">
      {title && (
        <Text variant="heading-md" className="text-[#292940] mb-8">
          {title}
        </Text>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {instructors.map((inst) => (
          <Card key={inst.id} variant="default" className="p-6 text-center">
            <div className="flex justify-center mb-4">
              <Avatar src={inst.avatar} name={inst.name} size={56} />
            </div>
            <Text variant="heading-sm" className="text-[#292940]">{inst.name}</Text>
            <Text variant="body-sm" className="text-gray-500 mt-1">{inst.role}</Text>
            <div className="flex justify-center mt-3">
              <Rating value={inst.rating} size={16} />
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Text variant="meta" className="text-gray-400">
                {inst.courseCount} courses · {inst.specialty}
              </Text>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default InstructorShowcase;
