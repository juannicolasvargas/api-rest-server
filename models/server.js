const express = require('express');
const { dbConnection } = require('../db/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // call methods
        this.connectDb();
        this.middlewares();
        this.routes();
    }

    // connect DB
    async connectDb() {
        await dbConnection();
    }

    // Rutas de la app
    routes() {
        this.app.use('/users', require('../routes/users_route')) // rutas users
    }

    middlewares() {
        // leer y parsear el body
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('servidor corriendo en puerto', this.port);
        });
    }

}

module.exports = Server;