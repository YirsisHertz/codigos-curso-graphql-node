export const authMutations = {
  createUser: (_, { input }, { dataSources }) => {
    const { name, email, password } = input;

    return dataSources.authAPI.createUser(name, email, password);
  },
  loginUser: (_, { input }, { dataSources }) => {
    const { email, password } = input;

    return dataSources.authAPI.loginUser(email, password);
  },
  changePassword: (_, { input }, { dataSources, jwt }) => {
    const { oldPassword, newPassword } = input;

    return dataSources.authAPI.changePassword(oldPassword, newPassword, jwt);
  },
  changeUsername: (_, { input }, { dataSources, jwt }) => {
    const { name } = input;

    return dataSources.authAPI.changeUsername(name, jwt);
  },
};
