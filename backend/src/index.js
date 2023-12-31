const express = require("express");
const morgan = require("morgan");
const { database } = require("./db")
const studentRouter = require("./routes/studentRouter")
const cors = require("cors")


const server = express(); 

server.use(cors()); //esto soluciona el problema de politicas de CORS. 
server.use(morgan("dev")); // Muestra información de la petición
server.use(express.json());// Transforma los datos a objetos de JS

server.use("/student", studentRouter)


const PORT = 3001;

//force: true -> Elimina todas las tablas de la BD, y las vuelve a crear.
//alter: true -> Actualiza las tablas de la BD.


database
    .sync({ alter: true })
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        })
    }

    ).catch(err => console.log(err.message))


