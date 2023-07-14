import mongoose from "mongoose";
const loginsSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      maxLength: 40,
      required: true,
    },
    password: {
      type: String,
      maxLength: 40,
      required: true,
    },
  },
  { timeStamps: true }
);
export default mongoose.model("logins", loginsSchema);
