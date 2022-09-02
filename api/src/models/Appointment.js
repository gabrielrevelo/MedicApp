const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const appointmentSchema = new Schema({
  date:{
    type: Date,
    trim: true,
    required: true,
  },
  hour:{
    type: String,
    trim: true,
    required: true,
  },
  additionalComment:{
    type: String,
    required: false,
  },
  active:{
    type: Boolean,
    default: true,
  },
  patient:{
    ref: "Patient",
    type: Schema.Types.ObjectId,
    required: true,
  },
  doctor:{
    ref: "Doctor",
    type: Schema.Types.ObjectId,
    required: true,
  },
},{
  timestamps: true,
  versionKey: false
})

module.exports = model('Appointment', appointmentSchema);