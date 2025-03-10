const emailService = require('../services/emailService');
const telegramService = require('../services/telegramService');
const discordService = require('../services/discordService');

exports.sendEmailNotification = async (req, res) => {
  const { to, subject, text } = req.body;
  try {
    await emailService.sendEmail(to, subject, text);
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.sendTelegramNotification = async (req, res) => {
  const { message, chatId } = req.body;
  try {
    await telegramService.sendMessage(message, chatId);
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.sendDiscordNotification = async (req, res) => {
  const { message } = req.body;
  try {
    await discordService.sendDiscordMessage(message);
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
