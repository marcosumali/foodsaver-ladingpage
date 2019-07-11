const express = require('express');
const router = express.Router();

const {
  avengersAssemble,
  avengersAssembleReminder
} = require('../controllers/email/registration.controller')

const {
  foodPromotion
} = require('../controllers/email/marketing.controller');

router.post('/sendAvengersAssemble', avengersAssemble)
router.post('/sendAvengersAssembleReminder', avengersAssembleReminder)
router.post('/sendFoodPromotion', foodPromotion)

module.exports = router;

