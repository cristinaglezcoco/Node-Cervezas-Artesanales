const express = require("express");
const {getBeers, postBeers, deleteBeers, putBeers} = require ("../controllers/beers.controllers");

const beersRouter = express.Router();
const {uploadToCloudinary} = require("../middleware/file.middleware");
const {upload} = require("../middleware/file.middleware");

beersRouter.get("/", getBeers)
beersRouter.post("/", [upload.single('picture'), uploadToCloudinary], postBeers)
beersRouter.delete("/:id", deleteBeers)
beersRouter.put("/modify/:id", putBeers)

module.exports = beersRouter;