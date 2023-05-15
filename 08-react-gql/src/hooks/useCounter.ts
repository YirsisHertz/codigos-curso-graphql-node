import { useMutation, useQuery, useSubscription } from "@apollo/client";
import {
  DECREMENT_COUNT,
  GET_COUNT,
  INCREMENT_COUNT,
  INCREMENT_SUBSCRIPTION,
} from "../gql/counter";

export const useCounter = () => {
  const { data: initialData, loading } = useQuery(GET_COUNT);

  const { data: actualData, error } = useSubscription(INCREMENT_SUBSCRIPTION);

  const [incrementCountFunction] = useMutation(INCREMENT_COUNT);

  const [decrementCountFunction] = useMutation(DECREMENT_COUNT);

  const handleIncrement = async () => {
    await incrementCountFunction();
  };

  const handleDecrement = async () => {
    await decrementCountFunction();
  };

  return {
    loading,
    error,
    actualData,
    initialData,
    handleIncrement,
    handleDecrement,
  };
};
