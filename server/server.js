import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
// import { notFound, errorHandler } from './middleware/errorHandler.js';

const app = express();

const host = process.env.HOST || "localhost";
const port = process.env.PORT || 3000;

connectDB();

// Middleware
app.use(express.json()); //  for parsing JSON form data
app.use(express.urlencoded({ extended: true })); // for parsing URLencoded form data
// app.use(express.static("public")); // this middleware is for serving static files in the public directory
// app.use(cookieParser()); // import cookieParser from 'cookie-parser'; // this middleware is for parsing cookies in the request headers?

app.get("/", (req, res) => {
  res.send("API is running...");
});

// Routes
app.use("/api/users", userRoutes);

// app.use((req, res, next) => {
//   console.log(req.path, req.method);
//   next();
// }); // This middleware logs the path and method of each request to the console

// app.use(notFound);
// app.use(errorHandler);

app.listen(port, () =>
  console.log(`Server is running at http://${host}:${port}/`)
);
