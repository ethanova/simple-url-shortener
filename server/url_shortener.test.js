const urlShortener = require('./urlShortener');

test('Endpoint returns the body that was given in the body data', () => {
    // prepare
    const urlToEcho = 'http://www.tmobile.com';
    // act
    const result = urlShortener.echoRequest(urlToEcho);
    // validate
    expect(result).toBe(urlToEcho);
});
