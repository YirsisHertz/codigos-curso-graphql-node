import { Request, Response } from "express";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { User } from "../models/user.model";

export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        success: false,
        errors: {
          messages: ["User already exists"],
        },
        token: null,
      });
    }

    const newUser = new User({ username: name, email, password });

    const salt = bcrypt.genSaltSync(12);
    newUser.password = bcrypt.hashSync(password, salt);

    await newUser.save();

    const payload = {
      id: newUser.id,
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      },
      (error, token) => {
        if (error) {
          return res.status(500).json({
            success: false,
            errors: {
              messagges: ["Server error", error],
            },
            token: null,
          });
        }

        return res.status(200).json({
          success: true,
          errors: null,
          token,
          username: newUser.username,
          email: newUser.email,
          id: newUser.id,
        });
      }
    );
  } catch (error) {
    return res.status(500).json({
      success: false,
      errors: {
        messagges: ["Server error", error],
      },
      token: null,
    });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        errors: {
          messages: ["Email or password is incorrect"],
        },
        token: null,
      });
    }

    const validatePassword = bcrypt.compareSync(password, user.password);

    if (!validatePassword) {
      return res.status(400).json({
        success: false,
        errors: {
          messages: ["Email or password is incorrect"],
        },
        token: null,
      });
    }

    const payload = {
      id: user.id,
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      },
      (error, token) => {
        if (error) {
          return res.status(500).json({
            success: false,
            errors: {
              messagges: ["Server error", error],
            },
            token: null,
          });
        }

        return res.status(200).json({
          success: true,
          errors: null,
          token,
          username: user.username,
          email: user.email,
          id: user.id,
        });
      }
    );
  } catch (error) {
    return res.status(500).json({
      success: false,
      errors: {
        messagges: ["Server error", error],
      },
      token: null,
    });
  }
};

export const changePassword = async (req: Request | any, res: Response) => {
  const uid = req.uid;

  const { oldPassword, newPassword } = req.body;

  try {
    const user = await User.findById(uid);

    const validPassword = bcrypt.compareSync(oldPassword, user.password);

    if (!validPassword) {
      return res.status(500).json({
        success: false,
        errors: {
          messagges: ["Old password is incorrect"],
        },
        token: null,
      });
    }

    const salt = bcrypt.genSaltSync(12);
    const newPasswordHash = bcrypt.hashSync(newPassword, salt);

    await User.findByIdAndUpdate(uid, { password: newPasswordHash });

    return res.status(200).json({
      success: true,
      errors: null,
      token: null,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      errors: {
        messagges: ["Server error", error],
      },
      token: null,
    });
  }
};

export const changeUsername = async (req: Request | any, res: Response) => {
  const uid = req.uid;

  const { name: username } = req.body;

  try {
    await User.findByIdAndUpdate(uid, { username });

    return res.status(200).json({
      success: true,
      errors: null,
      token: null,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      errors: {
        messagges: ["Server error", error],
      },
      token: null,
    });
  }
};
