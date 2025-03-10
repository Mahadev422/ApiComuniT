require('dotenv').config();
const express = require('express');
const router = require('./routes/apiRouter');
const connectDb = require('./DB/connect');
const app = express();

app.get('/',(req, res) => {
  res.send("Hii I am live");
})
app.use(router);

const PORT = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDb(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`${PORT} YES I am connected.`);
    });
  } catch (err) {
    console.log(err);
  }
}

start();
  