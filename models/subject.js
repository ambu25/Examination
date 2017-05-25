var mongoose = require('mongoose');

module.exports = mongoose.model('Subject',{
	id: String,
	sub_name: String
});