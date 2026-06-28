import React from 'react';
import Card from '../../primitives/Card/index.jsx';
import Avatar from '../../primitives/Avatar/index.jsx';
import Text from '../../primitives/Text/index.jsx';
import Button from '../../primitives/Button/index.jsx';

export default function CommentCard({
  comment = {},
  onReply,
  variant = 'default',
  className = '',
}) {
  const {
    author = '',
    avatar,
    timestamp = '',
    body = '',
  } = comment;

  return (
    <Card variant={variant} className={className}>
      <Card.Body>
        <div className="flex items-start gap-3">
          <Avatar src={avatar} name={author} size="md" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Text variant="label">{author}</Text>
              <Text variant="meta" className="text-[#A9A9A9]">{timestamp}</Text>
            </div>
            <Text variant="body">{body}</Text>
            <div className="flex gap-2 mt-2">
              {onReply && (
                <Button variant="ghost" size="sm" onClick={onReply}>
                  Reply
                </Button>
              )}
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

CommentCard.displayName = 'CommentCard';
