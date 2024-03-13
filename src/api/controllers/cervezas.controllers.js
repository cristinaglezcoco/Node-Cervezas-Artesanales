
const Cerveza = require("../models/cervezas.model");
const Ingrediente = require("../models/ingredientes.model");

const getCervezas = async (req, res) => {
    try {
        const allCervezas = await Cerveza.find().populate('ingredientes')

        return res.status(200).json(allCervezas);

    } catch (error) {
        return res.status(500).json(error);
    }
};

const postCervezas = async (req, res) => {
    try {
        const newCerveza = new Cerveza(req.body);
        const createdCerveza = await newCerveza.save();
        return res.status(201).json(createdCerveza);
    } catch (error) {
        return res.status(500).json(error);
    }
   
};

//Todo Delete, put

module.exports = {getCervezas, postCervezas};