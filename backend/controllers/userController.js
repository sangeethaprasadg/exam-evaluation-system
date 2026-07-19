const Mentor = require("../models/Mentor");

const getUsers = async (req, res) => {
  try {
    const users = await Mentor.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: users.length,
      users,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch users",
    });
  }
};


const getMentors = async (req, res) => {
  try {
    const mentors = await Mentor.find({
      role: "mentor",
      isActive: true,
    }).sort({ mentorName: 1 });

    return res.status(200).json({
      success: true,
      mentors,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch mentors",
    });

  }
};


const createUser = async (req, res) => {
  try {
    const {
      mentorName,
      email,
      contactNumber,
      telegramChatId,
      role,
      course,
      mentorCode,
    } = req.body;

    // Check if email already exists
    const existingUser = await Mentor.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    const mentor = await Mentor.create({
      mentorName,
      email,
      contactNumber,
      telegramChatId,
      role,
      course,
      mentorCode,
    });

    return res.status(201).json({
      success: true,
      mentor,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to create user",
    });

  }
};


const updateUser = async (req, res) => {
  try {

    const { id } = req.params;

    const updatedUser = await Mentor.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      mentor: updatedUser,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to update user",
    });

  }
};

const toggleUserStatus = async (req, res) => {
  try {

    const { id } = req.params;
    const { isActive } = req.body;

    const mentor = await Mentor.findByIdAndUpdate(
      id,
      { isActive },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!mentor) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      mentor,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to update status",
    });

  }
};



module.exports = {
  getUsers,
  getMentors,
  createUser,
  updateUser,
  toggleUserStatus,
};