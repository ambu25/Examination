var mongoose = require('mongoose');

module.exports = mongoose.model('Question',{
	id: String,
	subject_id: String,
	question_name: String,
	timelapse: String

});