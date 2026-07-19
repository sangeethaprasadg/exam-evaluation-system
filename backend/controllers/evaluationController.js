const Evaluation = require("../models/Evaluation");
const Submission = require("../models/Submission");

const evaluateSubmission = async (req, res) => {
    try {

        const { submissionId } = req.params;

        const {
            mentorId,
            attendance,
            score,
            feedback,
            strengths,
            improvements,
            correctedPaperUrl
        } = req.body;

        // Check submission exists
        const submission = await Submission.findById(submissionId);

        if (!submission) {
            return res.status(404).json({
                success: false,
                message: "Submission not found"
            });
        }

        // Prevent duplicate evaluation
        const existingEvaluation = await Evaluation.findOne({
            submissionId
        });

        if (existingEvaluation) {
            return res.status(400).json({
                success: false,
                message: "Submission already evaluated"
            });
        }

        // Create evaluation
        const evaluation = await Evaluation.create({
            submissionId,
            mentorId,
            attendance,
            score,
            feedback,
            strengths,
            improvements,
            correctedPaperUrl,
            status: "Completed"
        });

        // Update submission status
        submission.status = "Evaluated";
        await submission.save();

        res.status(201).json({
            success: true,
            message: "Evaluation completed successfully",
            data: evaluation
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    evaluateSubmission
};