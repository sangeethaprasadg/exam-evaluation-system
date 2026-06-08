const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
    mentorName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    contactNumber: {
        type: String,
        required: true
    },

    telegramChatId: {
        type: String
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Mentor", mentorSchema);