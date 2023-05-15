export const typeDefs = `#graphql

  type Error {
    messages: [String!]
  }

  type User {
    id: ID
    email: String
    errors:  Error
    username: String
    success: Boolean!
    token: String
  }

  type GenericResponse {
    errors:  Error
    success: Boolean!
    token: String
  }

  type Data {
    id: ID
    name: String
  }

  input CreateUserInput {
    name: String!
    email: String!
    password: String!
  }

  input LoginUserInput {
    email: String!
    password: String!
  }

  input ChangePasswordInput {
    oldPassword: String!
    newPassword: String!
  }

  input ChangeUsernameInput {
    name: String!
  }

  type Query {
    getAll: Data
  }

  type Mutation {
    createUser(input: CreateUserInput): User
    loginUser(input: LoginUserInput): User
    changePassword(input: ChangePasswordInput): GenericResponse 
    changeUsername(input: ChangeUsernameInput): GenericResponse
  }
`;
