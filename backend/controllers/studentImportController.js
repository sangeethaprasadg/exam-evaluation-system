const XLSX = require("xlsx");
const fs = require("fs");

const Student = require("../models/Student");
const Mentor = require("../models/Mentor");

const importStudents = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "No file uploaded.",
      });
    }

    const workbook = XLSX.readFile(req.file.path);

    const sheet = workbook.Sheets[workbook.SheetNames[0]];

    const rows = XLSX.utils.sheet_to_json(sheet);

    fs.unlinkSync(req.file.path);

    let success = 0;
    let failed = [];

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];

      try {
        // Find mentor using Mentor Name
        

        const mentor = await Mentor.findOne({
  mentorName: row["Mentor Name"],
  });

        if (!mentor) {
          failed.push({
            row: i + 2,
            reason: "Mentor not found",
          });
          continue;
        }

        // Check duplicate Roll Number
        const existingStudent = await Student.findOne({
          rollNumber: row["Roll Number"],
        });

        if (existingStudent) {
          failed.push({
            row: i + 2,
            reason: "Roll Number already exists",
          });
          continue;
        }

        await Student.create({
          rollNumber: row["Roll Number"],
          studentName: row["Student Name"],
          phoneNumber: row["Phone Number"],
          email: row["Email"],
          course: row["Course"],
          sessionMode: row["Session Mode"],
          mentorId: mentor._id,
          isActive: true,
        });

        success++;

      } catch (err) {
        failed.push({
          row: i + 2,
          reason: err.message,
        });
      }
    }



res.status(200).json({
  message: "Import completed.",
  imported: success,
  failed,
});

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  importStudents,
};