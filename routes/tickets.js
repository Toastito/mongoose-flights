const express = require('express');
const router = express.Router();
const ticketsController = require('../controllers/tickets');

//GET for new ticket view
router.get('/flights/:id/tickets/new', ticketsController.new);

//POST For new ticket
router.post('/flights/:id/tickets', ticketsController.create);

module.exports = router;