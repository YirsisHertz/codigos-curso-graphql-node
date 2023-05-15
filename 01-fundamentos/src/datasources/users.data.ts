import { RESTDataSource } from "@apollo/datasource-rest";

export class UsersAPI extends RESTDataSource {
  override baseURL: string = "https://jsonplaceholder.typicode.com/users";

  async getAllUsers() {
    return this.get("");
  }
}
