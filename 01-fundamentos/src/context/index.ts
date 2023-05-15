import { UsersAPI } from "../datasources/users.data";

export interface MyContext {
  dataSources: {
    usersAPI: UsersAPI;
  };
}
