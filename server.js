const PORT = 8080
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  return res.status(200).send('Welcome to the demo CI/CD Application')
})
app.get('/sad', (req, res) => {
  return res.status(200).send('Im Sad')
})

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})
