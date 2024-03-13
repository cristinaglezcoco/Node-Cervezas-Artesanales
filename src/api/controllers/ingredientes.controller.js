const Ingrediente = require("../models/ingredientes.model");


const getIngredientes = async (req, res) => {
    
    try {
        const allIngredientes = await Ingrediente.find();
        return res.status(200).json(allIngredientes);
    } catch (error) {
      return res.status(500).json(error);
    }
};

const postIngreCerveza = async (req, res) => {

    try {
        const newIngreCerveza = new Ingrediente(req.body);
        const createdIngreCerveza = await newIngreCerveza.save();
        return res.status(201).json(createdIngreCerveza);
    } catch (error) {
        return res.status(500).json(error);
    }
};

module.exports = {getIngredientes, postIngreCerveza};