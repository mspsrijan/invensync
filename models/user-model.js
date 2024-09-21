import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  firstName: {
    required: true,
    type: String,
  },
  lastName: {
    required: false,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  role: {
    required: true,
    type: String,
    default: "Sales Admin",
  },
});

export const User = mongoose.models.User ?? mongoose.model("User", userSchema);
