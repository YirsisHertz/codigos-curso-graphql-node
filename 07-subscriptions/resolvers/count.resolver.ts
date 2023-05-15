import { pubsub } from "../context";
import { Counter } from "../models/counter.model";

const counter = new Counter();

export const countQuerys = {
  getCount: () => {
    return counter.count;
  },
};

export const countMutations = {
  incrementCount: () => {
    counter.increment();

    const value = counter.count;

    pubsub.publish("INCREMENT_COUNT", { incrementCount: value });

    return value;
  },
  decrementCount: () => {
    counter.decrement();

    const value = counter.count;

    pubsub.publish("DECREMENT_COUNT", { decrementCount: value });

    return value;
  },
};

export const countSubscriptions = {
  incrementCount: {
    subscribe: () => pubsub.asyncIterator(["INCREMENT_COUNT"]),
  },
  decrementCount: {
    subscribe: () => pubsub.asyncIterator(["DECREMENT_COUNT"]),
  },
};
