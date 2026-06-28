import React from 'react';
import Card from '../../primitives/Card';
import Avatar from '../../primitives/Avatar';
import Text from '../../primitives/Text';
import Button from '../../primitives/Button';

const DiscussionCard = ({ title, replies = [], onViewAll }) => {
  return (
    <Card variant="bordered" className="p-6 border-[#D62A91]">
      {title && (
        <Text variant="heading-sm" className="text-[#292940] mb-4">{title}</Text>
      )}
      <div className="space-y-4">
        {replies.map((reply) => (
          <div key={reply.id} className="flex gap-3">
            <Avatar src={reply.avatar} name={reply.name} size={36} />
            <div>
              <Text variant="body-sm" className="text-[#292940] font-semibold">{reply.name}</Text>
              <Text variant="body-sm" className="text-gray-500 mt-1">{reply.text}</Text>
            </div>
          </div>
        ))}
      </div>
      {onViewAll && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <Button variant="ghost" size="sm" onClick={onViewAll}>
            View All
          </Button>
        </div>
      )}
    </Card>
  );
};

export default DiscussionCard;
