// Frontend (Next.js) import { useState } from "react";

export default function Home() { const [image, setImage] = useState(null); const [preview, setPreview] = useState(null);

const handleImageUpload = (event) => { const file = event.target.files[0]; if (file) { setImage(file); setPreview(URL.createObjectURL(file)); } };

const handleSubmit = async () => { const formData = new FormData(); formData.append("image", image);

const response = await fetch("http://localhost:5000/upload", {
  method: "POST",
  body: formData,
});

const data = await response.json();
alert(`Processed Image: ${data.url}`);

};

return ( <div className="flex flex-col items-center p-5"> <h1 className="text-2xl font-bold">WhatsApp Profile Picture Maker</h1> <input type="file" accept="image/*" onChange={handleImageUpload} /> {preview && <img src={preview} alt="Preview" className="mt-4 w-40 h-40 object-cover" />} <button onClick={handleSubmit} className="mt-4 p-2 bg-blue-500 text-white rounded">Upload & Process</button> </div> ); }

// Backend (Node.js + Express) const express = require("express"); const multer = require("multer"); const sharp = require("sharp"); const cors = require("cors"); const path = require("path"); const fs = require("fs");

const app = express(); const port = 5000;

app.use(cors()); app.use(express.json()); app.use(express.static("uploads"));

const storage = multer.memoryStorage(); const upload = multer({ storage: storage });

app.post("/upload", upload.single("image"), async (req, res) => { try { const filename = uploads/${Date.now()}.png; await sharp(req.file.buffer) .resize(500, 500, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } }) .toFile(filename);

res.json({ url: `http://localhost:${port}/${filename}` });

} catch (error) { res.status(500).json({ error: "Image processing failed" }); } });

if (!fs.existsSync("uploads")) { fs.mkdirSync("uploads"); }

app.listen(port, () => { console.log(Server running on http://localhost:${port}); });

