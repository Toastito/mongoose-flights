const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = {
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  arrival: {
    type: Date
  }
}

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United'],
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN'
  },
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date,
    default: function () {
      let date = new Date();
      return date.setFullYear(date.getFullYear() + 1);
    }
  },
  destinations: [destinationSchema]
});

module.exports = mongoose.model('Flight', flightSchema);