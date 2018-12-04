const express = require('express')
const app = express()
const port = process.env.PORT || 3333
const bookRoutes = require('./routes/bookRoutes')
const authorRoutes = require('./routes/authorRoutes')
const detailRoutes = require('./routes/detailRoutes')

app.get('/', (req, res) => {
  res.json('🍄')
})

app.use('/books', bookRoutes)
app.use('/authors', authorRoutes)
app.use('/details', detailRoutes)

function notFound(err, req, res, next) {
res.status(404).send({error: 'Not found!', status: 404, url: req.originalUrl})
}

function errorHandler(err, req, res, next) {
  console.error('ERROR', err)
  const stack = process.env.NODE_ENV !== 'production' ? err.stack : undefined
  res.status(500).send({
      error: err.message,
      stack,
    url: req.originalUrl 
  })
}


app.listen(port, () => {console.log(`Up on port ${port}`)})