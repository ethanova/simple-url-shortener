const helper = require('./helpers');
const port = require('./config').port;

const shortenedUrls = {
    // 'www.tmobile.com': 'abc123'
};

module.exports.shorten = (urlToShorten) => {
    if (shortenedUrls[urlToShorten] !== undefined) {
        const hash = shortenedUrls[urlToShorten];
        return `http://localhost:${port}/${hash}`;
    } else {
        const hash = helper.makeid();
        // generate new url
        shortenedUrls[urlToShorten] = hash;
        return `http://localhost:${port}/${hash}`;
    }
};
