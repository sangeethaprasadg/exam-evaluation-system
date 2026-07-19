const express = require("express");
const router = express.Router();

const {
    evaluateSubmission
} = require("../controllers/evaluationController");

router.post("/:submissionId", evaluateSubmission);

module.exports = router;