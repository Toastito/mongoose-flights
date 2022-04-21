const Ticket = require('../models/ticket');

module.exports = {
  new: newTicket,
  create,
  delete: deleteTicket
}

function newTicket(req, res) {
  res.render('tickets/new', { flightId: req.params.id });
}

function create(req, res) {
  Object.keys(req.body).forEach((key) => {
    if (!req.body[key]) delete req.body[key];
  });
  req.body.flight = req.params.id;
  Ticket.create(req.body, (err) => {
    res.redirect(`/flights/${req.params.id}`);
  });
}

function deleteTicket(req, res) {
  Ticket.findByIdAndDelete(req.params.id, (err, ticket) => {
    res.redirect(`/flights/${ticket.flight}`);
  });
}