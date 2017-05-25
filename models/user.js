var mongoose = require('mongoose');

module.exports = mongoose.model('User',{
	id: String,
	user_name: String
});