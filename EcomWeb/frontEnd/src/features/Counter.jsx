import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../redux/frontEndSlice';

const Counter = () => {
  const value = useSelector((state) => state.frontEnd.value); // Access state
  const dispatch = useDispatch(); // Dispatch actions

  return (
    <div className="flex flex-col items-center">
      <p className="text-xl mb-6">Value: {value}</p>
      <div className="space-x-4">
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
