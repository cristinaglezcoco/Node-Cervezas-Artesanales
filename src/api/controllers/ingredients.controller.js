const Ingredient = require("../models/ingredients.model");


const getIngredients = async (req, res) => {
    
    try {
        const allIngredients = await Ingredient.find();
        return res.status(200).json(allIngredients);
    } catch (error) {
      return res.status(500).json(error);
    }
};

const postIngreBeer = async (req, res) => {

    try {
        const newIngreBeer = new Ingredient(req.body);
        const createdIngreBeer = await newIngreBeer.save();
        return res.status(201).json(createdIngreBeer);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteIngredients = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedIngredient = await Ingredient.findByIdAndDelete(id);
      if (!deletedIngredient) {
        return res.status(404).json({ message: "El id de ingredient no existe" });
      }
      return res.status(200).json(deletedIngredient);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  const putIngredients = async (req, res) => {
    try {
      const { id } = req.params;
      const putIngredient = new Ingredient(req.body);
      putIngredient._id = id;
   
      const updatedIngredient = await Ingredient.findByIdAndUpdate(id, putIngredient, {
        new: true,
      });
      if (!updatedIngredient) {
        return res.status(404).json({ message: "El id de este ingredient no existe" });
      }
      return res.status(200).json(updatedIngredient);
    } catch (error) {
      return res.status(500).json(error);
    }
  };


module.exports = {getIngredients, postIngreBeer, deleteIngredients, putIngredients};