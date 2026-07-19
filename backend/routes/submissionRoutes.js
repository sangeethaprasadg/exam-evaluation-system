const express = require("express");
const router = express.Router();

const {
    getMentorSubmissions,
    getSubmissionById
} = require("../controllers/submissionController");

router.get("/my/:mentorId", getMentorSubmissions);

router.get("/:id", getSubmissionById);

module.exports = router;