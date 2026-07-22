const drive = require("../config/googleDrive");
const { Readable } = require("stream");

const uploadFile = async (file) => {
  try {
    const bufferStream = new Readable();
    bufferStream.push(file.buffer);
    bufferStream.push(null);

    const response = await drive.files.create({
      requestBody: {
        name: file.originalname,
        parents: [process.env.GOOGLE_DRIVE_FOLDER_ID],
      },
      media: {
        mimeType: file.mimetype,
        body: bufferStream,
      },
      fields: "id",
    });

    const fileId = response.data.id;

    // Make the uploaded file viewable
    await drive.permissions.create({
      fileId,
      requestBody: {
        role: "reader",
        type: "anyone",
      },
    });

    return `https://drive.google.com/file/d/${fileId}/view`;
  } catch (error) {
    console.error("Google Drive Upload Error:", error);
    throw error;
  }
};

module.exports = { uploadFile };