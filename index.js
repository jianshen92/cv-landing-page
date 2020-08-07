const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('.'))

app.get('/', (req, res) => {
    console.log(__dirname)
    res.sendFile(path.join(__dirname + '/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('Hello world listening on port', port);
});