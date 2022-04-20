const express = require('express');
const router = express.Router();
const ticketsController = require('../controllers/tickets');

//GET Display new ticket form
router.get('/flights/:id/tickets/new', ticketsController.new);

//POST Create New ticket
router.post('/flights/:id/tickets', ticketsController.create);

//DELETE Delete a Ticket
router.delete('/tickets/:id', ticketsController.delete);

module.exports = router;