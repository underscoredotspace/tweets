var express = require('express')
var app = express()
var path = require('path')
var morgan = require('morgan')

app.use('/bower_components', express.static(path.join(__dirname, '../bower_components')))
app.use(express.static(path.join(__dirname, '../client/public')))
app.use(morgan('dev'))

app.listen(3000, '127.0.0.1', function() {
  console.log(Date() + ': Express listening on port 3000')
}).on('error', function(err) {
  // Log and quit on any errors with the http server
  console.error(err);
  process.exit(1)
});