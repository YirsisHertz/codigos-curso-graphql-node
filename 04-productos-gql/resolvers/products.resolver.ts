export const productsQuerys = {
  getAllProducts: (_, __, { dataSources }) => {
    return dataSources.productsAPI.getAllProducts();
  },
  getOneProduct: (_, { id }, { dataSources }) => {
    return dataSources.productsAPI.getProductById(id);
  },
};

export const productsMutations = {
  createProduct: (_, { input }, { dataSources }) => {
    const { name, price, stock } = input;

    return dataSources.productsAPI.createProduct(name, price, stock);
  },
  updateProduct: (_, { input }, { dataSources }) => {
    const { id, name, price, stock } = input;

    return dataSources.productsAPI.updateProduct(id, name, price, stock);
  },
  deleteProduct: (_, { id }, { dataSources }) => {
    return dataSources.productsAPI.deleteProduct(id);
  },
};
