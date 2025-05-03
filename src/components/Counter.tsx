import { useState } from 'react';

interface CounterProps {
  initialCount?: number;
  title?: string;
  onCountChange?: (count: number) => void;
}

export function Counter({ initialCount = 0, title = 'Counter', onCountChange }: CounterProps) {
  const [count, setCount] = useState(initialCount);
  const [step, setStep] = useState(1);

  const increment = () => {
    const newCount = count + step;
    setCount(newCount);
    onCountChange?.(newCount);
  };
  
  const decrement = () => {
    const newCount = count - step;
    setCount(newCount);
    onCountChange?.(newCount);
  };
  
  const reset = () => {
    setCount(initialCount);
    onCountChange?.(initialCount);
  };
  
  const handleStepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStep(Number(e.target.value));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Step Size
        </label>
        <input
          type="number"
          value={step}
          onChange={handleStepChange}
          min="1"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="text-4xl font-bold text-blue-600 mb-6 text-center">
        {count}
      </div>

      <div className="grid grid-cols-3 gap-4">
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors flex items-center justify-center"
        >
          <span className="text-xl">-</span>
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
        >
          Reset
        </button>
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors flex items-center justify-center"
        >
          <span className="text-xl">+</span>
        </button>
      </div>

      <div className="mt-4 text-sm text-gray-500">
        <p>Current step: {step}</p>
        <p>Initial value: {initialCount}</p>
      </div>
    </div>
  );
} 