const Mentor = require("../models/Mentor");
const Submission = require("../models/Submission");

const createMentor = async (req, res) => {
    try {
        const mentor = await Mentor.create(req.body);

        res.status(201).json({
            success: true,
            data: mentor
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getMentorSubmissions = async (req, res) => {
    try {

        const { mentorId } = req.params;

        const submissions = await Submission.find({
            mentorId
        }).populate(
            "studentId",
            "rollNumber studentName"
        );

        res.status(200).json({
            success: true,
            count: submissions.length,
            data: submissions.map(submission => ({
                submissionId: submission._id,
                studentName: submission.studentId.studentName,
                rollNumber: submission.studentId.rollNumber,
                examName: submission.examName,
                examMode: submission.examMode,
                status: submission.status
            }))
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    createMentor,
    getMentorSubmissions
};