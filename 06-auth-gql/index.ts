import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import { typeDefs } from "./schemas";
import { resolvers } from "./resolvers";

interface MyContext {
  token?: String;
}

export const createServer = async (port = 4000) => {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer<MyContext>({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  app.use(
    "/",
    cors<cors.CorsRequest>(),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token }),
    })
  );

  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));

  console.log(`🚀 Server ready at http://localhost:${port}/`);

  return {
    server,
    stop() {
      return new Promise((resolve, reject) => {
        httpServer.close((err) => {
          if (err) {
            reject(err);
          } else {
            resolve(true);
          }
        });
      });
    },
  };
};

createServer();

// import { ApolloServer } from "@apollo/server";
// import { startStandaloneServer } from "@apollo/server/standalone";

// import { typeDefs } from "./schemas";
// import { resolvers } from "./resolvers/index";

// import { AuthAPI } from "./datasources/auth-api";

// export const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// export const createServer = async () => {
//   const { url } = await startStandaloneServer(server, {
//     listen: { port: 4000 },
//     context: async ({ req }) => {
//       const { cache } = server;

//       const token = req.headers["x-auth-token"];

//       return {
//         jwt: token,
//         dataSources: {
//           authAPI: new AuthAPI({ cache }),
//         },
//       };
//     },
//   });

//   console.log(`Server started at ${url}`);
// };

// createServer();
