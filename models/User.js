// models/User.js

import mongoose from 'mongoose';

// Define the User schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        //unique: true,
    },
    age: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

// Export the model
export default mongoose.model('User', userSchema);