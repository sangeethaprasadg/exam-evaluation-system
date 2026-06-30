const mongoose = require("mongoose");

const examSchema = new mongoose.Schema({

    examName: {
        type: String,
        required: true
    },

    batch: {
        type: String,
        required: true
    },

    examDate: {
        type: Date,
        required: true
    },

    totalMarks: {
        type: Number,
        required: true
    },

    examMode: {
        type: String,
        enum: ["Online", "Offline"],
        required: true
    },

    status: {
        type: String,
        enum: ["Upcoming", "Active", "Completed"],
        default: "Upcoming"
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Exam", examSchema);