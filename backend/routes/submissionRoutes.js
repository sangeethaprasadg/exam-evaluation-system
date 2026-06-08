const express = require("express");
const router = express.Router();

const {
    getSubmissionById,
    evaluateSubmission
} = require("../controllers/submissionController");

router.get("/submissions/:id", getSubmissionById);
router.patch(
    "/submissions/:id/evaluate",
    evaluateSubmission
);

module.exports = router;
