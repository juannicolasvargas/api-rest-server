const User = require('../models/user')
const bcrypt = require('bcryptjs');

const getAllUser = async (request, response) => {
    const { page } = request.query;
    const users = await User.find().limit(Number(page));
    response.json( users );
} 

const getUser = async (request, response) => {
    const id = request.params.id;
    const user = await User.findById(id)
    response.json(user)
}

const postUser = async (request, response) => {

    const { name, email, password, ... params } = request.body
    const user = new User({ name, email, password, params });

    // validar si el correo existe
    // const emailPresence = await User.findOne({ email });
    // if (emailPresence) {
    //     return response.status(422).json({msg: 'ya existe el correo'})
    // }

    // encriptar contraseña
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    await user.save(); // guardar usuario
    console.log(user.json);
    response.json(user);
}

const putUser = async (request, response) => {
    const { id } = request.params;
    const body = request.body
    const user = await User.findByIdAndUpdate(id, body, { new:true })
    user.populate();
    console.log(id);
    console.log(user);
    response.json(user);
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