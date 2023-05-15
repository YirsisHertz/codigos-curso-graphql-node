export const typeDefs = `#graphql
  type Product {
    id: ID
    name: String
    price: Float
    stock: Int
    createdAt: String
    updatedAt: String
  }

  input ProductInput {
    name: String!
    price: Float!
    stock: Int!
  }

  input UpdateProductInput {
    id: ID!
    name: String
    price: Float
    stock: Int
  }

  type Query {
    getAllProducts: [Product]
    getOneProduct(id: ID!): Product
  }

  type Mutation {
    createProduct(input: ProductInput): Product
    updateProduct(input: UpdateProductInput): [Int]
    deleteProduct(id: ID!): [Int]
  }
`;
