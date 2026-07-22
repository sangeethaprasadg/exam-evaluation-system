const Student = require("../models/Student");
const Submission = require("../models/Submission");

const receiveSubmission = async (req, res) => {
    try {
        const {
            rollNumber,
            studentName,
            answerSheetUrl,
            mentorName,
            examName,
            examMode
        } = req.body;


     

        // Validate required fields
        if (!rollNumber || !examName || !examMode) {
            return res.status(400).json({
                success: false,
                message: "Roll Number, Exam Name and Exam Mode are required"
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

        // Check Duplicate Submission
        const existingSubmission = await Submission.findOne({
            studentId: student._id,
            examName: examName
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
            examName,
            examMode,
            answerSheetUrl,
            status: "Submitted"
        });

        res.status(201).json({
            success: true,
            message: "Submission created successfully",
            data: submission
        });

    } catch (error) {
        console.error("Webhook Error:", error);

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    receiveSubmission
};