import express from "express";
import cors from "cors";
import helmet from "helmet";
import "dotenv/config";
import { dbConnect } from "./src/config/dbConfig.js";
import messageRouter from "./src/routers/MessageRouter.js";
import loginsRouter from "./src/routers/loginRouter.js";

// connecting database
dbConnect();

const app = express();
const PORT = process.env.PORT || 8000;
// middlewares

app.use((error, req, res, next) => {
  const status = error.status || 404;
  res.status(status).json({
    status: "error",
    message: error.message,
  });
});
app.use(express.json());
app.use(cors());
app.use(helmet());
// handling router
app.use("/api/v1/messages", messageRouter);
app.use("/api/v1/logins", loginsRouter);

app.use("/", (req, res, next) => {
  res.json({
    status: "success",
    message: "You hit the server root",
  });
  next(error);
});
app.use((error, req, res, next) => {
  console.log(error);
  const statusCode = error.status || 404;
  res.status(statusCode).json({
    status: "error",
    message: error.message,
  });
});
// listening server
app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`server running on port ${PORT}`);
});
