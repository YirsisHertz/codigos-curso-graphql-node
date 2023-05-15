export const typeDefs: string = `#graphql

type User {
  id: ID!
  name: String!
}

type Message {
  to: ID!
  from: ID!
  text: String!
  createdAt: String!
}

input MessageInput {
  to: ID!
  from: ID!
  text: String!
}

type Query {
  getCount: Int!
}

type Mutation {
  incrementCount: Int!
  decrementCount: Int!

  sendMessage(input: MessageInput): Message
}

type Subscription {
  incrementCount: Int!
  decrementCount: Int!

  sendMessage: Message
}

`;
