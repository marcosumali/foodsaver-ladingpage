const express = require('express');
const router = express.Router();

const {
  avengersAssemble,
  avengersAssembleReminder,
  customersAssemble
} = require('../controllers/email/registration.controller')

const {
  foodPromotion,
  eventPromotion
} = require('../controllers/email/marketing.controller');

router.post('/sendAvengersAssemble', avengersAssemble)
router.post('/sendAvengersAssembleReminder', avengersAssembleReminder)
router.post('/sendCustomersAssemble', customersAssemble)
router.post('/sendFoodPromotion', foodPromotion)
router.post('/sendEventPromotion', eventPromotion)

module.exports = router;

