import express from "express";
import cors from "cors";
import multer from "multer";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

const upload = multer({ dest: "uploads/" });

app.post("/api/auth/register", upload.any(), (req, res) => {
  console.log("✅ Data received:", req.body);
  res.json({ message: "Data received successfully 🎉" });
});

app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
