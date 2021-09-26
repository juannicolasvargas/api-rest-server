const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('BD connection done');
    } catch (error) {
        console.log(error);
        throw new Error('BD connection failure');
    }
}

module.exports = {
    dbConnection
}