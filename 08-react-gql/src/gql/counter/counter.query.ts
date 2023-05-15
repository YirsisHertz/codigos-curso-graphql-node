import { gql } from "@apollo/client";

export const GET_COUNT = gql`
  query GetCount {
    getCount
  }
`;
