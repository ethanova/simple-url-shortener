const urlShortener = require('./urlShortener');

test('shorten() returns a shortened url', () => {
    // prepare
    const urlToShorten = 'http://www.tmobile.com';
    // act
    const result = urlShortener.shorten(urlToShorten);
    // validate
    //TODO: regex: 'http://localhost:5000/.[7]'
    const splitUrl = result.split('/');
    const hash = splitUrl[3];
    console.log(hash);
    expect(hash.length).toBe(7);
    expect(result.indexOf('http://localhost:5000/')).toBeGreaterThan(-1);
});

test('shorten() returns the same shortened url a second time', () => {
    // prepare
    const urlToEcho = 'http://www.tmobile.com';
    // act
    const result = urlShortener.shorten(urlToEcho);
    const secondRunThroughResult = urlShortener.shorten(urlToEcho);
    // validate
    expect(result).toBe(secondRunThroughResult);
});
