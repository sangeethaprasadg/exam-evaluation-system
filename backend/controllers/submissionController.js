const Submission = require("../models/Submission");

// Get all submissions assigned to a mentor
const getMentorSubmissions = async (req, res) => {
    try {

        const { mentorId } = req.params;

        const submissions = await Submission.find({ mentorId })
            .populate("studentId", "studentName rollNumber")
            .populate("examId", "examName examMode")
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: submissions.length,
            data: submissions
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// Get single submission
const getSubmissionById = async (req, res) => {
    try {

        const { id } = req.params;

        const submission = await Submission.findById(id)
            .populate("studentId", "studentName rollNumber")
            .populate("mentorId", "mentorName")
            .populate("examId");

        if (!submission) {
            return res.status(404).json({
                success: false,
                message: "Submission not found"
            });
        }

        res.status(200).json({
            success: true,
            data: {
                submissionId: submission._id,
                studentName: submission.studentId.studentName,
                rollNumber: submission.studentId.rollNumber,
                mentorName: submission.mentorId.mentorName,

                examName: submission.examId.examName,
                examMode: submission.examId.examMode,
                totalMarks: submission.examId.totalMarks,

                answerSheetUrl: submission.answerSheetUrl,

                status: submission.status,

                submittedAt: submission.submittedAt
            }
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    getMentorSubmissions,
    getSubmissionById
};