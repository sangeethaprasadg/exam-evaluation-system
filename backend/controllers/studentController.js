const Student = require("../models/Student");

// =======================
// Create Student
// =======================

const createStudent = async (req, res) => {
  try {
    const {
      rollNumber,
      studentName,
      phoneNumber,
      email,
      mentorId,
      course,
      sessionMode,
    } = req.body;

    // Check duplicate Roll Number
    const existingStudent = await Student.findOne({ rollNumber });

    if (existingStudent) {
      return res.status(400).json({
        success: false,
        message: "Roll Number already exists",
      });
    }

    const student = await Student.create({
      rollNumber,
      studentName,
      phoneNumber,
      email,
      mentorId,
      course,
      sessionMode,
    });

    return res.status(201).json({
      success: true,
      student,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to create student",
    });

  }
};

// =======================
// Get All Students
// =======================

const getStudents = async (req, res) => {
  try {

    const students = await Student.find()
      .populate("mentorId", "mentorName email")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: students.length,
      students,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch students",
    });

  }
};



// =======================
// Get Students By Mentor
// =======================

const getStudentsByMentor = async (req, res) => {
  try {

    const students = await Student.find({
      mentorId: req.params.mentorId,
      isActive: true,
    })
      .populate("mentorId", "mentorName")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: students.length,
      students,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch students",
    });

  }
};


// =======================
// Update Student
// =======================

const updateStudent = async (req, res) => {

  try {

    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        returnDocument: "after",
        runValidators: true,
      }
    ).populate("mentorId", "mentorName email");

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    return res.status(200).json({
      success: true,
      student,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to update student",
    });

  }

};

// =======================
// Activate / Deactivate
// =======================

const toggleStudentStatus = async (req, res) => {

  try {

    const student = await Student.findByIdAndUpdate(
      req.params.id,
      {
        isActive: req.body.isActive,
      },
      {
        returnDocument: "after",
      }
    );

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    return res.status(200).json({
      success: true,
      student,
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
  createStudent,
  getStudents,
  updateStudent,
  toggleStudentStatus,
  getStudentsByMentor,

};