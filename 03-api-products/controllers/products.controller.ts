import { Request, Response } from "express";

import Product from "../models/products.model";

export const getAllProducts = async (req: Request, res: Response) => {
  const products = await Product.findAll({
    where: {
      active: true,
    },
  });

  return res.status(200).json({
    products,
  });
};

export const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res.status(404).json({
      msg: "Not ID Selected",
    });
  }

  const products = await Product.findOne({ where: { active: true, id } });

  if (!products) {
    return res.status(404).json({
      msg: "Not Found",
    });
  }

  return res.status(200).json({
    products,
  });
};

export const createProduct = async (req: Request, res: Response) => {
  const { name, price, stock } = req.body;

  try {
    const product = await Product.create({
      name,
      price,
      stock,
    });

    return res.status(200).json({
      product,
    });
  } catch (error) {
    return res.status(500).json({
      msg: `Product ${name} is not created`,
      error,
    });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const { name, price, stock } = req.body;
  const { id } = req.params;

  if (!id) {
    return res.status(404).json({
      msg: "Not ID Selected",
    });
  }

  try {
    const product = await Product.update(
      {
        name,
        price,
        stock,
      },
      {
        where: {
          id,
          active: true,
        },
      }
    );

    return res.status(200).json({
      product,
    });
  } catch (error) {
    return res.status(500).json({
      msg: `Product ${name} is not updated`,
      error,
    });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res.status(404).json({
      msg: "Not ID Selected",
    });
  }

  try {
    const product = await Product.update(
      {
        active: false,
      },
      {
        where: {
          id,
          active: true,
        },
      }
    );

    return res.status(200).json({
      product,
    });
  } catch (error) {
    return res.status(500).json({
      msg: `Product ${id} is not exists`,
      error,
    });
  }
};
