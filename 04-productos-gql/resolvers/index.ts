import { productsMutations, productsQuerys } from "./products.resolver";

export const resolvers = {
  Query: {
    ...productsQuerys,
  },
  Mutation: {
    ...productsMutations,
  },
};
