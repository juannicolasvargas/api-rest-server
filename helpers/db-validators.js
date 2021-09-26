const Status = require('../models/status');
const User = require('../models/user');
const mongoose = require('mongoose');

const statusExist = async (status) => {
    const existStatus = await Status.findOne({ status });
    if (!existStatus) {
        throw new Error('F amigo');
    }
}

const emailPresence = async (email) => {
    const emailPresent = await User.findOne({email})
    if (emailPresent) {
        throw new Error('email already exist');
    }
}

const getUserById = async (id) => {
    isIdValid(id);
    const getUser = await User.findById(id);
    if (!getUser) {
        throw new Error('user no exist');
    }
}

const isIdValid = (id) => {
    if (mongoose.Types.ObjectId.isValid(id)) {
        return true;
    } else {
        throw new Error(`el id ${ id } no es un id valido`)
    }
}

module.exports = {
    statusExist,
    emailPresence,
    getUserById
}