const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true
    },

    mentorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mentor",
        required: true
    },

    // examNumber: {
    //     type: Number,
    //     required: true
    // },
    examName: {
    type: String,
    required: true
    },

    examMode: {
    type: String,
    enum: ["Online", "Offline"],
    required: true
    },

    answerSheetUrl: {
        type: String,
        // required: true
    },

    attendance: {
        type: Boolean,
        default: false
    },

    correctedPaperUrl: {
        type: String
    },

    feedback: {
        type: String
    },

    marks: {
        type: Number
    },

    
    status: {
    type: String,
    enum: ["Submitted", "Evaluated"],
    default: "Submitted"
}

}, {
    timestamps: true
});

module.exports = mongoose.model("Submission", submissionSchema);