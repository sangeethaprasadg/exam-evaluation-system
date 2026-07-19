const Student = require("../models/Student");
const Submission = require("../models/Submission");
const Exam = require("../models/Exam");

const receiveSubmission = async (req, res) => {
    try {

        const {
            rollNumber,
            examName
        } = req.body;

        // Validate required fields
        if (!rollNumber || !examName) {
            return res.status(400).json({
                success: false,
                message: "Roll Number and Exam Name are required"
            });
        }

        // Find Student
        const student = await Student.findOne({ rollNumber });

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        // Find Exam
        const exam = await Exam.findOne({ examName });

        if (!exam) {
            return res.status(404).json({
                success: false,
                message: "Exam not found"
            });
        }

        // Check Duplicate Submission
        const existingSubmission = await Submission.findOne({
            studentId: student._id,
            examId: exam._id
        });

        if (existingSubmission) {
            return res.status(400).json({
                success: false,
                message: "Submission already exists"
            });
        }

        // Create Submission
        const submission = await Submission.create({
            studentId: student._id,
            mentorId: student.mentorId,
            examId: exam._id
        });

        res.status(201).json({
            success: true,
            message: "Submission created successfully",
            data: submission
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    receiveSubmission
};