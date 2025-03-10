const axios = require('axios');
require('dotenv').config();

exports.sendTelegramMessage = async (message) => {
  const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  return axios.post(url, {
    chat_id: chatId,
    text: message,
  });
};
