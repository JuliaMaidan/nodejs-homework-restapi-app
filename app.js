const express = require("express");
const logger = require("morgan");
const cors = require("cors");

// const multer = require("multer");
// const path = require("path");
// const fs = require("fs").promises;
// const { nanoid } = require("nanoid");

require("dotenv").config();

const authRouter = require("./routes/api/auth");
const contactsRouter = require("./routes/api/contacts");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/users", authRouter);
app.use("/api/contacts", contactsRouter);

// const contacts = [];
// const tempDir = path.join(__dirname, "temp");

// const multerConfig = multer.diskStorage({
//   destination: tempDir,
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({
//   storage: multerConfig,
// });

// const contactsDir = path.join(__dirname, "public", "contacts");

// app.post("/api/contacts", upload.single("cover"), async (req, res) => {
//   const { path: tempUpload, originalname } = req.file;
//   // console.log(req.file);
//   // console.log(req.body);
//   const resultUpload = path.join(contactsDir, originalname);
//   await fs.rename(tempUpload, resultUpload);
//   const cover = path.join("contacts", originalname);
//   const newContact = {
//     id: nanoid(),
//     ...req.body,
//     cover,
//   };

//   contacts.push(newContact);
//   res.status(201).json(newContact);
// });

// app.get("api/contacts", async (req, res) => {
//   res.json(contacts);
// });

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
