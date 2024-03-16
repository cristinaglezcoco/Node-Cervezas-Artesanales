
const Beer = require("../models/beers.model");
const Ingredient = require("../models/ingredients.model");

const getBeers = async (req, res) => {
    try {
        const allBeers = await Beer.find().populate('ingredientes')
        //Beer.find().populate("ingredientes").then(x=>console.log(x)).catch(error=>console.log(error));

        return res.status(200).json(allBeers);

    } catch (error) {
        return res.status(500).json(error);
    }
};

const postBeers = async (req, res) => {
    try {
        const newBeer = new Beer(req.body);
        newBeer.picture = req.file_url;
        const createdBeer = await newBeer.save();
        return res.status(201).json(createdBeer);
    } catch (error) {
        return res.status(500).json(error);
    }
   
};

const deleteBeers = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedBeer = await Beer.findByIdAndDelete(id);
      if (!deletedBeer) {
        return res.status(404).json({ message: "El id de la Beer no existe" });
      }
      return res.status(200).json(deletedBeer);
    } catch (error) {
      return res.status(500).json(error);
    }
  };


  //Este put es normal...
  const putBeers = async (req, res) => {
    try {
      const { id } = req.params;
      const putBeer = new Beer(req.body);
      putBeer._id = id;
   
      const updatedBeer = await Movie.findByIdAndUpdate(id, putBeer, {
        new: true,
      });
      if (!updatedBeer) {
        return res.status(404).json({ message: "El id de esta Beer no existe" });
      }
      return res.status(200).json(updatedBeer);
    } catch (error) {
      return res.status(500).json(error);
    }
  };





module.exports = {getBeers, postBeers, deleteBeers, putBeers};