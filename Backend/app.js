const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const connectDB = require("./db/db");
connectDB();

const userRouter = require("./routes/user.routes");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/users", userRouter);

module.exports = app;