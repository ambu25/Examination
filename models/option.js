var mongoose = require('mongoose');

module.exports = mongoose.model('Option',{
	id: String,
	question_id: String,
	option_name: String,
	is_answer: String
});