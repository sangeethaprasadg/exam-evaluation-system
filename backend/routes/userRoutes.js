const express = require("express");
const router = express.Router();

const { getUsers,createUser,updateUser,toggleUserStatus,getMentors} = require("../controllers/userController");

router.get("/", getUsers);

router.get("/mentors", getMentors);



router.post("/", createUser);

router.put("/:id", updateUser);

router.patch("/:id/status", toggleUserStatus);

module.exports = router;