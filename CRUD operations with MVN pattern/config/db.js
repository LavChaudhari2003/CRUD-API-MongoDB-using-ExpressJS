const mongoose = require('mongoose');
const dotenv  = require('dotenv');

// load env configuration
dotenv.config();


const connectDB = async () => {
    try {
        // const conn = await mongoose.connect('mongodb://localhost:27017/test'); // Simplified URI
        console.log("URI:",process.env.MONGODB_URI);
        const conn = await mongoose.connect(process.env.MONGODB_URI);

        console.log("MongoDB connected:", conn.connection.host);
    } catch (err) {
        console.error("Error connecting to MongoDB:");
        console.error(err); // Log the full error object for better debugging
        process.exit(1);
    }
};

module.exports = connectDB;
