# NotiFlow ⚡️

A lightweight Node.js micro-service for instantly sending automated notifications via Telegram and Discord, using a clean and easy-to-integrate API. *(Email notifications module is currently in development.)*

## 🚀 Features

- 📱 **Telegram integration** (Telegram Bot API)
- 💬 **Discord messages** (Webhooks)
- 🌐 **Simple REST API** for easy integration
- ⚙️ **Modular and extensible** architecture
- 🔐 **Secure** (environment variables support)

---

## ⚙️ Installation

```bash
git clone https://github.com/OxiJenuuu/NotiFlow.git
cd NotiFlow
npm install
```

Rename `.env-example` to `.env` and add your credentials:

```env
PORT=3000

# Telegram Configuration
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
TELEGRAM_CHAT_ID=your_telegram_chat_id

# Discord Configuration
DISCORD_WEBHOOK_URL=your_discord_webhook_url
```

Then, start the server:

```bash
npm start
```

---

## 📌 API Routes

Base URL:
```
POST http://localhost:3000/api/notifications
```

### ▶️ **Telegram Notification**

| Endpoint        | Method | Description              |
|-----------------|--------|--------------------------|
| `/telegram`     | POST   | Send Telegram message    |

#### Example body:

```json
{
  "message": "Hello from NotiFlow! 🚀"
}
```

---

### ▶️ **Discord Notification**

| Endpoint        | Method | Description              |
|-----------------|--------|--------------------------|
| `/discord`      | POST   | Send Discord message     |

#### Example body:

```json
{
  "message": "Hello from NotiFlow! 🎯"
}
```

---

## 🚧 **Usage Example (fetch)**

Send a notification using JavaScript (fetch API):

```javascript
fetch('http://localhost:3000/api/notifications/telegram', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    message: 'Test message from NotiFlow 🚀'
  })
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));
```

---

## 💡 **Contribute**

Feel free to contribute, open issues or pull requests. Feedback is always welcome!

---

## 📄 License

This project is licensed under the **MIT License**.

---

Built with ❤️ by [OxiJenuuu](https://github.com/OxiJenuuu).

