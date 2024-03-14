const express = require ("express");
const { getIngredients, postIngreBeer, deleteIngredients, putIngredients } = require("../controllers/ingredients.controller");

const ingredientsRouter = express.Router();

ingredientsRouter.get("/", getIngredients)
ingredientsRouter.post("/", postIngreBeer)
ingredientsRouter.delete("/:id", deleteIngredients)
ingredientsRouter.put("/modify/:id", putIngredients)


module.exports = ingredientsRouter;
