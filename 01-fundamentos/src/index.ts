import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./typeDefs/index.js";
import { resolvers } from "./resolvers/index.js";
import { MyContext } from "./context/index.js";
import { UsersAPI } from "./datasources/users.data.js";

const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: {
    port: parseInt(process.env.PORT || "4000"),
  },
  context: async () => {
    const { cache } = server;

    return {
      dataSources: {
        usersAPI: new UsersAPI({ cache }),
      },
    };
  },
});

console.log("App listening on", url);
