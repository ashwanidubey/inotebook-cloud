const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const  NoteSchema = new Schema({
  title: { type: String, required: true }, // String is shorthand for {type: String}
  user: { type: mongoose.Schema.Types.ObjectId, required: true , ref: 'user'},
  body: { type: String, required: true },
  date: { type: Date, default: Date.now },
  tag : { type: String, default: "General" },
});

module.exports = mongoose.model('NoteSchema', NoteSchema);