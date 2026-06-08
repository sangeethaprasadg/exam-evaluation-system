const Submission = require("../models/Submission");

const getSubmissionById = async (req, res) => {
    try {

        const { id } = req.params;

        const submission = await Submission.findById(id)
            .populate(
                "studentId",
                "studentName rollNumber"
            );

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
                examName: submission.examName,
                examMode: submission.examMode,
                answerSheetUrl: submission.answerSheetUrl,
                attendance: submission.attendance,
                status: submission.status,
                marks: submission.marks,
                feedback: submission.feedback,
                correctedPaperUrl: submission.correctedPaperUrl
            }
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


const evaluateSubmission = async (req, res) => {
    try {

        const { id } = req.params;

        const {
            attendance,
            marks,
            feedback,
            correctedPaperUrl
        } = req.body;

        const submission = await Submission.findById(id);

        if (!submission) {
            return res.status(404).json({
                success: false,
                message: "Submission not found"
            });
        }

        submission.attendance = attendance;
        submission.marks = marks;
        submission.feedback = feedback;
        submission.correctedPaperUrl = correctedPaperUrl;
        submission.status = "Evaluated";

        await submission.save();

        res.status(200).json({
            success: true,
            message: "Submission evaluated successfully",
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
    getSubmissionById,
    evaluateSubmission
};