const express = require('express')
const Request = require('request')
const app = express()

app.get('/', (req, res) => {
	res.send('MOVIE API')
})

// GET TEMPERATURE IN CELCIOUS
app.get('/get-movies', (req, res) => {
	res.status(200).send('Movie List')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
	console.log(`Weather API listening on ${port}...`)
})
