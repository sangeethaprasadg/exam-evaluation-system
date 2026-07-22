const axios = require("axios");

const sendEvaluationWebhook = async (payload) => {
    try {
        if (!process.env.APPS_SCRIPT_WEBHOOK_URL) {
            throw new Error("APPS_SCRIPT_WEBHOOK_URL is not configured.");
        }

        const response = await axios.post(
            process.env.APPS_SCRIPT_WEBHOOK_URL,
            payload,
            {
                headers: {
                    "Content-Type": "application/json",
                },
                timeout: 10000, // 10 seconds
            }
        );

        return response.data;
    } catch (error) {
        console.error(
            "Webhook Error:",
            error.response?.data || error.message
        );

        throw error;
    }
};

module.exports = {
    sendEvaluationWebhook,
};