import React from 'react';
import Card from '../../primitives/Card/index.jsx';
import Image from '../../primitives/Image/index.jsx';
import Badge from '../../primitives/Badge/index.jsx';
import Text from '../../primitives/Text/index.jsx';
import Rating from '../../primitives/Rating/index.jsx';
import Button from '../../primitives/Button/index.jsx';

export default function CourseCard({
  course = {},
  variant = 'default',
  onEnroll,
  onClick,
  className = '',
}) {
  const {
    title = '',
    instructor = '',
    image,
    badge,
    rating = 0,
    price = 0,
    originalPrice,
    lessons = 0,
    level = '',
  } = course;

  const handleClick = () => {
    if (onClick && !onEnroll) onClick(course.id || course._id);
  };

  const handleEnroll = (e) => {
    e.stopPropagation();
    if (onEnroll) onEnroll(course.id || course._id);
  };

  return (
    <div onClick={handleClick} className={onClick ? 'cursor-pointer' : ''}>
      <Card variant={variant} className={className}>
        <Image src={image} alt={title} aspectRatio="4:3" />
        <Card.Body>
          {badge && <Badge variant="primary" size="sm" className="mb-2">{badge}</Badge>}
          <Text variant="cardTitle" className="mb-1">{title}</Text>
          <Text variant="meta" className="text-[#656565] mb-2">
            {instructor} · {lessons} lessons{level ? ` · ${level}` : ''}
          </Text>
          <Rating value={rating} showText />
          <div className="flex items-center justify-between mt-3">
            <div>
              <span className="font-outfit font-semibold text-lg text-[#404040]">${price}</span>
              {originalPrice && (
                <span className="font-inter text-sm text-[#A9A9A9] line-through ml-2">${originalPrice}</span>
              )}
            </div>
            <Button variant="primary" size="sm" onClick={handleEnroll}>
              Enroll Now
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

CourseCard.displayName = 'CourseCard';
