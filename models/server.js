const express = require('express')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.middlewares();
        this.routes();
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