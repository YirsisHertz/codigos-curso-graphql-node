import { gql } from "@apollo/client";

export const SEND_MESSAGE = gql`
  mutation SendMessage($input: MessageInput) {
    sendMessage(input: $input) {
      to
      from
      text
      createdAt
    }
  }
`;
