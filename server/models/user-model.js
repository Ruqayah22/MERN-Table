import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  birth: String,
  address: String,
  phone: String,
  salary: String,
  debts: String,
  date: String,
});

const UserModel = mongoose.model("UserModel", userSchema);

export default UserModel;
