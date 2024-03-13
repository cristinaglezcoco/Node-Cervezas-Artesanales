const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

const cervezasRouter = require("./src/api/routes/cervezas.routes");
const ingredientesRouter = require("./src/api/routes/ingredientes.routes");

const {connect} = require("./src/utils/db");
const PORT = process.env.PORT;

const server = express();
connect();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended:false}));

server.use("/cervezas", cervezasRouter);
server.use("/ingredientes", ingredientesRouter);

server.listen(PORT, () => console.log(`escuchando en el puerto: http://localhost:${PORT}`))