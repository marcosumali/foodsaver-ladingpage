const express = require('express');
const router = express.Router();

const {
  avengersAssemble
} = require('../controllers/email.controller')

router.post('/sendAvengersAssemble', avengersAssemble)

module.exports = router;

