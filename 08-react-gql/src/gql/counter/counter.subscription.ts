import { gql } from "@apollo/client";

export const INCREMENT_SUBSCRIPTION = gql`
  subscription IncrementCountSubscribe {
    incrementCount
  }
`;
