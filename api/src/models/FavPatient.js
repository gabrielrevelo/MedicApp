const mongoose = require ('mongoose');
const {Schema, model } = mongoose;

const favoritesSchema = new Schema({
    patient:{
        ref:'Patient',
        type:Schema.Types.ObjectId,
        required: true,
    },
    doctor:{
        ref: "Doctor",
        type: Schema.Types.ObjectId,
        required: true,
      },
    enable: {
        type: Boolean,
        default: false
    }
    }, {   
    timeseries: true,
    versionKey:false
})

module.exports = model('Favorites', favoritesSchema);
