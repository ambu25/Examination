//schema.js
  var restify = require('restify');
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;
  var ObjectId = Schema.ObjectId;

// AnswerSheet Schema

  exports.AnswerSheet = new Schema({
    id: ObjectId,
    user_id: String,
    test_unique_number: String,
    question_id: String,
    option_id: String,
    is_correct: String,
    question: [{ type: ObjectId, ref: 'Question' }],
  });

// Question Schema

  exports.Question = new Schema({
    id: ObjectId,
    subject_id: String,
    question_name: String,
    timelapse: String
    answerSheet: { type: ObjectId, ref: 'AnswerSheet' },
  });