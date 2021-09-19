// const { request, response } = require('express')

const getAllUser = (request, response) => {
    response.json('todos los usuarios');
} 

const getUser = (request, response) => {
    const id = request.params.id;
    response.json({
        msg: 'obteniendo usuario',
        id
    })
}

const postUser = (request, response) => {
    const { name, age } = request.body
    response.json(
        {
            msg: 'usuario creado',
            params: {
                name, age
            }
        }
    );
}

const putUser = (request, response) => {
    response.json('usuario actualizado');
}

const deleteUser = (request, response) => {
    response.json('usuario eliminado');
} 

module.exports = {
    getUser,
    postUser,
    putUser,
    deleteUser,
    getAllUser
}