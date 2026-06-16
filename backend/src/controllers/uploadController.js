const path = require("path");
const { parseWebfleetFile } = require("../webfleetParser");

async function uploadWebfleet(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({
        error: "Aucun fichier envoyé",
      });
    }

    const filePath = req.file.path;
    const originalName = req.file.originalname;

    const result = parseWebfleetFile(filePath);

    return res.json({
      message: "Fichier Webfleet importé avec succès",
      file: {
        name: originalName,
        path: filePath,
        extension: path.extname(originalName),
      },
      result,
    });
  } catch (error) {
    console.error("Erreur upload Webfleet:", error);

    return res.status(500).json({
      error: "Erreur lors du traitement du fichier Webfleet",
      details: error.message,
    });
  }
}

module.exports = {
  uploadWebfleet,
};