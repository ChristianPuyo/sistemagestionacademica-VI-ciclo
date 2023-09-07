const express = require("express");
const morgan = require("morgan");
const { database } = require("./db")


const server = express(); 

server.use(morgan("dev")); // Muestra información de la petición
server.use(express.json());// Transforma los datos a objetos de JS



const PORT = 3001;

//force: true -> Elimina todas las tablas de la BD, y las vuelve a crear.
//alter: true -> Actualiza las tablas de la BD.


database
    .sync({ force: true })
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        })
    }

    ).catch(err => console.log(err.message))


