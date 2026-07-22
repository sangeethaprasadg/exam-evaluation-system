const Submission = require("../models/Submission");
const { uploadFile } = require("../services/googleDriveService");
const {sendEvaluationWebhook,} = require("../services/webhookService");

// Get all submissions assigned to a mentor
const getMentorSubmissions = async (req, res) => {
    try {
        const { mentorId } = req.params;

        const submissions = await Submission.find({ mentorId })
            .populate("studentId", "studentName rollNumber")
            .sort({ submittedAt: -1 });

        res.status(200).json({
            success: true,
            count: submissions.length,
            data: submissions,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Get single submission details
const getSubmissionById = async (req, res) => {
    try {
        const { id } = req.params;

        const submission = await Submission.findById(id)
            .populate("studentId", "studentName rollNumber email phoneNumber course")
            .populate("mentorId", "mentorName email contactNumber");

        if (!submission) {
            return res.status(404).json({
                success: false,
                message: "Submission not found",
            });
        }

        res.status(200).json({
            success: true,
            data: {
                submissionId: submission._id,

                student: {
                    studentName: submission.studentId.studentName,
                    rollNumber: submission.studentId.rollNumber,
                    email: submission.studentId.email,
                    phoneNumber: submission.studentId.phoneNumber,
                    course: submission.studentId.course,
                },

                mentor: {
                    mentorName: submission.mentorId.mentorName,
                    email: submission.mentorId.email,
                    contactNumber: submission.mentorId.contactNumber,
                },

                exam: {
                    examName: submission.examName,
                    examMode: submission.examMode,
                },

                answerSheetUrl: submission.answerSheetUrl,

                status: submission.status,

                submittedAt: submission.submittedAt,
            },
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};



// Get all submissions (Super Admin)
const getAllSubmissions = async (req, res) => {

      


    try {
        const submissions = await Submission.find()
            .populate("studentId", "studentName rollNumber course")
            .populate("mentorId", "mentorName")
            .sort({ submittedAt: -1 });

        res.status(200).json({
            success: true,
            count: submissions.length,
            data: submissions,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};




// Evaluate Submission
const evaluateSubmission = async (req, res) => {
    try {
        const {
            submissionId,
            marks,
            mentorRemark,
            ratings,
        } = req.body;

        // Find submission and populate student details
        const submission = await Submission.findById(submissionId)
            .populate("studentId", "rollNumber studentName email");

        if (!submission) {
            return res.status(404).json({
                success: false,
                message: "Submission not found",
            });
        }

        // Upload corrected paper to Google Drive (if uploaded)
        let correctedPaperUrl = submission.correctedPaperUrl;

        if (req.file) {
            correctedPaperUrl = await uploadFile(req.file);
            submission.correctedPaperUrl = correctedPaperUrl;
        }

        // Update evaluation details
        submission.marks = marks;
        submission.feedback = mentorRemark;
        submission.ratings = ratings ? JSON.parse(ratings) : {};
        submission.status = "Evaluated";

        // Save evaluation
        await submission.save();

        // Send evaluation data to Apps Script webhook
        try {
            await sendEvaluationWebhook({
                rollNumber: submission.studentId.rollNumber,
                examName: submission.examName,
                marks: submission.marks,
                feedback: submission.feedback,
                correctedPaperUrl: submission.correctedPaperUrl,
            });
        } catch (webhookError) {
            console.error("Webhook failed:", webhookError.message);

            // Don't fail the evaluation if webhook fails.
            // You can log it or retry later.
        }

        // Return success response
        res.status(200).json({
            success: true,
            message: "Evaluation saved successfully",
            data: submission,
        });

    } catch (error) {
        console.error("Evaluation Error:", error);

        res.status(500).json({
            success: false,
            message: error.message || "Internal Server Error",
        });
    }
};




module.exports = {
    getMentorSubmissions,
    getSubmissionById,
    getAllSubmissions,
    evaluateSubmission,
};