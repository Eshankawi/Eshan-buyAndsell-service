const express = require("express");
const multer = require("multer");
const sharp = require("sharp");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.static("uploads"));

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const filename = `uploads/${Date.now()}.png`;
    await sharp(req.file.buffer)
      .resize(500, 500, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .toFile(filename);

    res.json({ url: `http://localhost:${port}/${filename}` });
  } catch (error) {
    res.status(500).json({ error: "Image processing failed" });
  }
});

if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
