const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const cervezasSchema = new Schema (
    {
        nombre: {type:String, required:true},
        graduacion: {type:Number},
        fermentacion: {type:String,required:true, enum: ["ale", "lager"]},
        color: {type:String,required:true, enum: ["rubia", "negra", "tostada"]},
        cantidad: {type:Number /*, default: 0.33, enum: [0.33, 0.2, 0,25]*/},
        envase: {type:String, enum: ["vidrio", "lata"]},
        // picture: {type:String},
        ingredientes: [{type:Schema.Types.ObjectId,ref:"ingrediente"}]
    },
    {
        timestamps: true,
    }
)

const Cerveza = mongoose.model("cerveza", cervezasSchema);
module.exports = Cerveza;
