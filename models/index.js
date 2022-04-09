const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const formSchema = new Schema({
  firstName: {type: String, required: true, maxlength: 20},
  lastName: {type: String, required: true, maxlength: 20},
  // not sure if should be string or number
  // set max length incase use of "-" in string
  phone: {type: Number, required: true, maxlength: 12},
  email: {type: String, required: true, maxlength: 40},
  message: {type: String, required: true, maxlength: 500}

  }
);

module.exports = mongoose.model('form', formSchema);