import {
  countMutations,
  countQuerys,
  countSubscriptions,
} from "./count.resolver";
import { messageMutations, messageSubscriptions } from "./messages.resolver";

export const resolvers = {
  Query: {
    ...countQuerys,
  },
  Mutation: {
    ...countMutations,
    ...messageMutations,
  },
  Subscription: {
    ...countSubscriptions,
    ...messageSubscriptions,
  },
};
