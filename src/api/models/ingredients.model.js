const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const ingredientsSchema = new Schema (
    {
       cereales: [{ type: String, required: true, enum: ["cebada", "centeno", "arroz", "maiz", "trigo", "avena"]}],
       levadura: {type:String, required: true, enum: ["ale", "lager"]},
       lupulo: [{type:String, required: true, enum: [ "magnun", "saaz", "chinook","mandarina bavaria","el dorado", "mosaic", "cascade","simcoe","idaho7"]}],
       frutas: {type:String, enum: ["frambuesas", "mango", "cerezas", "piña", "naranja"]},
       especias: {type:String, enum: ["cilantro", "cascara de naranja", "jengibre", "pimienta"]},
       hierbas: {type:String, enum: ["menta", "albahaca", "salvia", "romero"]},
       otros: [{type:String, enum: ["café", "chocolate", "miel", "vainilla", "coco", "agua"]}]

    }
    
)

const Ingredient = mongoose.model("ingredient", ingredientsSchema);

module.exports = Ingredient;