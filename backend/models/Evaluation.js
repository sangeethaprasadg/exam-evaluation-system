const mongoose = require("mongoose");

const evaluationSchema = new mongoose.Schema({

    submissionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Submission",
        required: true
    },

    mentorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mentor",
        required: true
    },

    score: {
        type: Number,
        required: true
    },

    feedback: {
        type: String
    },

    strengths: {
        type: String
    },

    improvements: {
        type: String
    },

    status: {
        type: String,
        enum: ["Pending", "Completed"],
        default: "Completed"
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Evaluation", evaluationSchema);