const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
  index,
  new: newFlight,
  create,
  show
};

function index(req, res) {
  Flight.find({}, (err, flights) => {
    res.render('flights/index', { flights, sort: req.query.order });
  }).sort(req.query.order ? { departs: req.query.order } : { departs: 'asc' });
}

function newFlight(req, res) {
  const flightSchema = Flight.schema;
  const newFlight = new Flight();
  // Obtain the default date
  const dt = newFlight.departs;
  // Format the date for the value attribute of the input
  let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
  departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
  res.render('flights/new', { flightSchema, departsDate });
}

function create(req, res) {
  Object.keys(req.body).forEach((key) => {
    if (!req.body[key]) delete req.body[key];
  });
  Flight.create(req.body,(err) => {
    if (err) return res.redirect('flights/new');
    res.redirect('flights/');
  });
}

function show(req, res) {
  const flightSchema = Flight.schema;
  Flight.findById(req.params.id, (err, flight) => {
    if (err) res.render('flights/index');
    Ticket.find({flight: req.params.id}, (err, tickets) => {
      res.render('flights/show', { flight, flightSchema, tickets });
    });
  });
}