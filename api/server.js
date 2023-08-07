// // mongodb+srv://admin:<password>@gigstercluster.xmyo0cy.mongodb.net/

// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import authRoute from "./routes/auth.route.js";
// import userRoute from "./routes/user.route.js";
// import gigRoute from "./routes/gig.route.js";
// import orderRoute from "./routes/order.route.js";
// import converstationRoute from "./routes/conversation.route.js";
// import messageRoute from "./routes/message.route.js";
// import reviewRoute from "./routes/review.route.js";
// import cookieParser from "cookie-parser";
// import cors from "cors";

// const app = express();
// dotenv.config();

// const connect = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO);
//     console.log("connected to mongodb");
//   } catch (error) {
//     console.log(error);
//   }
// };

// // to solve cors problem
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://localhost:5173");
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   next();
// });

// app.use(cors({ origin: "http://localhost:5173", credential: true }));
// app.use(express.json());
// app.use(cookieParser());

// app.use("/api/auth", authRoute);
// app.use("/api/users", userRoute);
// app.use("/api/gigs", gigRoute);
// app.use("/api/orders", orderRoute);
// app.use("/api/conversations", converstationRoute);
// app.use("/api/messages", messageRoute);
// app.use("/api/reviews", reviewRoute);

// app.use((err, req, res, next) => {
//   const errorStatus = err.status || 500;
//   const errorMessage = err.message || "Something went wrong!";

//   return res.status(errorStatus).send(errorMessage);
// });

// app.listen(8800, () => {
//   connect();
//   console.log("Backend server running");
// });





import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js";
import orderRoute from "./routes/order.route.js";
import conversationRoute from "./routes/conversation.route.js";
import messageRoute from "./routes/message.route.js";
import reviewRoute from "./routes/review.route.js";
import authRoute from "./routes/auth.route.js";
import sendRoute from './routes/send.route.js'; 
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB!");
  } catch (error) {
    console.log(error);
  }
};
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "http://localhost:5173");
//     res.header("Access-Control-Allow-Credentials", "true");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//     next();
//   });

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);
app.use("/api/send",sendRoute)

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).send(errorMessage);
});

app.listen(8800, () => {
  connect();
  console.log("Backend server is running!");
});