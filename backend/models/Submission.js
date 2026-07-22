const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },

    mentorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Mentor",
      required: true,
    },

    examName: {
      type: String,
      required: true,
    },

    examMode: {
      type: String,
      enum: ["Online", "Offline"],
      required: true,
    },

    answerSheetUrl: {
      type: String,
      default:null,
    },

    correctedPaperUrl: {
  type: String,
  default: null,
},

marks: {
  type: Number,
  default: null,
},

feedback: {
  type: String,
  default: "",
},

ratings: {
  type: mongoose.Schema.Types.Mixed,
  default: {},
},

    status: {
      type: String,
      enum: ["Submitted", "In Review", "Evaluated"],
      default: "Submitted",
    },

    submittedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Submission", submissionSchema);