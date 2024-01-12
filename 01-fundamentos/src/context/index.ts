import { UsersAPI } from "../datasources/users.data.js";

export interface MyContext {
  dataSources: {
    usersAPI: UsersAPI;
  };
}
