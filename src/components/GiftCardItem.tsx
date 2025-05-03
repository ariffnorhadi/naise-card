import React from 'react';

interface GiftCardItemProps {
  id: number;
  name: string;
  image: string;
  discount: number;
  price: number;
  description: string;
  category: string;
  onClick?: () => void;
}

export const GiftCardItem: React.FC<GiftCardItemProps> = ({
  name,
  image,
  discount,
  price,
  description,
  onClick,
}) => {
  return (
    <div 
      className="rounded-lg overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="relative bg-white">
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-cover"
        />
        {discount > 0 && (
          <div className="absolute top-2 right-2 bg-secondary text-white text-xs font-bold px-2 py-1 rounded-full">
            {discount}% OFF
          </div>
        )}
      </div>

      <div className=" mt-2 bg-primary">
        <h3 className="text-sm font-semibold text-gray-800 mb-1">{name}</h3>
        <p className="text-xs text-gray-600 mb-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-gray-900">{discount}% OFF</span>
        </div>
      </div>
    </div>
  );
}; 