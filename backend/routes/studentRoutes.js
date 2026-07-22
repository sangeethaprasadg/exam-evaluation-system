const express = require("express");
const router = express.Router();


//test//

const protect = require("../middleware/authMiddleware");

const upload = require("../middleware/uploadExcel");

const {
  importStudents,
} = require("../controllers/studentImportController");

const {
  createStudent,
  getStudents,
  updateStudent,
  toggleStudentStatus,
  getStudentsByMentor,
} = require("../controllers/studentController");

// GET all students
router.get("/students", getStudents);





// CREATE student
router.post("/students", createStudent);

// UPDATE student
router.put("/students/:id", updateStudent);



// ACTIVATE / DEACTIVATE
router.patch("/students/:id/status", toggleStudentStatus);


router.get("/students/mentor/:mentorId",getStudentsByMentor);


//test
router.get("/students/test", protect, (req, res) => {

    res.json({
        success: true,
        mentor: req.mentor
    });

});



router.post(
  "/students/import",
  upload.single("file"),
  importStudents
);


module.exports = router;
