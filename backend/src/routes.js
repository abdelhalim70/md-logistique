const express = require("express");
const multer = require("multer");
const { uploadWebfleet } = require("./controllers/uploadController");
const {
  getAlexDashboard,
  getAlexImports,
  getAlexDrivers,
} = require("./controllers/alexController");

const router = express.Router();

const upload = multer({
  dest: "uploads/",
});

router.post("/upload-webfleet", upload.single("file"), uploadWebfleet);

router.get("/alex/dashboard", getAlexDashboard);
router.get("/alex/imports", getAlexImports);
router.get("/alex/drivers", getAlexDrivers);

module.exports = router;