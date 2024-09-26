import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    desc: {
      type: number,
    },
    address: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", UserSchema);
