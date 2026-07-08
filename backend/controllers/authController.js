
const { auth } = require("../config/firebaseAdmin");
const Mentor = require("../models/Mentor");

const googleLogin = async (req, res) => {
    try {
        const { idToken } = req.body;

        if (!idToken) {
            return res.status(400).json({
                success: false,
                message: "ID Token is required"
            });
        }

        // Verify Firebase token
        // const decodedToken = await admin.auth().verifyIdToken(idToken);
        const decodedToken = await auth.verifyIdToken(idToken);

        const email = decodedToken.email;

        // Check mentor exists
        const mentor = await Mentor.findOne({ email });

        if (!mentor) {
            return res.status(403).json({
                success: false,
                message: "Access denied. Mentor not found."
            });
        }

        return res.status(200).json({
            success: true,
            mentor
        });

    } catch (error) {
        console.error(error);

        return res.status(401).json({
            success: false,
            message: "Invalid Firebase Token"
        });
    }
};

module.exports = {
    googleLogin
};
