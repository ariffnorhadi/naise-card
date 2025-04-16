import { useState } from 'react';

export function Greeting() {
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [favoriteColor, setFavoriteColor] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setFavoriteColor('');
    setIsSubmitted(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Greeting Form</h2>
      
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              What's your name?
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label htmlFor="color" className="block text-sm font-medium text-gray-700 mb-1">
              What's your favorite color?
            </label>
            <select
              id="color"
              value={favoriteColor}
              onChange={(e) => setFavoriteColor(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select a color</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="yellow">Yellow</option>
              <option value="purple">Purple</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="text-center space-y-4">
          <div className="text-xl text-gray-800">
            <p>Hello, <span className="font-bold text-blue-600">{name}</span>!</p>
            {favoriteColor && (
              <p className="mt-2">
                Your favorite color is{' '}
                <span 
                  className="font-bold"
                  style={{ color: favoriteColor }}
                >
                  {favoriteColor}
                </span>
              </p>
            )}
          </div>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
          >
            Start Over
          </button>
        </div>
      )}
    </div>
  );
} 