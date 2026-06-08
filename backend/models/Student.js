const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    rollNumber: {
        type: String,
        required: true,
        unique: true
    },

    studentName: {
        type: String,
        required: true
    },

    phoneNumber: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    mentorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mentor",
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