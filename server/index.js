import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/user-routes.js";

const app = express();

app.use("/user", userRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb://MERN-USER:mernuser123@cluster0-shard-00-00.az3xj.mongodb.net:27017,cluster0-shard-00-01.az3xj.mongodb.net:27017,cluster0-shard-00-02.az3xj.mongodb.net:27017/MERN-USER?ssl=true&replicaSet=atlas-12pjpc-shard-0&authSource=admin&retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);

// mongoose.connect(CONNECTION_URL).then(() => {
//   console.log("...");
// });
