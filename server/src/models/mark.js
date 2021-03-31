var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var markSchema = new Schema({
    name: {
        type: String,
        maxlength: 50
    }
});

/*
const User = mongoose.model('Mark', markSchema);

module.exports = { Mark };

*/

module.exports = mongoose.model('Mark', markSchema);