const express = require('express');
const dotenv = require('dotenv');
const notificationRoutes = require('./routes/notifications');

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/notifications', notificationRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server activ pe portul ${process.env.PORT || 3000}`);
});
