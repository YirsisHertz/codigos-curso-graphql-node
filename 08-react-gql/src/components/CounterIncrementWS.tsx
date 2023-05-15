import React from "react";

import { useCounter } from "../hooks/useCounter";

const CounterIncrementWS = () => {
  const { error, actualData, initialData, handleIncrement } = useCounter();

  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <span className="badge bg-primary">Increment Subscription</span>
      <h2>
        Counter Component: {actualData?.incrementCount || initialData?.getCount}
      </h2>

      <button
        className="btn btn-primary mx-3 fw-bold"
        type="button"
        onClick={handleIncrement}
      >
        Increment Count
      </button>
    </>
  );
};

export default CounterIncrementWS;
