import React from 'react';
import Section from '../../layouts/Section';
import Text from '../../primitives/Text';
import CourseCard from '../../compositions/CourseCard';

const colMap = {
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-2 lg:grid-cols-3',
  4: 'md:grid-cols-2 lg:grid-cols-4',
};

const CourseGrid = ({ title, courses = [], columns = 4, onCardClick, onEnroll }) => {
  if (!courses.length) return null;

  const mapped = courses.map((c) => ({
    ...c,
    image: c.image || c.thumbnail,
    originalPrice: c.originalPrice || c.original_price,
  }));

  return (
    <Section className="py-12">
      {title && (
        <Text variant="heading-md" className="text-[#292940] mb-8">
          {title}
        </Text>
      )}
      <div className={`grid grid-cols-1 ${colMap[columns] || colMap[4]} gap-6`}>
        {mapped.map((course) => (
          <CourseCard key={course.id} course={course} onClick={onCardClick} onEnroll={onEnroll} />
        ))}
      </div>
    </Section>
  );
};

export default CourseGrid;
