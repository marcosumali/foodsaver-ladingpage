const express = require('express');
const router = express.Router();

const {
  avengersAssemble,
  avengersAssembleReminder
} = require('../controllers/email.controller')

router.post('/sendAvengersAssemble', avengersAssemble)
router.post('/sendAvengersAssembleReminder', avengersAssembleReminder)

module.exports = router;

