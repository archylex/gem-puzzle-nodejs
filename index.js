const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.bodyParser());
app.use(express.urlencoded());
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'views') + '/hello.html');
});
app.listen(port, () => console.log(`Start listening on port ${port}!`));
