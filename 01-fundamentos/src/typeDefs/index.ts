export const typeDefs = `#graphql
  input UserID {
    uid: ID
  }

  type User {
    id: ID
    name: String
    email: String
  }

  type Role {
    name: String
  }

  type Query {
    users: [User]
    user: [User]
  }
`;
