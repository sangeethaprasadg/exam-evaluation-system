const express = require("express");
const router = express.Router();

const { receiveSubmission } = require("../controllers/webhookController");

router.post("/webhook/submission", receiveSubmission);

module.exports = router;
