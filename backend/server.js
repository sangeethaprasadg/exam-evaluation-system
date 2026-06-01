const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");

dotenv.config();

connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/", studentRoutes);

app.get("/", (req, res) => {
    res.send("Exam Evaluation System Server Running");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
