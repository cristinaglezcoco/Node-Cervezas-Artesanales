const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

const beersRouter = require("./src/api/routes/beers.routes");
const ingredientsRouter = require("./src/api/routes/ingredients.routes");
const userRouter = require("./src/api/routes/user.routes");

const {connect} = require("./src/utils/db");
const PORT = process.env.PORT;

const server = express();
connect();

server.use(cors({
    origin: "https://front-cervezas-artesanales.vercel.app"
}));
  
server.use(express.json());
server.use(express.urlencoded({extended:false}));

server.use("/cervezas", beersRouter);
server.use("/ingredientes", ingredientsRouter);

server.use("/users", userRouter)

server.listen(PORT, () => console.log(`escuchando en el puerto: http://localhost:${PORT}`))