import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center mt-6">
      <p className="text-xl font-semibold">Count: {count}</p>
      <button
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
