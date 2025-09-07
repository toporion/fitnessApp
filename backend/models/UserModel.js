const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profileImage: { type: String },
    role: { type: String, enum: ['user', 'admin','staff',], default: 'user' },
},{ timestamps: true });

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;
