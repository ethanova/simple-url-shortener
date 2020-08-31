const express = require('express');
const bodyParser = require('body-parser');
const urlShortener = require('./urlShortener');

const app = express();
const port = require('./config').port;
// create application/json parser
var jsonParser = bodyParser.json();


app.post('/', jsonParser, (req, response) => {
    const urlToShorten = req.body.url;
    if (urlToShorten.length === 0) {
        response.status(404);
        response.send();
        return;
    }
    const shortenedUrl = urlShortener.shorten(urlToShorten);
    response.send(shortenedUrl);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
