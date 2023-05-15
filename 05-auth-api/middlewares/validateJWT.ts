import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const validateJWT = (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({
      success: false,
      errors: {
        messagges: ["jwt is required"],
      },
      token: null,
    });
  }

  try {
    const payload: any = jwt.verify(token, process.env.JWT_SECRET);

    req.uid = payload.id;

    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      errors: {
        messagges: ["Server Error", error.message],
      },
      token: null,
    });
  }
};
