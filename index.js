const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/form', (req, res) => {
    console.log(req.body);
    res.send('Get all forms route');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


