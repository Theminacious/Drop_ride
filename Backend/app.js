const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const connectDB = require("./db/db");

//Routes
const userRouter = require("./routes/user.routes");
const captainRouter = require("./routes/captain.routes");
const mapsRoutes = require("./routes/maps.routes");
const rideRoutes = require("./routes/ride.routes");



connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());



app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/users", userRouter);

app.use('/captains',captainRouter);

app.use('/maps',mapsRoutes);

app.use('/rides',rideRoutes);

module.exports = app;