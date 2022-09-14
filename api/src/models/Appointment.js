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
  active:{
    type: Boolean,
    default: true,
  },
  paymentProcessed:{
    type: Boolean,
  },
  score:{
    type: Number,
  },
  comment:{
    type: String,
    required: false,
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
  commentPatient:{
    type: [String],
    required: false,
  },
},{
  timestamps: true,
  versionKey: false
})

module.exports = model('Appointment', appointmentSchema);