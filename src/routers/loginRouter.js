import express from "express";
import { addlogin, getLogins } from "../model/logins/loginModel.js";

const router = express.Router();
router.post("/", async (req, res, next) => {
  try {
    const result = await addlogin(req.body);
    res.json({
      status: "success",
      message: "response from login post method",
      result,
    });
  } catch (error) {
    next(error);
  }
});
router.get("/", async (req, res, next) => {
  try {
    const result = await getLogins();
    res.json({
      status: "success",
      message: "response from login get method",
      result,
    });
  } catch (error) {
    next(error);
  }
});
export default router;
