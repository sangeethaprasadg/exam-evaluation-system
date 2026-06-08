const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");
const mentorRoutes = require("./routes/mentorRoutes");
const webhookRoutes = require("./routes/webhookRoutes");
const submissionRoutes = require("./routes/submissionRoutes");




dotenv.config();

connectDB();

const app = express();

// Middleware
app.use(express.json());


// Routes
app.use("/", studentRoutes);
app.use("/", mentorRoutes);
app.use("/", webhookRoutes);
app.use("/", submissionRoutes);




app.get("/", (req, res) => {
    res.send("Exam Evaluation System Server Running");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
