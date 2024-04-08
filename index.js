// const express = require("express");
// const dotenv = require("dotenv");
// dotenv.config();
// const cors = require("cors");

// const beersRouter = require("./src/api/routes/beers.routes");
// const ingredientsRouter = require("./src/api/routes/ingredients.routes");
// const userRouter = require("./src/api/routes/user.routes");

// const {connect} = require("./src/utils/db");
// const PORT = process.env.PORT;

// const server = express();
// connect();

// server.use(cors({
//     origin: "https://front-cervezas-artesanales.vercel.app"
// }));
  
// server.use(express.json());
// server.use(express.urlencoded({extended:false}));

// server.use("/cervezas", beersRouter);
// server.use("/ingredientes", ingredientsRouter);

// server.use("/users", userRouter)

// server.listen(PORT, () => console.log(`escuchando en el puerto: http://localhost:${PORT}`))


const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const path = require("path"); // Importa el módulo 'path'

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
server.use("/users", userRouter);

// Middleware para servir los archivos estáticos de la carpeta 'build'
server.use(express.static(path.join(__dirname, "build")));

// Middleware para manejar todas las demás rutas y redirigirlas a 'index.html'
server.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

server.listen(PORT, () => console.log(`escuchando en el puerto: http://localhost:${PORT}`));
