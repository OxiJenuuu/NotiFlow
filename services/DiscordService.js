const axios = require('axios');
require('dotenv').config();

exports.sendDiscordMessage = async (message) => {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  return axios.post(webhookUrl, {
    content: message,
  });
};
