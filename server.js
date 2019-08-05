const express = require('express');

express()
    .use(express.static('dist'))
    .get('*', (req, res) => res.sendFile('dist/index.html'))
    .listen('8888');
