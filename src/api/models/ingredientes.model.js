const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const ingredientesSchema = new Schema (
    {
       cereales: { type: String, required: true, enum: ["cebada", "centeno", "arroz", "maiz", "trigo", "avena"]},
       levadura: {type:String, required: true, enum: ["ale", "lager"]},
       lupulo: {type:String, required: true, enum: ["amargor", "aroma"]},
       frutas: {type:String, enum: ["frambuesas", "mango", "cerezas", "piña", "naranja"]},
       especias: {type:String, enum: ["cilantro", "cascara de naranja", "jengibre", "pimienta"]},
       hierbas: {type:String, enum: ["menta", "albahaca", "salvia", "romero"]},
       otros: {type:String, enum: ["café", "chocolate", "miel", "vainilla", "coco"]},
       clarificantes: {type:String, required: true, enum: ["gelatina", "bentonita", "silice gel"]},
       carbonatacion: {type:String, required: true, enum: ["azucares", "jarabes"]}

    }
    
)

const Ingrediente = mongoose.model("ingrediente", ingredientesSchema);

module.exports = Ingrediente;