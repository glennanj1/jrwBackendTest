const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
let Quotes = require('./models/index')
const app = express()
const port = 3000
let bodyParser = require('body-parser')
app.use(bodyParser.json({ type: '*/*' }));

let mongoDB = 'mongodb://127.0.0.1:27017/JRWTransportDB?readPreference=primary&serverSelectionTimeoutMS=2000&appname=%5Bobject%20Object%5D&directConnection=true&ssl=false';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
let db = mongoose.connection;
db.on('open', () => { console.log('success my guy')})
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/form',  (req, res) => {
    console.log(req);
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const phone = req.body.phone
    const email = req.body.email
    const message = req.body.message

    const quote = {
      firstName,
      lastName,
      phone,
      email,
      message,
    }
    const newQuote = new Quotes(quote)
    newQuote.save().then(() => res.json('new customer quote')).catch(e => res.status(400).json('Error' + e))
  }
)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

module.exports = router;
module.exports = mongoose;


