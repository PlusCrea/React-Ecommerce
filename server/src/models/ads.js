var mongoose = require('mongoose');
var Schema = mongoose.Schema;

function getMoney(value) {
    if (typeof value !== 'undefined') {
        return parseFloat(value.toString());
    }
    return value;
}

var adsSchema = new Schema({
    title: {
        type: String,
        trim: true,
        minLength: 10,
        maxLength: 50,
        required: [true, 'Why no title?']
    },
    mark: { type: Schema.Types.ObjectId, ref: 'Mark' },
    model: { type: Schema.Types.ObjectId, ref: 'Model' },
    year: {
        type: Number,
        required: true,
        min: [1900, 'Year is not valid'],
        max: 2020
    },
    isnew: Boolean,
    whosell: String,
    price: {
        type: Schema.Types.Decimal128,
        get: getMoney
    },
    desc: {
        type: String,
        trim: true,
        required: true
    },
    images: [String],
    date: { type: Date, default: Date.now }



});



module.exports = mongoose.model('Ads', adsSchema);