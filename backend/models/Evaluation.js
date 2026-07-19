const mongoose = require("mongoose");

const evaluationSchema = new mongoose.Schema(
  {
    submissionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Submission",
      required: true,
    },

    mentorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Mentor",
      required: true,
    },

    attendance: {
      type: String,
      enum: ["Present", "Absent"],
      required: true,
    },

    score: {
      type: Number,
      required: true,
    },

    feedback: {
      type: String,
      default: "",
    },

    strengths: {
      type: String,
      default: "",
    },

    improvements: {
      type: String,
      default: "",
    },

    correctedPaperUrl: {
      type: String,
      default: "",
    },

    evaluatedAt: {
      type: Date,
      default: Date.now,
    },

    status: {
      type: String,
      enum: ["Pending", "Completed"],
      default: "Completed",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Evaluation", evaluationSchema);