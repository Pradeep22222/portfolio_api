import mongoose from "mongoose";
const messageSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      maxLength: 15,
      required: true,
    },
    lastName: {
      type: String,
      maxLength: 15,
      required: true,
    },
    email: {
      type: String,
      maxLength: 45,
      required: true,
    },
    phone: {
      type: String,
      maxLength: 15,
      required: true,
    },
    message: {
      type: String,
      maxLength: 10000,
      required: true,
    },
  },

  { timestamps: true }
);
export default mongoose.model("messages",messageSchema)