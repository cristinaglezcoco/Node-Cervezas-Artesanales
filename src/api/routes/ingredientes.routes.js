const express = require ("express");
const { getIngredientes, postIngreCerveza } = require("../controllers/ingredientes.controller");

const ingredientesRouter = express.Router();

ingredientesRouter.get("/", getIngredientes)
ingredientesRouter.post("/", postIngreCerveza)


module.exports = ingredientesRouter;
