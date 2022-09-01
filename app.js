const express = require("express");
const mongoose = require("mongoose");
const server = require("./routes/bookRoutes");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/books", server);

const url =
  "mongodb+srv://ibrahim_2001:orarkhan@cluster0.tsgav4t.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url);

app.listen(process.env.PORT || 5000, () => console.log("Server started..."));
