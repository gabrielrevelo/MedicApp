const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const patientSchema = new Schema({
  name:{
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    // required: true
  },
  email:{
    type: String,
    required: true,
  },
  password:{
    type: String,
    required: true,
    trim: true,
  },
  phoneNumber:{
    type: String,
    required: true,
    trim: true,
  },
  active:{
    type: Boolean,
    default: true,
  },
},{
  timestamps: true,
  versionKey: false
})
module.exports = model('Patient', patientSchema);