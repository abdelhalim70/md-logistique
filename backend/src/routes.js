const express = require("express");
const multer = require("multer");
const { uploadWebfleet } = require("./controllers/uploadController");

const router = express.Router();

const upload = multer({
  dest: "uploads/",
});

router.get("/drivers", (req, res) => {
  res.json([
    { name: "Gellel" },
    { name: "Houssam" },
    { name: "Sidibe" },
    { name: "Tayeb" },
    { name: "Youssef" },
  ]);
});

router.post("/upload-webfleet", upload.single("file"), uploadWebfleet);

module.exports = router;