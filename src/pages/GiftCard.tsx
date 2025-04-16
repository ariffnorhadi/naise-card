import { useState } from 'react';

interface GiftCard {
  id: number;
  name: string;
  image: string;
  discount: number;
  price: number;
  description: string;
  category: string;
}

export function GiftCardPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Mock data - in a real app, this would come from an API
  const giftCards: GiftCard[] = [
    {
      id: 1,
      name: "Amazon Gift Card",
      image: "https://via.placeholder.com/300x200",
      discount: 10,
      price: 100,
      description: "Perfect for online shopping",
      category: "shopping"
    },
    {
      id: 2,
      name: "Netflix Subscription",
      image: "https://via.placeholder.com/300x200",
      discount: 15,
      price: 50,
      description: "Stream your favorite shows",
      category: "entertainment"
    },
    {
      id: 3,
      name: "Spotify Premium",
      image: "https://via.placeholder.com/300x200",
      discount: 20,
      price: 30,
      description: "Unlimited music streaming",
      category: "entertainment"
    },
    {
      id: 4,
      name: "Apple Music Subscription",
      image: "https://via.placeholder.com/300x200",
      discount: 25,
      price: 20,
      description: "Premium music streaming",
      category: "entertainment"
    },
    {
      id: 5,
      name: "Amazon Prime",
      image: "https://via.placeholder.com/300x200",
      discount: 10,
      price: 100,
      description: "Prime benefits",
      category: "shopping"
    }
  ];

  const categories = ['all', 'shopping', 'entertainment'];
  const filteredCards = selectedCategory === 'all' 
    ? giftCards 
    : giftCards.filter(card => card.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Gift Cards</h1>
      
      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex space-x-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full capitalize ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Gift Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCards.map(card => (
          <div key={card.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <img 
                src={card.image} 
                alt={card.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded">
                {card.discount}% OFF
              </div>
            </div>
            
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{card.name}</h2>
              <p className="text-gray-600 mb-4">{card.description}</p>
              
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-2xl font-bold text-blue-600">${card.price}</span>
                  <span className="text-gray-500 line-through ml-2">
                    ${(card.price / (1 - card.discount/100)).toFixed(2)}
                  </span>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 