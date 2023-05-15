import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { ProductsAPI } from "./datasources/products-api";

import { typeDefs } from "./schemas";
import { resolvers } from "./resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async () => {
    const { cache } = server;

    return {
      dataSources: {
        productsAPI: new ProductsAPI({ cache }),
      },
    };
  },
});

console.log(`Server started: ${url}`);
