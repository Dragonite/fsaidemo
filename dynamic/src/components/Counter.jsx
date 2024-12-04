import { useState, useEffect } from 'react';

const Counter = () => {
  // State for counter value
  const [count, setCount] = useState(0);
  // State for tracking number of updates
  const [updates, setUpdates] = useState(0);

  // Effect that runs when count changes
  useEffect(() => {
    setUpdates(prev => prev + 1);
    
    // Log to console to show effect running
    console.log(`Counter value changed to: ${count}`);
  }, [count]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          React Hooks Demo
        </h1>
        
        <div className="text-center mb-8">
          <p className="text-6xl font-bold text-blue-600 mb-4">{count}</p>
          <p className="text-sm text-gray-600">
            Counter has been updated {updates} times
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            Decrease
          </button>
          
          <button
            onClick={() => setCount(0)}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
          >
            Reset
          </button>
          
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            Increase
          </button>
        </div>

        <div className="mt-8 text-sm text-gray-600">
          <h2 className="font-semibold mb-2">How it works:</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>useState manages the counter value and update count</li>
            <li>useEffect runs every time the counter changes</li>
            <li>Check console to see effect logging</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Counter;