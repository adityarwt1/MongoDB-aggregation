import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  username: String,
  firstname: String,
  lastname: String,
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
