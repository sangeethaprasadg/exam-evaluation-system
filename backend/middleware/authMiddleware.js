const { auth } = require("../config/firebaseAdmin");
const Mentor = require("../models/Mentor");

const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Authorization token missing",
      });
    }

    const token = authHeader.split(" ")[1];

    // Verify Firebase Token
    const decoded = await auth.verifyIdToken(token);

    // Find Mentor
    const mentor = await Mentor.findOne({
      email: decoded.email,
      isActive: true,
    });

    if (!mentor) {
      return res.status(403).json({
        success: false,
        message: "Access denied",
      });
    }

    // Store mentor in request
    req.mentor = mentor;

    next();

  } catch (error) {

    console.error(error);

    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });

  }
};

module.exports = protect;