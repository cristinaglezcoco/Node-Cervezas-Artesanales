const express = require("express");
const {getCervezas, postCervezas} = require ("../controllers/cervezas.controllers");

const cervezasRouter = express.Router();
const {uploadToCloudinary} = require("../middleware/file.middleware");
const {upload} = require("../middleware/file.middleware");

cervezasRouter.get("/", getCervezas)
cervezasRouter.post("/", [upload.single('picture'), uploadToCloudinary], postCervezas)

module.exports = cervezasRouter;