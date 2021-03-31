import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: String,
    lastname: String,
    email: {
        type: String,
        unique: true,
        required: [true, 'Lütfen bir email adresi giriniz!']
    },
    password: String,
    role: {
        type: String,
        default:"User"
    },
    dateCreated: {
        type: Date,
        default: new Date()
    },
    dateModified: {
        type: Date,
        default: new Date()
    },
    lastLogin: {
        type: Date,
        default: new Date()
    }
});

export default mongoose.model('User', userSchema);