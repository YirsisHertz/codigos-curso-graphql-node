import { gql } from "@apollo/client";

export const INCREMENT_COUNT = gql`
  mutation IncrementCount {
    incrementCount
  }
`;

export const DECREMENT_COUNT = gql`
  mutation DecrementCount {
    decrementCount
  }
`;
