const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded());
app.use(express.json());

app.get('/', (req, res) => {
    res.write('Hello!');
    res.end();
});
app.listen(port, () => console.log(`Start listening on port ${port}!`));
