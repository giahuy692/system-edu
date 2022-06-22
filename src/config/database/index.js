const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Conected Succefully...!');
    }
    catch (error){
        console.log('Connect failure!!');
    }
} 

module.exports = { connect };