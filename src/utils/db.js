const mongoose = require("mongoose");
const MONGODB_URL = process.env.MONGODB_URL;
const connect = async () => {
    try {
        const db = await mongoose.connect(MONGODB_URL);
        const {name,host} = db.connection;

        console.log(`Conectado a ${name}DB en host ${host}`);
    } catch (error) {
        console.log("Error al conectar a nuestra BBDD",error);
    }
}
module.exports = {connect}