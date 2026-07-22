const express = require("express");
const router = express.Router();
const uploadPdf = require("../middleware/uploadPdf");




const {
    getMentorSubmissions,
    getSubmissionById,
    getAllSubmissions,
    evaluateSubmission,
} = require("../controllers/submissionController");

router.get("/submissions/my/:mentorId", getMentorSubmissions);

router.get("/submissions", getAllSubmissions);

router.get("/submissions/:id", getSubmissionById);

router.post(
    "/submissions/evaluate",
    uploadPdf.single("correctedPaper"),
    evaluateSubmission
);

module.exports = router;