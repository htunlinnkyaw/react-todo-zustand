// src/Counter.js
import React, { useState } from "react";
import useCounterStore from "../store/useCounterStore";

const Counter = () => {
  const { count, increment, decrement, reset } = useCounterStore();

  const handleIncrement = () => {
    increment();
    console.log("increment");
  };

  const handleDecrement = () => {
    decrement();
  };

  const handleReset = () => {
    reset();
  };

  return (
    <div className="text-center shadow p-5 border border-black">
      <h1 className="text-4xl font-bold ">Counter: {count}</h1>
      <div className="my-4">
        <button
          className="bg-orange-400 text-white rounded  px-4 py-2"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="bg-blue-500 text-white rounded px-4 py-2"
          onClick={handleDecrement}
          style={{ marginLeft: "10px" }}
        >
          Decrement
        </button>
      </div>
      <button
        className="bg-red-500 text-white rounded px-4 py-2"
        onClick={handleReset}
        style={{ marginLeft: "10px" }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
