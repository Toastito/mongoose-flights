const Ticket = require('../models/ticket');

module.exports = {
  new: newTicket,
  create
}

function newTicket(req, res) {
  console.log('Hello From GET new');
  console.log(req.params.id);
  res.render('tickets/new', { flightId: req.params.id });
}

function create(req, res) {
  console.log('Hello From Post');
  console.log(req.params.id);
  req.body.flight = req.params.id;
  Ticket.create(req.body, (err) => {
    res.redirect(`/flights/${req.params.id}`);
  });
}