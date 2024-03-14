const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const beersSchema = new Schema (
    {
        nombre: {type:String, required:true},
        graduacion: {type:Number},
        fermentacion: {type:String,required:true, enum: ["ale", "lager"]},
        color: {type:String,required:true, enum: ["rubia", "negra", "tostada"]},
        cantidad: [{type:Number , default: 0.33, enum: [0.33, 0.75, 20, 30]}],
        envase: [{type:String, enum: ["vidrio", "lata", "barril"]}],
        picture: {type:String},
        ingredientes: [{type:Schema.Types.ObjectId,ref:"ingrediente"}]
    },
    {
        timestamps: true,
    }
)

const Beer = mongoose.model("beer", beersSchema);
module.exports = Beer;
