const express = require('express');
const bodyParser = require('body-parser');
const urlShortener = require('./urlShortener');

const app = express();
const port = 5000;
// create application/json parser
var jsonParser = bodyParser.json();

app.post('/', jsonParser, (req, response) => {
    const urlToShorten = req.body;
    // console.log(JSON.stringify(req));
    console.log(urlToShorten);
    const result = urlShortener.echoRequest(urlToShorten.url);
    response.send(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
