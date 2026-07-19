const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");
const mentorRoutes = require("./routes/mentorRoutes");
const webhookRoutes = require("./routes/webhookRoutes");
const submissionRoutes = require("./routes/submissionRoutes");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const evaluationRoutes = require("./routes/evaluationRoutes");




dotenv.config();

connectDB();

const app = express();



// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);





// Routes
app.use("/api", studentRoutes);
app.use("/api", mentorRoutes);
app.use("/api", webhookRoutes);
app.use("/api", submissionRoutes);
app.use("/api/evaluations", evaluationRoutes);


app.use("/api/auth", authRoutes);




app.get("/", (req, res) => {
    res.send("Exam Evaluation System Server Running");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
