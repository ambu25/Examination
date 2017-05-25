var mongoose = require('mongoose');

module.exports = mongoose.model('AnswerSheet',{
	id: String,
	user_id: String,
	subject_id: String,
	no_of_correct: String,
	test_unique_number: String,
	percentage: String,
	no_of_questions: String,
	test_unique_number: String
});