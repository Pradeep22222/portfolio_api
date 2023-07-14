import loginSchema from "./loginSchema.js";
export const addlogin = (obj) => {
  return loginSchema(obj).save();
};
export const getLogins = () => {
  return loginSchema.find();
};
