import { GraphQLError } from "graphql";

export const resolvers = {
  Query: {
    users: () => [],
    user: (parent, args, { dataSources }, info) => {
      return dataSources.usersAPI.getAllUsers();
    },
  },
};
