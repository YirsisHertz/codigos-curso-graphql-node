import { gql } from "@apollo/client";

export const SEND_MESSAGE_SUBSCRIPTION = gql`
  subscription SendMessageSubscription {
    sendMessage {
      to
      from
      text
      createdAt
    }
  }
`;
