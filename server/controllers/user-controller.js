import UserModel from "../models/user-model.js";

export const getUser = async (req, res) => {
  try {
    const getUserModel = await UserModel.find();

    res.status(200).json(getUserModel);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const createUser = async (req, res) => {
  const user = req.body;

  const newUser = new UserModel(user);

  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
  y;
};
