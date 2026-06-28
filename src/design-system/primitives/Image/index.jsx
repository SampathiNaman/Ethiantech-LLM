import React from 'react';

const aspectRatioStyles = {
  '1:1': 'aspect-square',
  '4:3': 'aspect-[4/3]',
  '16:9': 'aspect-video',
  '3:2': 'aspect-[3/2]',
  auto: '',
};

export default function Image({
  src,
  alt = '',
  aspectRatio = 'auto',
  className = '',
}) {
  return (
    <div className={`overflow-hidden bg-[#E1E1E1] ${aspectRatioStyles[aspectRatio] || ''} ${className}`}>
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-[#A9A9A9] font-inter text-sm">
          No image
        </div>
      )}
    </div>
  );
}

Image.displayName = 'Image';
