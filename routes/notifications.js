const express = require('express');
const router = express.Router();

const {
  sendEmailNotification,
  sendTelegramNotification,
  sendDiscordNotification,
} = require('../controllers/notificationsController');

//router.post('/email', sendEmailNotification);
router.post('/telegram', sendTelegramNotification);
router.post('/discord', sendDiscordNotification);

module.exports = router;
