import React, { useState } from 'react';
import Section from '../../layouts/Section';
import Text from '../../primitives/Text';
import Input from '../../primitives/Input';
import Button from '../../primitives/Button';

const NewsletterSignup = ({ title, description, placeholder, buttonLabel, bgVariant = 'light' }) => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };

  const bgClass = bgVariant === 'dark' ? 'bg-[#292940]' : 'bg-[#F7F9FD]';
  const textClass = bgVariant === 'dark' ? 'text-white' : 'text-[#292940]';

  return (
    <Section className={`py-16 ${bgClass}`}>
      <div className="max-w-xl mx-auto text-center space-y-6">
        <Text variant="heading-md" className={`${textClass}`}>
          {title || 'Subscribe to Our Newsletter'}
        </Text>
        <Text variant="body-md" className={`${bgVariant === 'dark' ? 'text-white/65' : 'text-gray-500'}`}>
          {description || 'Get the latest updates and resources delivered to your inbox.'}
        </Text>
        {subscribed ? (
          <Text variant="body-md" className="text-green-500 font-semibold">
            Thank you for subscribing!
          </Text>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
            <div className="flex-1">
              <Input
                type="email"
                required
                placeholder={placeholder || 'Enter your email'}
                className={bgVariant === 'dark' ? 'bg-[#1F2937] text-white border-none' : ''}
              />
            </div>
            <Button type="submit" variant="primary" size="md">
              {buttonLabel || 'Subscribe'}
            </Button>
          </form>
        )}
      </div>
    </Section>
  );
};

export default NewsletterSignup;
