import { useState } from 'react';
import { Counter } from '../components/Counter';

interface Promotion {
  id: string;
  name: string;
  discount: number;
  description: string;
}

interface CardType {
  id: string;
  name: string;
  description: string;
}

const promotions: Promotion[] = [
  { id: '1', name: '15% Off Trip', discount: 15, description: 'Get 15% off on your next trip' },
  { id: '2', name: '7% Gift Card Discount', discount: 7, description: '7% off on gift card purchase' },
];

const cardTypes: CardType[] = [
  { id: '1', name: 'Digital Card', description: 'Instant delivery via email' },
  { id: '2', name: 'Physical Card', description: 'Delivered to your address' },
];

export function PreCheckoutPage() {
  const [selectedValue, setSelectedValue] = useState<number>(50);
  const [customValue, setCustomValue] = useState<string>('');
  const [selectedPromotion, setSelectedPromotion] = useState<string>('');
  const [selectedCardType, setSelectedCardType] = useState<string>('');
  const [isBuyAsGift, setIsBuyAsGift] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const handleValueChange = (value: number) => {
    setSelectedValue(value);
    setCustomValue('');
  };

  const handleCustomValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomValue(value);
    if (value) {
      setSelectedValue(0);
    }
  };

  const calculateTotal = () => {
    const baseValue = customValue ? parseFloat(customValue) : selectedValue;
    const promotion = promotions.find(p => p.id === selectedPromotion);
    const discount = promotion ? (baseValue * promotion.discount) / 100 : 0;
    return (baseValue - discount) * quantity;
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold mb-8">Starbucks Gift Card</h1>

      {/* Gift Card Value Selection */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Choose Card Value</h2>
        <div className="grid grid-cols-5 gap-4 mb-4">
          {[50, 100, 200, 300, 400].map((value) => (
            <button
              key={value}
              onClick={() => handleValueChange(value)}
              className={`p-4 border-2 rounded-lg text-center text-2xl font-bold ${
                selectedValue === value && !customValue
                  ? 'border-secondary-500 bg-white border-4'
                  : 'border-gray-300 hover:border-secondary'
              }`}
            >
              ${value}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <input
            type="number"
            value={customValue}
            onChange={handleCustomValueChange}
            placeholder="Enter custom amount"
            className="p-2 border-2 border-gray-300 rounded-lg flex-1"
          />
        </div>
      </div>

      {/* Promotions */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Available Promotions</h2>
        <div className="space-y-4">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className={`p-4 border-2 rounded-lg cursor-pointer ${
                selectedPromotion === promo.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-300 hover:border-blue-300'
              }`}
              onClick={() => setSelectedPromotion(promo.id)}
            >
              <h3 className="font-semibold">{promo.name}</h3>
              <p className="text-sm text-gray-600">{promo.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="mb-8">
        <div
          className="p-4 border-2 border-gray-300 rounded-lg cursor-pointer"
          onClick={() => toggleSection('about')}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">About Gift Cards</h2>
            <span>{expandedSection === 'about' ? '▼' : '▶'}</span>
          </div>
          {expandedSection === 'about' && (
            <div className="mt-4">
              <p className="mb-4">Learn more about our gift cards and how they work.</p>
              <button className="text-blue-500 hover:underline">Learn More</button>
            </div>
          )}
        </div>
      </div>

      {/* How to Use & Terms */}
      <div className="mb-8">
        <div
          className="p-4 border-2 border-gray-300 rounded-lg cursor-pointer"
          onClick={() => toggleSection('how-to-use')}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">How to Use & Terms</h2>
            <span>{expandedSection === 'how-to-use' ? '▼' : '▶'}</span>
          </div>
          {expandedSection === 'how-to-use' && (
            <div className="mt-4">
              <p className="mb-4">Instructions on how to use your gift card and terms of service.</p>
            </div>
          )}
        </div>
      </div>

      {/* Card Type Selection */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Select Card Type</h2>
        <div className="grid grid-cols-2 gap-4">
          {cardTypes.map((card) => (
            <div
              key={card.id}
              className={`p-4 border-2 rounded-lg cursor-pointer ${
                selectedCardType === card.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-300 hover:border-blue-300'
              }`}
              onClick={() => setSelectedCardType(card.id)}
            >
              <h3 className="font-semibold">{card.name}</h3>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quantity and Gift Options */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Quantity</h2>
          <Counter initialCount={1} onCountChange={setQuantity} />
        </div>
        <div className="flex items-center gap-4 mb-4">
          <input
            type="checkbox"
            id="buyAsGift"
            checked={isBuyAsGift}
            onChange={(e) => setIsBuyAsGift(e.target.checked)}
            className="h-5 w-5"
          />
          <label htmlFor="buyAsGift" className="text-lg">
            Buy as Gift
          </label>
        </div>
        {isBuyAsGift && (
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Personalize Gift
          </button>
        )}
      </div>

      {/* Total Payable */}
      <div className="p-4 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Total Payable</h2>
        <p className="text-2xl font-bold">${calculateTotal().toFixed(2)}</p>
      </div>
    </div>
  );
} 