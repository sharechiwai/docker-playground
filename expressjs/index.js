const express = require('express');
const app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

const server = app.listen(8080, function () {

  const host = server.address().address
  const port = server.address().port

  console.info("Server start http://%s:%s", host, port)

})