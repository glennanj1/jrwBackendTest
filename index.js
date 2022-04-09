const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/form', (req, res) => {
    console.log(req.body);
    res.send('Get all forms route');
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
    const newQuote = new quote()
  }
)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

module.exports = router;
module.exports = mongoose;


