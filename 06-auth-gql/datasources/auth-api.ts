import { RESTDataSource } from "@apollo/datasource-rest";

export class AuthAPI extends RESTDataSource {
  override baseURL = "http://localhost:3000/";

  async createUser(name: string, email: string, password: string) {
    const user = await this.post(`/auth/register`, {
      body: {
        name,
        email,
        password,
      },
    });

    return user;
  }

  async loginUser(email: string, password: string) {
    const user = await this.post(`/auth/login`, {
      body: {
        email,
        password,
      },
    });

    return user;
  }

  async changePassword(
    oldPassword: string,
    newPassword: string,
    token: string
  ) {
    const genericResponse = await this.patch(`/auth/change-password`, {
      body: {
        oldPassword,
        newPassword,
      },
      headers: {
        "x-auth-token": token,
      },
    });

    return genericResponse;
  }

  async changeUsername(name: string, token: string) {
    const genericResponse = await this.patch(`/auth/change-username`, {
      body: {
        name,
      },
      headers: {
        "x-auth-token": token,
      },
    });

    return genericResponse;
  }
}
