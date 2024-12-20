const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 characters long'],
        },
        lastname: {
            type: String,
            minlength: [3, 'Last name must be at least 3 characters long'],
        }
    },
    email: {
        type: String,
        required: true,
        unique: [true, 'Email already exists'],
        validate: {
            validator: function (email) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            },
            message: 'Please enter a valid email'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Password must be at least 6 characters long'],
        select: false,
    },
    socketId: {
        type: String,
    },
    status:{
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    vehicle:{
        color:{
            type: String,
            required: true,
            minlength: [3, 'Color must be at least 3 characters long'],
        },
        plate:{
            type: String,
            required: true,
            minlength: [3, 'Plate must be at least 3 characters long'],
        },
        capacity:{
            type: Number,
            required: true,
            min: [1, 'Capacity must be at least 1 person'],
        },
        vehicletype:{
            type: String,
            required: true,
            enum: ['motorcycle', 'car', 'auto'],
        },
    },
    location:{
        lat:{
            type: Number,
            // required: true,
        },
        lng:{
            type: Number,
            // required: true,
        }
    }

});


captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET,{expiresIn: '24h'});
    return token;
};

captainSchema.methods.comparePassword = async function (Password) {
    return await bcrypt.compare(Password, this.password);
};

captainSchema.statics.hashPassword = async function (Password) {
    return await bcrypt.hash(Password, 10);
};




const captainModel = mongoose.model('captain',captainSchema);
 
module.exports = captainModel;




