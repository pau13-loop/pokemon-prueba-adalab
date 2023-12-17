const mongoose = require('mongoose');
require('dotenv').config();

module.exports = {
    mongoose,
    connect: () => {
        mongoose.Promise = Promise;
        mongoose.connect(process.env.MONGO_ATLAS);
    },
    disconnect: done => {
        mongoose.disconnect(done);
    }
};