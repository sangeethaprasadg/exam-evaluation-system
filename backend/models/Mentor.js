const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema(
  {
    mentorName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    contactNumber: {
      type: String,
      default: "",
    },

    telegramChatId: {
      type: String,
      default: "",
    },

    role: {
      type: String,
      enum: ["mentor", "admin", "superadmin"],
      default: "mentor",
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Mentor", mentorSchema);
