const Student = require("../models/Student");
const Submission = require("../models/Submission");

const receiveSubmission = async (req, res) => {
    try {

    //   const { rollNumber, examName, examMode, answerSheetUrl } = req.body;


      const {
    rollNumber,
    examName,
    examMode,
    answerSheetUrl,
    studentName,
    mentorName,
    studentEmail
} = req.body;

        // Find Student
const student = await Student.findOne({ rollNumber });

if (!student) {
    return res.status(404).json({
        success: false,
        message: "Student not found"
    });
}

// Validation for Online Exam
if (examMode === "Online" && !answerSheetUrl) {
    return res.status(400).json({
        success: false,
        message: "Answer sheet URL is required for Online exams"
    });
}


       // Check Duplicate Submission

// const existingSubmission = await Submission.findOne({
//     studentId: student._id,
//     examNumber
// });

// if (existingSubmission) {
//     return res.status(400).json({
//         success: false,
//         message: "Submission already exists"
//     });
// }

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
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    receiveSubmission
};