const Flight = require('../models/flight');

module.exports = {
  create
}

function create(req, res) {
  Object.keys(req.body).forEach((key) => {
    if (!req.body[key]) delete req.body[key];
  });
  Flight.findById(req.params.id, (err, flight) => {
    flight.destinations.push(req.body);
    
    flight.save((err) => {
      res.redirect(`/flights/${flight._id}`);
    });
  });
}