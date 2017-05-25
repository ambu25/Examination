var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('AnswerSheet',{
	id: String,
	user_id: String,
	test_unique_number: String,
	question_id: String,
	option_id: String,
	is_correct: String
});