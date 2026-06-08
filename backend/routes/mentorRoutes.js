const express = require("express");
const router = express.Router();

const { createMentor,getMentorSubmissions} = require("../controllers/mentorController");

router.post("/mentors", createMentor)

router.get("/mentors/:mentorId/submissions", getMentorSubmissions);

module.exports = router;