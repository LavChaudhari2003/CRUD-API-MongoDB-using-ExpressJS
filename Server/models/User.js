const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    age: { type: Number, required: true, min: 0 }
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);
