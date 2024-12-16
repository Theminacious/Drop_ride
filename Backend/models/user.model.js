const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
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
            validator: (value) => {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return value.match(re);
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
    }
});

// Define methods outside the schema object
userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
    return token;
};

userSchema.methods.comparePassword = async function (Password) {
    return await bcrypt.compare(Password, this.password);
};

userSchema.statics.hashPassword = async function (Password) {
    return await bcrypt.hash(Password, 10);
};

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
