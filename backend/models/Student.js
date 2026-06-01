const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required: true
    },

    phoneNumber: {
        type: String,
        required: true
    },

    mentorName: {
        type: String,
        required: true
    },

    sessionMode: {
        type: String,
        enum: ["Online", "Offline"],
        required: true
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Student", studentSchema);