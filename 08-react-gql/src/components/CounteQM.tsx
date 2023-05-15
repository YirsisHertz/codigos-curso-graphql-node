import React from "react";
import { useCounter } from "../hooks/useCounter";

const CounterQM = () => {
  const { loading, error, initialData, handleIncrement, handleDecrement } =
    useCounter();

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message} </p>;

  return (
    <>
      <span className="badge bg-primary">Query + Mutation</span>
      <h2>Counter Component: {initialData.getCount} </h2>

      <button
        className="btn btn-primary mx-3 fw-bold"
        type="button"
        onClick={handleIncrement}
      >
        Increment Count
      </button>

      <button
        className="btn btn-warning mx-3 fw-bold"
        type="button"
        onClick={handleDecrement}
      >
        Decrement Count
      </button>
    </>
  );
};

export default CounterQM;
